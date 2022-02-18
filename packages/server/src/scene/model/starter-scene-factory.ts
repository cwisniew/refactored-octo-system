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

import { interfaces } from 'inversify';
import { Scene, SCENE_DEPENDENCY_TYPES } from './index';
import { dependencyContainer } from '../../utils/dependency-injection';

/**
 * Function to register the starter map factory with dependency injection.
 */
export const registerStarterSceneFactory = (): void => {
  dependencyContainer
    .bind<interfaces.Factory<Scene>>(SCENE_DEPENDENCY_TYPES.StarterSceneFactory)
    .toFactory<Scene, [name: string]>((context: interfaces.Context) => {
      return (mapName: string) => {
        const scene = context.container.get<Scene>(
          SCENE_DEPENDENCY_TYPES.Scene,
        );
        scene.setName(mapName);
        return scene;
      };
    });
};
