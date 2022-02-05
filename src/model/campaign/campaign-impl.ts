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

import { Campaign } from './campaign';
import { inject, injectable } from 'inversify';
import { Logger, LOGGING_DEPENDENCY_TYPES } from '../../utils/logging';
import { IdGen, ID_GEN_DEPENDENCY_TYPES } from '../../utils/id';
import { GameMap, GameMapStore, GAME_MAP_DEPENDENCY_TYPES } from '../game-map';
import { I18NProvider, I18N_DEPENDENCY_TYPES } from '../../utils/i18n';
import { i18n } from 'i18next';

export const CURRENT_CAMPAIGN_FORMAT_VERSION = '0.0.1';

/**
 * The standard campaign class.
 */
@injectable()
export class CampaignImpl implements Campaign {
  /**
   * The id of the campaign.
   * @private
   */
  private readonly id: string;

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
   * The name of the campaign.
   * @private
   */
  private name: string;

  /**
   * The version of the format used for the campaign.
   * @private
   */
  private formatVersion: string;

  /**
   * Creates a new campaign.
   * @param loggerFactory the factory for creating logging objects.
   * @param idGen class used to generate ids.
   * @param i18nProvider the provider to get translation objects.
   * @param gameMapStore the storage for the game maps.
   */
  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: (name: string) => Logger,
    @inject(ID_GEN_DEPENDENCY_TYPES.IdGen) idGen: IdGen,
    @inject(I18N_DEPENDENCY_TYPES.I18N) i18nProvider: I18NProvider,
    @inject(GAME_MAP_DEPENDENCY_TYPES.GameMapStore)
    private readonly gameMapStore: GameMapStore,
  ) {
    this.id = idGen.id();
    this.logger = loggerFactory(this.constructor.name);
    this.i18n = i18nProvider.i18n();
    this.name = '';
    this.formatVersion = CURRENT_CAMPAIGN_FORMAT_VERSION;
    this.logger.debug(this.i18n.t('campaign.debug.created', { id: this.id }));
  }

  /**
   * Returns the id of the campaign.
   */
  getId(): string {
    return this.id;
  }

  /**
   * Returns the version of the campaign format.
   */
  getFormatVersion(): string {
    return this.formatVersion;
  }

  /**
   * Returns the name of the campaign.
   */
  getName(): string {
    return this.name;
  }

  /**
   * Sets the version of the campaign format.
   * @param version the version of the campaign format.
   */
  setFormatVersion(version: string): void {
    this.formatVersion = version;
  }

  /**
   * Sets the name of the campaign.
   * @param name the name of the campaign.
   */
  setName(name: string): void {
    this.name = name;
  }

  /**
   * Returns ids of the game maps for this campaign.
   */
  getMapIds(): string[] {
    return this.gameMapStore.getMapIds();
  }

  /**
   * Adds a game map to the campaign
   * @param gameMap the {@link GameMap} to add to the campaign.
   */
  addGameMap(gameMap: GameMap): void {
    this.gameMapStore.addGameMap(gameMap);
  }

  /**
   * Removes a game map from the campaign.
   * @param gameMap either a string which is treated as the id of the
   * {@link GameMap} or the actual {@link GameMap} to remove.
   */
  removeGameMap(gameMap: string | GameMap): void {
    this.gameMapStore.removeGameMap(gameMap);
  }
}
