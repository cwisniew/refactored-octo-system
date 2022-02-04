/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { Logger } from './Logger';

/**
 * Interface for a factory that creates loggers.
 */
export interface LoggerFactory {
  /**
   * Return a {@link Logger} with the name tp be used for logging.
   * @param name
   */
  getLogger(name: string): Logger;
}
