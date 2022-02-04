/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { Express } from 'express';

/**
 * Interface for classes that handle server routes.
 */
export interface RouteHandler {
  /**
   * Add routes for this handler to the express server.
   * @param expressApp the express server to add routes to.
   */
  addRoutes(expressApp: Express): void;
}
