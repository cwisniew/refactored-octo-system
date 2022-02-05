/*
 * This software Copyright Craig Wisniewski, and
 * licensed under the Affero GPL Version 3 or, at your option, any later
 * version.
 *
 * MapTool Source Code is distributed in the hope that it will be
 * useful, but WITHOUT ANY WARRANTY; without even the implied warranty
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * You should have received a copy of the GNU Affero General Public
 * License * along with this source Code.  If not, please visit
 * <http://www.gnu.org/licenses/> and specifically the Affero license
 * text at <http://www.gnu.org/licenses/agpl.html>.
 */

import { GameMap } from '../../model/game-map';

/**
 * Information about a game map.
 */
export interface GameMapData {
  /** The ide of the game map. */
  id: string;
  /** the name of the game map. */
  name: string;
}

/**
 * Information about the list of game maps.
 */
export interface GameMapListData {
  gameMaps: {
    id: string;
    name: string;
  }[];
}

/**
 * Interface of objects that extract data from a {@link GameMap} object.
 */
export interface GameMapView {
  /**
   * Extract all the data from the game map.
   * @param gameMap if string the id of a {@link GameMap} or the {@link GameMap}
   * itself.
   */
  getGameMapData(gameMap: string | GameMap): GameMapData;

  /**
   * Extract data from the list game maps.
   */
  getGameMapList(): GameMapListData;
}
