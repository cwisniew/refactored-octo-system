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

import { dependencyContainer } from '../../utils/dependency-injection';
import { SCENE_DEPENDENCY_TYPES } from './dependency-types';
import { Scene } from './scene';
import { SceneImpl } from './scene-impl';
import { SceneStore } from './scene-store';
import { SceneStoreImpl } from './scene-store-impl';
import { registerStarterSceneFactory } from './starter-game-map-factory';

/* Only bind model if it is not already bound. */
if (!dependencyContainer.isBound(SCENE_DEPENDENCY_TYPES.Scene)) {
  dependencyContainer
    .bind<Scene>(SCENE_DEPENDENCY_TYPES.Scene)
    .to(SceneImpl)
    .inSingletonScope();

  dependencyContainer
    .bind<SceneStore>(SCENE_DEPENDENCY_TYPES.SceneStore)
    .to(SceneStoreImpl)
    .inSingletonScope();

  registerStarterSceneFactory();
}

export type { Scene };
export type { SceneStore };
export { SCENE_DEPENDENCY_TYPES };
