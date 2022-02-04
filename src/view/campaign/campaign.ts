/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

export interface CampaignData {
  name: string;
  formatVersion: string;
}

export interface CampaignView {
  getCampaignData(): CampaignData;
}
