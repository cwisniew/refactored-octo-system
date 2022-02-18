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

import { Player } from '../model';

/**
 * Information about a player.
 */
export interface PlayerData {
  name: string;
  teamName: string;
}

/**
 * Information about a list of players.
 */
export interface PlayerListData {
  players: {
    name: string;
    teamName: string;
  }[];
}

/**
 * Interface of objects that extract data from {@link Player} objects.
 */
export interface PlayerView {
  /**
   * Extract all the information for a player.
   * @param player if string the name of the {@link Player} or the {@link Player}.
   */
  getPlayerData(player: string | Player): PlayerData;

  /**
   * Extract data from the list of players.
   */
  getPlayerList(): PlayerListData;
}
