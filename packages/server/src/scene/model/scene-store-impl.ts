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
import { Logger, LOGGING_DEPENDENCY_TYPES } from '../../utils/logging';
import { i18n } from 'i18next';
import { inject, injectable } from 'inversify';
import { I18N_DEPENDENCY_TYPES, I18NProvider } from '../../utils/i18n';
import { SceneStore } from './scene-store';

/**
 * Storage for {@link Scene}s.
 * Eventually this will be something more involved than it is currenty.
 */
@injectable()
export class SceneStoreImpl implements SceneStore {
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
  private readonly store = new Map<string, Scene>();

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
  getSceneIds(): string[] {
    return Array.from(this.store.keys());
  }

  /**
   * Adds a scene to the store.
   * @param scene the {@link Scene} to add to the model.
   */
  addScene(scene: Scene): void {
    this.store.set(scene.id, scene);
  }

  /**
   * Removes a scene from the store.
   * @param scene either a string which is treated as the id of the {@link Scene}
   * or the actual {@link Scene} to remove.
   */
  removeScene(scene: string | Scene): void {
    let key = '';
    if (typeof scene === 'string') {
      key = scene;
    } else {
      key = scene.id;
    }
    this.store.delete(key);
  }

  /**
   * Returns the {@link Scene} from the store, or undefined if it is not
   * in the store.
   * @param id the id of the {@link Scene} to retrieve.
   */
  getScene(id: string): Scene | undefined {
    return this.store.get(id);
  }

  /**
   * Returns if the store contains the specified {@link Scene}.
   * @param id the id of the {@link Scene} to check.
   */
  hasScene(id: string): boolean {
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
  getSceneList(): Scene[] {
    return Array.from(this.store.values());
  }
}
