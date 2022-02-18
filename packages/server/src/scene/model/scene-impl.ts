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

import { Scene } from './scene';
import { Logger, LOGGING_DEPENDENCY_TYPES } from '../../utils/logging';
import { inject, injectable } from 'inversify';
import { ID_GEN_DEPENDENCY_TYPES, IdGen } from '../../utils/id';
import { I18N_DEPENDENCY_TYPES, I18NProvider } from '../../utils/i18n';
import { i18n } from 'i18next';

/**
 * Class that represents a scene.
 */
@injectable()
export class SceneImpl implements Scene {
  /**
   * The id of the scene.
   */
  readonly id: string;

  /**
   * Logger used for logging messages.
   * @private
   */
  private readonly logger: Logger;

  /**
   * Object used for translations.
   * @private
   */
  private readonly i18n: i18n;

  /**
   * The name of the scene.
   * @private
   */
  private name: string;

  /**
   * Creates a new scene.
   * @param loggerFactory the factory for creating logging objects.
   * @param idGen class used to generate ids.
   * @param i18nProvider the provider to get translation objects.
   */
  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: (name: string) => Logger,
    @inject(ID_GEN_DEPENDENCY_TYPES.IdGen) idGen: IdGen,
    @inject(I18N_DEPENDENCY_TYPES.I18N) i18nProvider: I18NProvider,
  ) {
    this.id = idGen.id();
    this.logger = loggerFactory(this.constructor.name);
    this.i18n = i18nProvider.i18n();
    this.name = '';
    this.logger.debug(this.i18n.t('scene.debug.created', { id: this.id }));
  }

  /**
   * Returns the name of the scene.
   */
  getName(): string {
    return this.name;
  }

  /**
   * Sets the name of the scene.
   * @param name the name of the scene.
   */
  setName(name: string): void {
    this.name = name;
  }
}
