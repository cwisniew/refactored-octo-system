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
import { Logger, LOGGING_DEPENDENCY_TYPES } from '../../utils/logging';
import { inject, injectable } from 'inversify';
import { ID_GEN_DEPENDENCY_TYPES, IdGen } from '../../utils/id';
import { I18N_DEPENDENCY_TYPES, I18NProvider } from '../../utils/i18n';
import { i18n } from 'i18next';

/**
 * Class that represents a game map.
 */
@injectable()
export class GameMapImpl implements GameMap {
  /**
   * The id of the game map.
   * @private
   */
  private readonly id: string;

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
   * The name of the game map.
   * @private
   */
  private name: string;

  /**
   * Creates a new game map.
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
    this.logger.debug(this.i18n.t('gamemap.debug.created', { id: this.id }));
  }

  /**
   * Returns the id of the map.
   */
  getId(): string {
    return this.id;
  }

  /**
   * Returns the name of the map.
   */
  getName(): string {
    return this.name;
  }

  /**
   * Sets the name of the game map.
   * @param name the name of the game map.
   */
  setName(name: string): void {
    this.name = name;
  }
}
