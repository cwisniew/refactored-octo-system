/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { VTTServer } from './vtt-server';
import { inject, injectable } from 'inversify';
import {
  Logger,
  LoggerFactory,
  LOGGING_DEPENDENCY_TYPES,
} from '../utils/logging';
import { default as express, Express } from 'express';
import * as http from 'http';
import { RouteManager, ROUTES_DEPENDENCY_TYPES } from './routes';

/**
 * Class that implements the server
 */
@injectable()
export class VttServerImpl implements VTTServer {
  /**
   * The express application object.
   * @private
   */
  private expressApp: Express;

  /**
   * The port number to start the server on.
   * @private
   */
  private port: number;

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
   * Creates a new instance of the VttServerImpl class.
   * @param loggerFactory The {@LoggerFactory} to use for logging.
   * @param routeManager the {@RouteManager} that manages all the routes.
   */
  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: LoggerFactory,
    @inject(ROUTES_DEPENDENCY_TYPES.RouteManager)
    private readonly routeManager: RouteManager,
  ) {
    this.logger = loggerFactory.getLogger(this.constructor.name);
    this.expressApp = express();
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

    this.addRoutes();

    this.server.listen(this.port, () => {
      this.logger.info(`Server is running on port ${this.port}`);
    });
  };

  /**
   * Performs any clean up on exit.
   */
  private exit = async () => {
    this.logger.info('Exiting...');
    if (this.server) {
      await this.server.close();
      this.server = undefined;
    }
  };

  private addRoutes = () => {
    this.routeManager.addRoutes(this.expressApp);
  };
}
