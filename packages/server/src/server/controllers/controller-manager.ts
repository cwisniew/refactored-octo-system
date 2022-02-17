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
import { Express } from 'express';
import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

/**
 * Interface implemented by classes that manage controllers.
 */
export interface ControllerManager {
  /**
   * Adds the routes to the express application/
   * @param express the express application to add the routes to.
   */
  addRoutes(express: Express): void;

  /**
   * Registers a route handler to the route manager.
   * @param controller the controller to register.
   */
  registerController(controller: Controller): void;

  /**
   * Registers multiple route handlers to the route manager.
   * @param controllers the controllers to register.
   */
  registerControllers(controllers: Controller[]): void;

  /**
   * Register a connected web socket.
   * @param socketIoServer the web socket server connected to.
   * @param socket the web socket.
   */
  webSocketConnected(
    socketIoServer: Server,
    socket: Socket<DefaultEventsMap, DefaultEventsMap>,
  ): void;
}
