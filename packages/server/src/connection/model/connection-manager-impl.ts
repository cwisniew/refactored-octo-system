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

import { Connection } from './connection';
import { inject, injectable } from 'inversify';
import { Logger, LOGGING_DEPENDENCY_TYPES } from '../../utils/logging';
import { I18N_DEPENDENCY_TYPES, I18NProvider } from '../../utils/i18n';
import { ConnectionManager } from './connection-manager';
import { i18n } from 'i18next';

/**
 * A ConnectionManager is responsible for managing the connections to the server.
 */
@injectable()
export class ConnectionManagerImpl implements ConnectionManager {
  /**
   * Logger used for logging messages.
   * @private
   */
  private readonly logger: Logger;

  /**
   * The object used for translations.
   * @private
   */
  private readonly i18n: i18n;

  /**
   * Map of player name to connections to the server.
   * @private
   */
  private readonly connections = new Map<string, Connection>();

  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: (name: string) => Logger,
    @inject(I18N_DEPENDENCY_TYPES.I18N) i18nProvider: I18NProvider,
  ) {
    this.logger = loggerFactory(this.constructor.name);
    this.i18n = i18nProvider.i18n();
  }

  /**
   * Returns the connections to the server.
   */
  getConnections(): Connection[] {
    return Array.from(this.connections.values());
  }

  /**
   * Returns the connection to the server for a specific player.
   * @param name the name of the player.
   */
  getConnection(name: string): Connection | undefined {
    return this.connections.get(name);
  }
}
