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

import { Campaign } from './campaign';
import { inject, injectable } from 'inversify';
import { Logger, LOGGING_DEPENDENCY_TYPES } from '../../utils/logging';
import { IdGen, ID_GEN_DEPENDENCY_TYPES } from '../../utils/id';
import { I18NProvider, I18N_DEPENDENCY_TYPES } from '../../utils/i18n';
import { i18n } from 'i18next';
import { Scene, SCENE_DEPENDENCY_TYPES, SceneStore } from '../../scene';

export const CURRENT_CAMPAIGN_FORMAT_VERSION = '0.0.1';

/**
 * The standard model class.
 */
@injectable()
export class CampaignImpl implements Campaign {
  /**
   * The id of the model.
   */
  readonly id: string;

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

  /**
   * The name of the model.
   * @private
   */
  private name: string;

  /**
   * The version of the format used for the model.
   * @private
   */
  private formatVersion: string;

  /**
   * Creates a new model.
   * @param loggerFactory the factory for creating logging objects.
   * @param idGen class used to generate ids.
   * @param i18nProvider the provider to get translation objects.
   * @param sceneStore the storage for the scenes.
   */
  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: (name: string) => Logger,
    @inject(ID_GEN_DEPENDENCY_TYPES.IdGen) idGen: IdGen,
    @inject(I18N_DEPENDENCY_TYPES.I18N) i18nProvider: I18NProvider,
    @inject(SCENE_DEPENDENCY_TYPES.SceneStore)
    private readonly sceneStore: SceneStore,
  ) {
    this.id = idGen.id();
    this.logger = loggerFactory(this.constructor.name);
    this.i18n = i18nProvider.i18n();
    this.name = '';
    this.formatVersion = CURRENT_CAMPAIGN_FORMAT_VERSION;
    this.logger.debug(this.i18n.t('model.debug.created', { id: this.id }));
  }

  /**
   * Returns the version of the model format.
   */
  getFormatVersion(): string {
    return this.formatVersion;
  }

  /**
   * Returns the name of the model.
   */
  getName(): string {
    return this.name;
  }

  /**
   * Sets the version of the model format.
   * @param version the version of the model format.
   */
  setFormatVersion(version: string): void {
    this.formatVersion = version;
  }

  /**
   * Sets the name of the model.
   * @param name the name of the model.
   */
  setName(name: string): void {
    this.name = name;
  }

  /**
   * Returns ids of the scenes for this model.
   */
  getSceneIds(): string[] {
    return this.sceneStore.getSceneIds();
  }

  /**
   * Adds a scene to the model
   * @param scene the {@link SCene} to add to the model.
   */
  addScene(scene: Scene): void {
    this.sceneStore.addScene(scene);
  }

  /**
   * Removes a scene from the model.
   * @param scene either a string which is treated as the id of the
   * {@link scene} or the actual {@link scene} to remove.
   */
  removeScene(scene: string | Scene): void {
    this.sceneStore.removeScene(scene);
  }
}
