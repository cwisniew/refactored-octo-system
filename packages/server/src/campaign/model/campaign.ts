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

import { Scene } from '../../scene';

/**
 * Interface used for Campaign objects.
 */
export interface Campaign {
  /** The id of the model */
  id: string;

  /**
   * Sets the name of the model.
   * @param name the name of the model.
   */
  setName(name: string): void;

  /**
   * Returns the name of the model.
   */
  getName(): string;

  /**
   * Sets the version of the model format.
   * @param version the version of the model format.
   */
  setFormatVersion(version: string): void;

  /**
   * Returns the version of the model format.
   */
  getFormatVersion(): string;

  /**
   * Returns ids of the game scenes this model.
   */
  getSceneIds(): string[];

  /**
   * Adds a scene to the model
   * @param scene the {@link Scene} to add to the model.
   */
  addScene(scene: Scene): void;

  /**
   * Removes a scene from the model.
   * @param scene a string which is treated as the id of the {@link Scene}
   * or the actual {@link Scene} to remove.
   */
  removeScene(scene: string | Scene): void;
}
