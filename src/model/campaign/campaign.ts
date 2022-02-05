/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

/**
 * Interface used for Campaign objects.
 */
export interface Campaign {
  /**
   * Returns the id of the campaign.
   */
  getId(): string;

  /**
   * Sets the name of the campaign.
   * @param name the name of the campaign.
   */
  setName(name: string): void;

  /**
   * Returns the name of the campaign.
   */
  getName(): string;

  /**
   * Sets the version of the campaign format.
   * @param version the version of the campaign format.
   */
  setFormatVersion(version: string): void;

  /**
   * Returns the version of the campaign format.
   */
  getFormatVersion(): string;
}
