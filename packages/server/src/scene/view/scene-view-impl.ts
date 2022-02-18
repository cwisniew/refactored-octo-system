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

import { inject, injectable } from 'inversify';
import { SceneData, SceneListData, SceneView } from './scene-view';
import { Scene, SCENE_DEPENDENCY_TYPES, SceneStore } from '../model';

/**
 * Class that extract data from a {@link Scene} object.
 */
@injectable()
export class SceneViewImpl implements SceneView {
  constructor(
    @inject(SCENE_DEPENDENCY_TYPES.SceneStore)
    private readonly sceneStore: SceneStore,
  ) {}

  /**
   * Extract all the data from the scene.
   * @param scene if string the id of a {@link Scene} or the {@link Scene}
   * itself.
   */
  getSceneData(scene: string | Scene): SceneData {
    let sc: Scene | undefined;
    if (typeof scene === 'string') {
      sc = this.sceneStore.getScene(scene);
      if (!sc) {
        throw `Unknown scene id = ${scene}`;
      }
    } else {
      sc = scene;
    }
    return this.extractSceneData(sc);
  }

  /**
   * Extracts and returns the data from the scene.
   * @param scene the scene to extract the data for.
   * @private
   */
  private extractSceneData(scene: Scene): SceneData {
    return {
      id: scene.id,
      name: scene.getName(),
    };
  }

  /**
   * Extract data from the list of scenes.
   */
  getSceneList(): SceneListData {
    return {
      scenes: this.sceneStore.getSceneList().map((s) => {
        return {
          id: s.id,
          name: s.getName(),
        };
      }),
    };
  }
}
