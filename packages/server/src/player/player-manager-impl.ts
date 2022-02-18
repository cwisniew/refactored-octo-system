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

import { Player } from './player';
import { inject, injectable } from 'inversify';
import { Logger, LOGGING_DEPENDENCY_TYPES } from '../utils/logging';
import { I18N_DEPENDENCY_TYPES, I18NProvider } from '../utils/i18n';
import { PlayerManager } from './player-manager';

/**
 * A PlayerManager implementation that manages players for the game.
 */
@injectable()
export class PlayerManagerImpl implements PlayerManager {
  /**
   * The logger for log messages.
   * @private
   */
  private readonly logger: Logger;

  /**
   * The I18NProvider for translating messages.
   * @private
   */
  private readonly playerMap = new Map<string, Player>();

  /**
   * Creates a new PlayerManagerImpl.
   * @param loggerFactory the factory for retrieving the logging object.
   * @param i18nProvider the I18NProvider for translating messages.
   */
  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: (name: string) => Logger,
    @inject(I18N_DEPENDENCY_TYPES.I18N) i18nProvider: I18NProvider,
  ) {
    this.logger = loggerFactory(this.constructor.name);
  }

  /**
   * Adds a player to the player manager.
   * @param player the player to add.
   */
  addPlayer(player: Player): void {
    this.playerMap.set(player.name, player);
  }
  /**
   * Removes a player from the player manager.
   * @param player the player or player name to remove.
   */
  removePlayer(player: string | Player): void {
    if (typeof player === 'string') {
      this.playerMap.delete(player);
    } else {
      this.playerMap.delete(player.name);
    }
  }

  /**
   * Returns if the player manager contains the player.
   * @param player the player name to check.
   */
  hasPlayer(player: string): boolean {
    return this.playerMap.has(player);
  }
}
