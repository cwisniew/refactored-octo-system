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

import { RouteHandler } from './route-handler';
import { Logger, LOGGING_DEPENDENCY_TYPES } from '../../utils/logging';
import { RouteManager } from './route-manager';
import { inject, injectable } from 'inversify';
import { Express } from 'express';

/**
 * Class that manages the {@link RouteHandler}s. for a server.
 */
@injectable()
export class RouteManagerImpl implements RouteManager {
  private readonly logger: Logger;
  private readonly routeHandlers: RouteHandler[] = [];

  /**
   * Creates a new route manager implementation.
   * @param loggerFactory the logger factory to create logging objects.
   */
  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: (name: string) => Logger,
  ) {
    this.logger = loggerFactory(this.constructor.name);
  }

  /**
   * Adds the routes in the {@link RouteHandler}s to the express app.
   * @param express the express app to add the routes to.
   */
  addRoutes = (express: Express): void => {
    this.routeHandlers.forEach((routeHandler) => {
      routeHandler.addRoutes(express);
    });
  };

  /**
   * Registers a {@link RouteHandler} to be managed by this class.
   * @param routes
   */
  registerRouteHandler = (routes: RouteHandler): void => {
    this.routeHandlers.push(routes);
  };

  /**
   * Registers multiple route handlers to the route manager.
   * @param routes the route handlers to register.
   */
  registerRouteHandlers(routes: RouteHandler[]): void {
    routes.forEach((r) => this.registerRouteHandler(r));
  }
}
