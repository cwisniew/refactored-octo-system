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

import { GameMap } from './game-map';

/**
 * Interface for objects that store {@link GameMap}s.
 */
export interface GameMapStore {
  /**
   * Returns ids of the game maps.
   */
  getMapIds(): string[];

  /**
   * Adds a game map to the store.
   * @param gameMap the {@link GameMap} to add to the model.
   */
  addGameMap(gameMap: GameMap): void;

  /**
   * Removes a game map from the store.
   * @param gameMap either a string which is treated as the id of the {@link GameMap}
   * or the actual {@link GameMap} to remove.
   */
  removeGameMap(gameMap: string | GameMap): void;

  /**
   * Returns the {@link GameMap} from the store, or undefined if it is not
   * in the store.
   * @param id the id of the {@link GameMap} to retrieve.
   */
  getGameMap(id: string): GameMap | undefined;

  /**
   * Returns if the store contains the specified {@link GameMap}.
   * @param id the id of the {@link GameMap} to check.
   */
  hasGameMap(id: string): boolean;

  /**
   * Clears all the game maps from the store.
   */
  clear(): void;

  /**
   * Returns the game maps in the game store.
   */
  getGameMapList(): GameMap[];
}
