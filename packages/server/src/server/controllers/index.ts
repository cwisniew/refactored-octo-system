/*
 * This software Copyright Craig Wisniewski, and
 * licensed under the Affero GPL Version 3 or, at your option, any later
 * version.
 *
 * This Source Code is distributed in the hope that it will be
 * useful, but WITHOUT ANY WARRANTY; without even the implied warranty
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * You should have received a copy of the GNU Affero General Public
 * License * along with this source Code.  If not, please visit
 * <http://www.gnu.org/licenses/> and specifically the Affero license
 * text at <http://www.gnu.org/licenses/agpl.html>.
 */

import { dependencyContainer } from '../../utils/dependency-injection';
import { Controller } from './controller';
import { RootRouteHandler } from './root-route-handler';
import { ControllerManager } from './controller-manager';
import { CONTROLLER_DEPENDENCY_TYPES } from './dependency-types';
import { ControllerManagerImpl } from './controller-manager-impl';

/**
 * Create the binding for {@link RouteManager} and any {@link Controller} objects.
 * The `.onActivation()` method for the {@link RouteManager} binding should be
 * used to create any RouteHandler objects and register them.
 * @example
 * ```typescript
 * dependencyContainer
 *    .bind<RoutesManager>(ROUTE_DEPENDENCY_TYPES.RoutesManager)
 *    .to(RoutesManagerImpl)
 *    .inSingletonScope()
 *    .onActivation((context, routesHandler) => {
 *        const rootRouteHandler = context.container.get<RouteHandler>(
 *             ROUTE_DEPENDENCY_TYPES.rootRouteHandler,
 *        );
 *    routesHandler.registerRoutes(rootRouteHandler);
 *    return routesHandler;
 * });
 * ```
 */

/* Only register if it has not already been registered. */
if (
  !dependencyContainer.isBound(CONTROLLER_DEPENDENCY_TYPES.ControllerManager)
) {
  dependencyContainer
    .bind<Controller>(CONTROLLER_DEPENDENCY_TYPES.RootRouteHandler)
    .to(RootRouteHandler)
    .inSingletonScope();

  dependencyContainer
    .bind<ControllerManager>(CONTROLLER_DEPENDENCY_TYPES.ControllerManager)
    .to(ControllerManagerImpl)
    .inSingletonScope()
    .onActivation((context, routeManager): ControllerManager => {
      const controllers: Controller[] = [];

      controllers.push(
        context.container.get<Controller>(
          CONTROLLER_DEPENDENCY_TYPES.RootRouteHandler,
        ),
      );

      routeManager.registerControllers(controllers);
      return routeManager;
    });
}

export type { ControllerManager };
export { CONTROLLER_DEPENDENCY_TYPES };
