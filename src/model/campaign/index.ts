/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { dependencyContainer } from '../../utils/dependency-injection';
import { CAMPAIGN_DEPENDENCY_TYPES } from './dependency-types';
import { Campaign } from './campaign';
import { CampaignImpl } from './campaign-impl';

/* Only bind campaign if it is not already bound. */
if (!dependencyContainer.isBound(CAMPAIGN_DEPENDENCY_TYPES.Campaign)) {
  dependencyContainer
    .bind<Campaign>(CAMPAIGN_DEPENDENCY_TYPES.Campaign)
    .to(CampaignImpl)
    .inSingletonScope();
}

export type { Campaign };
export { CAMPAIGN_DEPENDENCY_TYPES };
