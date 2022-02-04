/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { dependencyContainer } from '../dependency-injection';
import { LOGGING_DEPENDENCY_TYPES } from './dependency-types';
import { Logger } from './logger';
import { default as winston } from 'winston';
import { interfaces } from 'inversify';

const loggerMap = new Map<string, Logger>();

/* Only Bind logging classes if not already bound. */
if (!dependencyContainer.isBound(LOGGING_DEPENDENCY_TYPES.LoggerFactory)) {
  dependencyContainer
    .bind<interfaces.Factory<Logger>>(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    .toFactory<Logger, ['']>((context: interfaces.Context) => {
      return (loggerName: string) => {
        const existing = loggerMap.get(loggerName);
        if (existing) {
          return existing;
        }

        const logger: Logger = winston.createLogger({
          transports: [
            new winston.transports.Console({
              format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp(),
                winston.format.align(),
                winston.format.printf(
                  (info) =>
                    `${loggerName}: ${info.timestamp} ${info.level} ${info.message}`,
                ),
              ),
            }),
          ],
        });

        loggerMap.set(loggerName, logger);

        return logger;
      };
    });
}

export { LOGGING_DEPENDENCY_TYPES };
export type { Logger };
