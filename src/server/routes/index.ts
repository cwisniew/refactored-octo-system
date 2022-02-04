/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { dependencyContainer } from '../../utils/dependency-injection';
import { ROUTES_DEPENDENCY_TYPES } from './dependency-types';
import { RouteHandler } from './RouteHandler';
import { RootRouteHandler } from './RootRouteHandler';
import { RouteManager } from './RouteManager';
import { RouteManagerImpl } from './RouteManagerImpl';

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
    .bind<RouteManager>(ROUTES_DEPENDENCY_TYPES.RouteManager)
    .to(RouteManagerImpl)
    .inSingletonScope()
    .onActivation((context, routeHandler): RouteManager => {
      const rootRouteHandler = context.container.get<RouteHandler>(
        ROUTES_DEPENDENCY_TYPES.RootRouteHandler,
      );
      routeHandler.registerRouteHandler(rootRouteHandler);
      return routeHandler;
    });
}

export type { RouteManager } from './RouteManager';
export { ROUTES_DEPENDENCY_TYPES } from './dependency-types';
