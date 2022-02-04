/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { RouteHandler } from './RouteHandler';
import { Express } from 'express';

/**
 * Interface implemented by classes that manage route handlers.
 */
export interface RouteManager {
  /**
   * Adds the routes to the express application/
   * @param express the express application to add the routes to.
   */
  addRoutes(express: Express): void;

  /**
   * Registers a route handler to the route manager.
   * @param routes
   */
  registerRouteHandler(routes: RouteHandler): void;
}
