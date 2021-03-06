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
import { GAME_MAP_DEPENDENCY_TYPES } from './dependency-types';
import { GameMap } from './game-map';
import { GameMapImpl } from './game-map-impl';
import { GameMapStore } from './game-map-store';
import { GameMapStoreImpl } from './game-map-store-impl';
import { registerStartMapFactory } from './starter-game-map-factory';

/* Only bind model if it is not already bound. */
if (!dependencyContainer.isBound(GAME_MAP_DEPENDENCY_TYPES.GameMap)) {
  dependencyContainer
    .bind<GameMap>(GAME_MAP_DEPENDENCY_TYPES.GameMap)
    .to(GameMapImpl)
    .inSingletonScope();

  dependencyContainer
    .bind<GameMapStore>(GAME_MAP_DEPENDENCY_TYPES.GameMapStore)
    .to(GameMapStoreImpl)
    .inSingletonScope();

  registerStartMapFactory();
}

export type { GameMap };
export type { GameMapStore };
export { GAME_MAP_DEPENDENCY_TYPES };
