/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { Campaign } from '../campaign';

/**
 * Interface for the class that represents the running game.
 */
export interface Game {
  /**
   * Returns the current {@Campaign} of the game.
   */
  getCampaign(): Campaign;

  /**
   * Sets the current {@Campaign} from the game.
   * @param campaign
   */
  setCampaign(campaign: Campaign): void;
}
