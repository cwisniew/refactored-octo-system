/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { RouteHandler } from './route-handler';
import { Logger, LOGGING_DEPENDENCY_TYPES } from '../../utils/logging';
import { inject, injectable } from 'inversify';
import { Express } from 'express';

/**
 * The handler for the root route.
 */
@injectable()
export class RootRouteHandler implements RouteHandler {
  private readonly logger: Logger;

  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: (name: string) => Logger,
  ) {
    this.logger = loggerFactory(this.constructor.name);
  }

  addRoutes(expressApp: Express): void {
    expressApp.get('/', (req, res) => {
      res.send('<h2>Hello World...</h2>');
    });
  }
}
