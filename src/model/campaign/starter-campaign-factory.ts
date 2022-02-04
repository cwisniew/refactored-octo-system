/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { Campaign } from './campaign';

/**
 * Factory to create the starter campaign.
 */
export interface StarterCampaignFactory {
  /**
   * Creates the starter campaign.
   */
  createStarterCampaign(): Campaign | undefined;
}
