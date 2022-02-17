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

import { SCENE_DEPENDENCY_TYPES, GameMap, SceneStore } from '../model';
import { GameMapData, GameMapListData, GameMapView } from './game-map-view';
import { inject, injectable } from 'inversify';

/**
 * Class that extract data from a {@link Scene} object.
 */
@injectable()
export class SceneViewImpl implements GameMapView {
  constructor(
    @inject(SCENE_DEPENDENCY_TYPES.SceneStore)
    private readonly sceneStore: SceneStore,
  ) {}

  /**
   * Extract all the data from the game map.
   * @param gameMap if string the id of a {@link GameMap} or the {@link GameMap}
   * itself.
   */
  getGameMapData(gameMap: string | GameMap): GameMapData {
    let gm: GameMap | undefined;
    if (typeof gameMap === 'string') {
      gm = this.sceneStore.getScene(gameMap);
      if (!gm) {
        throw `Unknown game map id = ${gameMap}`;
      }
    } else {
      gm = gameMap;
    }
    return this.extractGameMapData(gm);
  }

  /**
   * Extracts and returns the data from the game map.
   * @param gameMap the game map to extract the data for.
   * @private
   */
  private extractGameMapData(gameMap: GameMap): GameMapData {
    return {
      id: gameMap.id,
      name: gameMap.getName(),
    };
  }

  /**
   * Extract data from the list game maps.
   */
  getGameMapList(): GameMapListData {
    return {
      gameMaps: this.sceneStore.getGameMapList().map((m) => {
        return {
          id: m.id,
          name: m.getName(),
        };
      }),
    };
  }
}
