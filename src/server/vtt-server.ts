/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

/**
 * Interface for the VTTServer class.
 */
export interface VTTServer {
  /**
   * Starts the server.
   */
  start(): Promise<void>;
}
