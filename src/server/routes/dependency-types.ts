/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

/**
 * Dependency Types for route handlers.
 */
export const ROUTES_DEPENDENCY_TYPES = {
  /** The class that manages all the route handlers. */
  RouteManager: Symbol.for('RouteManager'),
  /** The root route handler. */
  RootRouteHandler: Symbol.for('RootRouteHandler'),
};
