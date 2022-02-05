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

import { RouteHandler } from '../route-handler';
import { Express } from 'express';
import { inject, injectable } from 'inversify';
import { Logger, LOGGING_DEPENDENCY_TYPES } from '../../../utils/logging';
import { I18N_DEPENDENCY_TYPES, I18NProvider } from '../../../utils/i18n';
import { i18n } from 'i18next';
import {
  CampaignView,
  CAMPAIGN_VIEW_DEPENDENCY_TYPES,
} from '../../../view/campaign';
import { Game, GAME_DEPENDENCY_TYPES } from '../../../model/game';

@injectable()
export class CampaignRouteHandler implements RouteHandler {
  /** Object used to log messages. */
  private readonly logger: Logger;

  /** Object for translation. */
  private readonly i18n: i18n;
  /**
   * Create a new RootRouteHandler.
   * @param loggerFactory the factory used to create logging objects.
   * @param i18nProvider provider for the translation object.
   * @param campaignView the view for the campaign.
   * @param game the running game.
   */
  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: (name: string) => Logger,
    @inject(I18N_DEPENDENCY_TYPES.I18N) i18nProvider: I18NProvider,
    @inject(CAMPAIGN_VIEW_DEPENDENCY_TYPES.CampaignView)
    private readonly campaignView: CampaignView,
    @inject(GAME_DEPENDENCY_TYPES.Game)
    private readonly game: Game,
  ) {
    this.logger = loggerFactory(this.constructor.name);
    this.i18n = i18nProvider.i18n();
  }

  /**
   * Adds routes for the campaign object to the express app.
   * @param expressApp the express app to add the routes to.
   */
  addRoutes(expressApp: Express): void {
    this.logger.debug(
      this.i18n.t('server.debug.route.add', { path: '/campaign' }),
    );
    expressApp.get('/campaign', (req, res) => {
      res.send(this.campaignView.getCampaignData(this.game.getCampaign()));
    });
  }
}
