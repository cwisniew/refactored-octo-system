/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { Game } from './game';
import { Campaign, CAMPAIGN_DEPENDENCY_TYPES } from '../campaign';
import { Logger, LOGGING_DEPENDENCY_TYPES } from '../../utils/logging';
import { inject, injectable } from 'inversify';
import { i18n } from 'i18next';
import { I18N_DEPENDENCY_TYPES, I18NProvider } from '../../utils/i81n';

/**
 * Class that represents the running game.
 */
@injectable()
export class GameImpl implements Game {
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
   * The current campaign.
   * @private
   */
  private campaign: Campaign;

  /**
   * Creates a new {@link GameImpl} object.
   * @param loggerFactory factory to create the logging object.
   * @param campaignFactory factory to create the initial campaign.
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
