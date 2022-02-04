/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { VTTServer } from './VTTServer';
import { inject, injectable } from 'inversify';
import {
  Logger,
  LoggerFactory,
  LOGGING_DEPENDENCY_TYPES,
} from '../utils/logging';
import { default as express, Express } from 'express';
import * as http from 'http';
@injectable()
export class VTTServerImpl implements VTTServer {
  /**
   * The express application object.
   * @private
   */
  private expressApp: Express;

  /**
   * The port number to start the server on.
   * @private
   */
  private port: number;

  /**
   * The {@Logger} object to use for logging.
   * @private
   */
  private readonly logger: Logger;

  /**
   * The HTTP server listening for requests.
   * @private
   */
  private server?: http.Server;

  /**
   * Creates a new instance of the VTTServerImpl class.
   * @param loggerFactory The {@LoggerFactory} to use for logging.
   */
  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: LoggerFactory,
  ) {
    this.logger = loggerFactory.getLogger(this.constructor.name);
    this.expressApp = express();
    this.port = 3000;
    this.expressApp.set('', this);
    this.expressApp.use(express.static('public'));
  }

  /**
   * Starts the VTT server.
   */
  start = async () => {
    process.on('exit', this.exit);
    process.on('SIGINT', this.exit);
    process.on('SIGBREAK', this.exit);

    this.server = http.createServer(this.expressApp);
  };

  /**
   * Performs any clean up on exit.
   */
  private exit = async () => {
    this.logger.info('Exiting...');
    if (this.server) {
      await this.server.close();
      this.server = undefined;
    }
  };
}
