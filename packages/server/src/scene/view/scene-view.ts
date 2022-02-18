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

import { Scene } from '../model';

/**
 * Information about a scene.
 */
export interface SceneData {
  /** The id of the scene. */
  id: string;
  /** the name of the scene. */
  name: string;
}

/**
 * Information about the list of scenes.
 */
export interface SceneListData {
  scenes: {
    id: string;
    name: string;
  }[];
}

/**
 * Interface of objects that extract data from a {@link Scene} object.
 */
export interface SceneView {
  /**
   * Extract all the data from the scene.
   * @param scene if string the id of a {@link Scene} or the {@link Scene}
   * itself.
   */
  getSceneData(scene: string | Scene): SceneData;

  /**
   * Extract data from the list scenes.
   */
  getSceneList(): SceneListData;
}
