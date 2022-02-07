/*
 * This software Copyright Craig Wisniewski, and
 * licensed under the Affero GPL Version 3 or, at your option, any later
 * version.
 *
 * MapTool Source Code is distributed in the hope that it will be
 * useful, but WITHOUT ANY WARRANTY; without even the implied warranty
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * You should have received a copy of the GNU Affero General Public
 * License * along with this source Code.  If not, please visit
 * <http://www.gnu.org/licenses/> and specifically the Affero license
 * text at <http://www.gnu.org/licenses/agpl.html>.
 */

import { VTTServer } from './vtt-server';
import { inject, injectable } from 'inversify';
import { Logger, LOGGING_DEPENDENCY_TYPES } from '../utils/logging';
import { default as express, Express } from 'express';
import * as http from 'http';
import { RouteManager, ROUTES_DEPENDENCY_TYPES } from './routes';
import { I18N_DEPENDENCY_TYPES, I18NProvider } from '../utils/i18n';
import { i18n } from 'i18next';
import { Server } from 'socket.io';
import { default as bodyParser } from 'body-parser';
import cors from 'cors';

/**
 * Class that implements the server
 */
@injectable()
export class VttServerImpl implements VTTServer {
  /**
   * The express application object.
   * @private
   */
  private readonly expressApp: Express;

  /**
   * The port number to start the server on.
   * @private
   */
  private readonly port: number;

  /**
   * Object used for translations.
   * @private
   */
  private readonly i18n: i18n;

  /**
   * The {@Logger} object to use for logging.
   * @private
   */
  private readonly logger: Logger;

  /**
   * The HTTP server listening for requests.
   * @private
   */
  private server?: http.Server;

  /**
   * The web socket server connection
   * @private
   */
  private socketIoServer?: Server;

  /**
   * Creates a new instance of the VttServerImpl class.
   * @param loggerFactory The factory function to create {@link Logger}s/
   * @param routeManager the {@link RouteManager} that manages all the routes.
   * @param i18nProvider the provider to get the i18n object.
   */
  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: (name: string) => Logger,
    @inject(ROUTES_DEPENDENCY_TYPES.RouteManager)
    private readonly routeManager: RouteManager,
    @inject(I18N_DEPENDENCY_TYPES.I18N) i18nProvider: I18NProvider,
  ) {
    //this.logger = loggerFactory.getLogger(this.constructor.name);
    this.logger = loggerFactory(this.constructor.name);
    this.expressApp = express();
    this.i18n = i18nProvider.i18n();
    this.port = 3000;
    this.expressApp.set('', this);
    this.expressApp.use(express.static('public'));
  }

  /**
   * Starts the VTT server.
   */
  start = async () => {
    process.on('exit', this.exit);
    process.on('SIGINT', this.exit);
    process.on('SIGBREAK', this.exit);

    this.server = http.createServer(this.expressApp);

    this.logger.info(this.i18n.t('server.wsStarted', { port: this.port }));
    this.socketIoServer = new Server(this.server, {
      cors: { origin: 'http://localhost:3001' },
    });

    this.addMiddleware();
    this.addRoutes();

    // TODO: CDW add on connection callback for socket io here

    this.server.listen(this.port, () => {
      this.logger.info(this.i18n.t('server.started', { port: this.port }));
      //`Server is running on port ${this.port}`);
    });
  };

  /**
   * Performs any clean up on exit.
   */
  private exit = async () => {
    if (this.server) {
      this.logger.info(this.i18n.t('server.exiting'));
      await this.server.close();
      this.server = undefined;
    }
  };

  /**
   * Adds the routes to the server.
   */
  private addRoutes = () => {
    this.routeManager.addRoutes(this.expressApp);
  };

  /**
   * Adds middleware components to the express server.
   * @private
   */
  private addMiddleware = () => {
    this.expressApp.use(cors());
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: true }));
  };
}
