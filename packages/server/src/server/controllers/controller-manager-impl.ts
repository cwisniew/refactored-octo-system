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

import { Controller } from './controller';
import { Logger, LOGGING_DEPENDENCY_TYPES } from '../../utils/logging';
import { inject, injectable } from 'inversify';
import { Express } from 'express';
import { ControllerManager } from './controller-manager';
import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { SocketId } from 'socket.io-adapter';

/**
 * Class that manages the {@link Controller}s. for a server.
 */
@injectable()
export class ControllerManagerImpl implements ControllerManager {
  /**
   * Logger for logging messages.
   * @private
   */
  private readonly logger: Logger;

  /**
   * Controllers.
   * @private
   */
  private readonly controllers: Controller[] = [];

  /**
   * Web Sockets.
   * @private
   */
  private readonly webSockets = new Map<
    SocketId,
    Socket<DefaultEventsMap, DefaultEventsMap>
  >();

  /**
   * Creates a new controller manager implementation.
   * @param loggerFactory the logger factory to create logging objects.
   */
  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: (name: string) => Logger,
  ) {
    this.logger = loggerFactory(this.constructor.name);
  }

  /**
   * Adds the routes in the {@link Controller}s to the express app.
   * @param express the express app to add the routes to.
   */
  addRoutes = (express: Express): void => {
    this.controllers.forEach((controllers) => {
      controllers.addRoutes(express);
    });
  };

  /**
   * Registers a {@link Controller} to be managed by this class.
   * @param controller the controller to handle.
   */
  registerController = (controller: Controller): void => {
    this.controllers.push(controller);
  };

  /**
   * Registers multiple route handlers to the route manager.
   * @param controllers the route handlers to register.
   */
  registerControllers(controllers: Controller[]): void {
    controllers.forEach((r) => this.registerController(r));
  }

  webSocketConnected(
    socketIoServer: Server,
    socket: Socket<DefaultEventsMap, DefaultEventsMap>,
  ): void {
    this.webSockets.set(socket.id, socket);
  }
}
