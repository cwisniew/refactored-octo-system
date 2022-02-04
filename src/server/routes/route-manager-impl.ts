/*
 * This software Copyright by Craig Wisniewski
 * license TBD
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
}
