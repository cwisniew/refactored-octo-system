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

import { Game } from './game';
import { Campaign, CAMPAIGN_DEPENDENCY_TYPES } from '../../campaign';
import { Logger, LOGGING_DEPENDENCY_TYPES } from '../../utils/logging';
import { inject, injectable } from 'inversify';
import { i18n } from 'i18next';
import { I18N_DEPENDENCY_TYPES, I18NProvider } from '../../utils/i18n';

/**
 * Class that represents the running game.
 */
@injectable()
export class GameImpl implements Game {
  /**
   * The version of the VTT
   */
  readonly version: string = '0.0.1';

  /**
   * Logger used to log messages.
   * @private
   */
  private readonly logger: Logger;
  /**
   * i18n object used for translations.
   * @private
   */
  private readonly i18n: i18n;
  /**
   * The current model.
   * @private
   */
  private campaign: Campaign;

  /**
   * Creates a new {@link GameImpl} object.
   * @param loggerFactory factory to create the logging object.
   * @param campaignFactory factory to create the initial model.
   * @param i18nProvider provider to retrieve the i18n translation object.
   */
  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: (name: string) => Logger,
    @inject(CAMPAIGN_DEPENDENCY_TYPES.StarterCampaignFactory)
    campaignFactory: (name: string) => Campaign,
    @inject(I18N_DEPENDENCY_TYPES.I18N) i18nProvider: I18NProvider,
  ) {
    this.logger = loggerFactory(this.constructor.name);
    this.i18n = i18nProvider.i18n();
    this.campaign = campaignFactory(this.i18n.t('campaign.starter.name'));
  }

  /**
   * Returns the current {@Campaign} of the game.
   */
  getCampaign(): Campaign {
    return this.campaign;
  }

  /**
   * Sets the current {@Campaign} from the game.
   * @param campaign
   */
  setCampaign(campaign: Campaign): void {
    this.campaign = campaign;
  }
}
