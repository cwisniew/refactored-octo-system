/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { RouteHandler } from './RouteHandler';
import {
  Logger,
  LoggerFactory,
  LOGGING_DEPENDENCY_TYPES,
} from '../../utils/logging';
import { inject, injectable } from 'inversify';
import { Express } from 'express';

@injectable()
export class RootRouteHandler implements RouteHandler {
  private readonly logger: Logger;

  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: LoggerFactory,
  ) {
    this.logger = loggerFactory.getLogger(this.constructor.name);
  }

  addRoutes(expressApp: Express): void {
    expressApp.get('/', (req, res) => {
      res.send('<h2>Hello World...</h2>');
    });
  }
}
