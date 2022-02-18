/*
 * This software Copyright Craig Wisniewski, and
 * licensed under the Affero GPL Version 3 or, at your option, any later
 * version.
 *
 * This Source Code is distributed in the hope that it will be
 * useful, but WITHOUT ANY WARRANTY; without even the implied warranty
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * You should have received a copy of the GNU Affero General Public
 * License * along with this source Code.  If not, please visit
 * <http://www.gnu.org/licenses/> and specifically the Affero license
 * text at <http://www.gnu.org/licenses/agpl.html>.
 */

import { dependencyContainer } from '../dependency-injection';
import { LOGGING_DEPENDENCY_TYPES } from './dependency-types';
import { Logger } from './logger';
import { default as winston } from 'winston';
import { interfaces } from 'inversify';

/**
 * Map of existing logging objects.
 */
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
              level: 'debug',
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
