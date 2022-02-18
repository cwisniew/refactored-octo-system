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

import { dependencyContainer } from '../../utils/dependency-injection';
import { SceneView } from './scene-view';
import { SCENE_VIEW_DEPENDENCY_TYPES } from './dependency-types';
import { SceneViewImpl } from './scene-view-impl';

/* Only bind if not already bound. */
if (!dependencyContainer.isBound(SCENE_VIEW_DEPENDENCY_TYPES.SceneView)) {
  dependencyContainer
    .bind<SceneView>(SCENE_VIEW_DEPENDENCY_TYPES.SceneView)
    .to(SceneViewImpl)
    .inSingletonScope();
}

export { SCENE_VIEW_DEPENDENCY_TYPES };
export type { SceneView };
