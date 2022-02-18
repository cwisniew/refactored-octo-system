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
import { Team } from './team';

/**
 * Interface for player manager.
 */
export interface PlayerManager {
  /**
   * Adds a player to the player manager.
   * @param player the player to add.
   */
  addPlayer(player: Player): void;

  /**
   * Removes a player from the player manager.
   * @param player the player or player name to remove.
   */
  removePlayer(player: string | Player): void;

  /**
   * Returns if the player manager contains the player.
   * @param player the player name to check.
   */
  hasPlayer(player: string): boolean;

  /**
   * Returns the player with the given name.
   * @param player the player name to get.
   */
  getPlayer(player: string): Player | undefined;

  /**
   * Returns all the players in the player manager.
   */
  getPlayers(): Player[];

  /**
   * Returns the default team for unassigned players.
   */
  getDefaultTeam(): Team;
}
