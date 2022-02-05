/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

/**
 * Interface for classes that generate IDs.
 */
export interface IdGen {
  /**
   * Generate and ID.
   */
  id(): string;
}
