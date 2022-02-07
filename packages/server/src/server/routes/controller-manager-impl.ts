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

/**
 * Class that manages the {@link Controller}s. for a server.
 */
@injectable()
export class ControllerManagerImpl implements ControllerManager {
  private readonly logger: Logger;
  private readonly routeHandlers: Controller[] = [];

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
    this.routeHandlers.forEach((routeHandler) => {
      routeHandler.addRoutes(express);
    });
  };

  /**
   * Registers a {@link Controller} to be managed by this class.
   * @param controller the controller to handle.
   */
  registerController = (controller: Controller): void => {
    this.routeHandlers.push(controller);
  };

  /**
   * Registers multiple route handlers to the route manager.
   * @param controllers the route handlers to register.
   */
  registerControllers(controllers: Controller[]): void {
    controllers.forEach((r) => this.registerController(r));
  }
}
