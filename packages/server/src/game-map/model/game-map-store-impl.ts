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
import { GameMapStore } from './game-map-store';
import { Logger, LOGGING_DEPENDENCY_TYPES } from '../../utils/logging';
import { i18n } from 'i18next';
import { inject, injectable } from 'inversify';
import { I18N_DEPENDENCY_TYPES, I18NProvider } from '../../utils/i18n';

/**
 * Storage for {@link GameMap}s.
 * Eventually this will be something more involved than it is currenty.
 */
@injectable()
export class GameMapStoreImpl implements GameMapStore {
  /**
   * Logger used for logging messages.
   * @private
   */
  private readonly logger: Logger;

  /**
   * The object used for translations.
   * @private
   */
  private readonly i18n: i18n;

  /** The storage for game maps. */
  private readonly store = new Map<string, GameMap>();

  /**
   * Creates a new model.
   * @param loggerFactory the factory for creating logging objects.
   * @param i18nProvider the provider to get translation objects.
   */
  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: (name: string) => Logger,
    @inject(I18N_DEPENDENCY_TYPES.I18N) i18nProvider: I18NProvider,
  ) {
    this.logger = loggerFactory(this.constructor.name);
    this.i18n = i18nProvider.i18n();
  }

  /**
   * Returns ids of the game maps.
   */
  getMapIds(): string[] {
    return Array.from(this.store.keys());
  }

  /**
   * Adds a game map to the store.
   * @param gameMap the {@link GameMap} to add to the model.
   */
  addGameMap(gameMap: GameMap): void {
    this.store.set(gameMap.id, gameMap);
  }

  /**
   * Removes a game map from the store.
   * @param gameMap either a string which is treated as the id of the {@link GameMap}
   * or the actual {@link GameMap} to remove.
   */
  removeGameMap(gameMap: string | GameMap): void {
    let key = '';
    if (typeof gameMap === 'string') {
      key = gameMap;
    } else {
      key = gameMap.id;
    }
    this.store.delete(key);
  }

  /**
   * Returns the {@link GameMap} from the store, or undefined if it is not
   * in the store.
   * @param id the id of the {@link GameMap} to retrieve.
   */
  getGameMap(id: string): GameMap | undefined {
    return this.store.get(id);
  }

  /**
   * Returns if the store contains the specified {@link GameMap}.
   * @param id the id of the {@link GameMap} to check.
   */
  hasGameMap(id: string): boolean {
    return this.store.has(id);
  }

  /**
   * Clears all the game maps from the store.
   */
  clear(): void {
    this.store.clear();
  }

  /**
   * Returns the game maps in the game store.
   */
  getGameMapList(): GameMap[] {
    return Array.from(this.store.values());
  }
}
