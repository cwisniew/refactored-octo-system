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

import { Scene } from './scene';

/**
 * Interface for objects that store {@link Scene}s.
 */
export interface SceneStore {
  /**
   * Returns ids of the scenes.
   */
  getSceneIds(): string[];

  /**
   * Adds a scene to the store.
   * @param scene the {@link Scene} to add to the model.
   */
  addScene(scene: Scene): void;

  /**
   * Removes a scene from the store.
   * @param scene either a string which is treated as the id of the {@link Scene}
   * or the actual {@link Scene} to remove.
   */
  removeScene(scene: string | Scene): void;

  /**
   * Returns the {@link Scene} from the store, or undefined if it is not
   * in the store.
   * @param id the id of the {@link Scene} to retrieve.
   */
  getScene(id: string): Scene | undefined;

  /**
   * Returns if the store contains the specified {@link Scene}.
   * @param id the id of the {@link Scene} to check.
   */
  hasScene(id: string): boolean;

  /**
   * Clears all the game maps from the store.
   */
  clear(): void;

  /**
   * Returns the scenes in the game store.
   */
  getSceneList(): Scene[];
}
