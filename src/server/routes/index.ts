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

import { dependencyContainer } from '../../utils/dependency-injection';
import { ROUTES_DEPENDENCY_TYPES } from './dependency-types';
import { RouteHandler } from './route-handler';
import { RootRouteHandler } from './root-route-handler';
import { RouteManager } from './route-manager';
import { RouteManagerImpl } from './route-manager-impl';
import { CampaignRouteHandler } from './campaign/campaign-route-handler';
import { GameMapRouteHandler } from './game-map/game-map-route-handler';

/**
 * Create the binding for {@link RouteManager} and any {@link RouteHandler} objects.
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
if (!dependencyContainer.isBound(ROUTES_DEPENDENCY_TYPES.RouteManager)) {
  dependencyContainer
    .bind<RouteHandler>(ROUTES_DEPENDENCY_TYPES.RootRouteHandler)
    .to(RootRouteHandler)
    .inSingletonScope();

  dependencyContainer
    .bind<RouteHandler>(ROUTES_DEPENDENCY_TYPES.CampaignRouteHandler)
    .to(CampaignRouteHandler)
    .inSingletonScope();

  dependencyContainer
    .bind<RouteHandler>(ROUTES_DEPENDENCY_TYPES.GameMapRouteHandler)
    .to(GameMapRouteHandler)
    .inSingletonScope();

  dependencyContainer
    .bind<RouteManager>(ROUTES_DEPENDENCY_TYPES.RouteManager)
    .to(RouteManagerImpl)
    .inSingletonScope()
    .onActivation((context, routeManager): RouteManager => {
      const routeHandlers: RouteHandler[] = [];

      routeHandlers.push(
        context.container.get<RouteHandler>(
          ROUTES_DEPENDENCY_TYPES.RootRouteHandler,
        ),
      );

      routeHandlers.push(
        context.container.get<RouteHandler>(
          ROUTES_DEPENDENCY_TYPES.CampaignRouteHandler,
        ),
      );

      routeHandlers.push(
        context.container.get<GameMapRouteHandler>(
          ROUTES_DEPENDENCY_TYPES.GameMapRouteHandler,
        ),
      );

      routeManager.registerRouteHandlers(routeHandlers);
      return routeManager;
    });
}

export type { RouteManager };
export { ROUTES_DEPENDENCY_TYPES };
