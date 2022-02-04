/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

export const LOGGING_DEPENDENCY_TYPES = {
  /** Factory function for creating {@logger}s. */
  LoggerFactory: Symbol.for('Factory<Logger>'),
};
