/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

/**
 * Interface used for Campaign objects.
 */
export interface Campaign {
  setName(name: string): void;
  getName(): string;

  setFormatVersion(version: string): void;
  getFormatVersion(): string;
}
