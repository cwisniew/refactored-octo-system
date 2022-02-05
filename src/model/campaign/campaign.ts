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

import { GameMap } from '../game-map';

/**
 * Interface used for Campaign objects.
 */
export interface Campaign {
  /** The id of the campaign */
  id: string;

  /**
   * Sets the name of the campaign.
   * @param name the name of the campaign.
   */
  setName(name: string): void;

  /**
   * Returns the name of the campaign.
   */
  getName(): string;

  /**
   * Sets the version of the campaign format.
   * @param version the version of the campaign format.
   */
  setFormatVersion(version: string): void;

  /**
   * Returns the version of the campaign format.
   */
  getFormatVersion(): string;

  /**
   * Returns ids of the game maps for this campaign.
   */
  getMapIds(): string[];

  /**
   * Adds a game map to the campaign
   * @param gameMap the {@link GameMap} to add to the campaign.
   */
  addGameMap(gameMap: GameMap): void;

  /**
   * Removes a game map from the campaign.
   * @param gameMap either a string which is treated as the id of the {@link GameMap}
   * or the actual {@link GameMap} to remove.
   */
  removeGameMap(gameMap: string | GameMap): void;
}
