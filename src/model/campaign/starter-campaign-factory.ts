/*
 * This software Copyright by Craig Wisniewski
 * license TBD
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
