/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { default as winston } from 'winston';
import { injectable } from 'inversify';
import { LoggerFactory } from './logger-factory';
import { Logger } from './logger';

/**
 * The logger factory implementation.
 */
@injectable()
export class LoggerFactoryImpl implements LoggerFactory {
  private readonly loggers = new Map<string, Logger>();

  /**
   * Return a {@link Logger} with the name tp be used for logging.
   * @param name
   */
  public getLogger(name: string): Logger {
    const existingLogger = this.loggers.get(name);
    if (existingLogger) {
      return existingLogger;
    }

    const logger = winston.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp(),
            winston.format.align(),
            winston.format.printf(
              (info) =>
                `${name}: ${info.timestamp} ${info.level} ${info.message}`,
            ),
          ),
        }),
      ],
    });

    this.loggers.set(name, logger);
    return logger;
  }
}
