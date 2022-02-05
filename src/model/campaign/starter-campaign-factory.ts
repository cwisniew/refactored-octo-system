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
import { dependencyContainer } from '../../utils/dependency-injection';
import { interfaces } from 'inversify';
import { CAMPAIGN_DEPENDENCY_TYPES } from './dependency-types';
import { GameMap, GAME_MAP_DEPENDENCY_TYPES } from '../game-map';
import { I18NProvider, I18N_DEPENDENCY_TYPES } from '../../utils/i18n';

/**
 * Factory for creating a "starter" campaign.
 */
export const registerStarterCampaignFactory = (): void => {
  dependencyContainer
    .bind<interfaces.Factory<Campaign>>(
      CAMPAIGN_DEPENDENCY_TYPES.StarterCampaignFactory,
    )
    .toFactory<Campaign, [name: string]>((context: interfaces.Context) => {
      return (campaignName: string) => {
        const i18nProvider: I18NProvider = context.container.get<I18NProvider>(
          I18N_DEPENDENCY_TYPES.I18N,
        );

        const i18n = i18nProvider.i18n();

        const campaign = context.container.get<Campaign>(
          CAMPAIGN_DEPENDENCY_TYPES.Campaign,
        );
        campaign.setName(campaignName);

        const gameMapFactory: (name: string) => GameMap = context.container.get(
          GAME_MAP_DEPENDENCY_TYPES.StarterGameMapFactory,
        );
        const gameMap = gameMapFactory(i18n.t('gamemap.starter.name'));
        campaign.addGameMap(gameMap);
        return campaign;
      };
    });
};
