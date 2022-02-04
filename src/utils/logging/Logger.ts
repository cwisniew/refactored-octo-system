/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { Logger as WinstonLogger } from 'winston';

/**
 * Interface for classes that implement logging, A {@link LoggerFactory} is used to create the logging objects
 * that implement this interface.
 */
export type Logger = WinstonLogger;
