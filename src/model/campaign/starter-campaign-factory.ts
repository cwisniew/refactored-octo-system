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

/**
 * Factory for creating a "starter" campaign.
 */
export const registerStarterCampaignFactory = (): void => {
  dependencyContainer
    .bind<interfaces.Factory<Campaign>>(
      CAMPAIGN_DEPENDENCY_TYPES.StarterCampaignFactory,
    )
    .toFactory<Campaign, ['Unnamed']>((context: interfaces.Context) => {
      return (campaignName: string) => {
        const campaign = context.container.get<Campaign>(
          CAMPAIGN_DEPENDENCY_TYPES.Campaign,
        );
        campaign.setName(campaignName);
        return campaign;
      };
    });
};
