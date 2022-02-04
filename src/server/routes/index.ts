/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { dependencyContainer } from '../../utils/dependency-injection';
import { ROUTES_DEPENDENCY_TYPES } from './dependency-types';

/**
 * Create the binding for {@link RoutesManager} and any {@link RouteHandler} objects.
 * The `.onActivation()` method for the {@link RoutesManager} binding should be
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
}
