/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { dependencyContainer } from '../dependency-injection';
import { LoggerFactory } from './LoggerFactory';
import { LOGGING_DEPENDENCY_TYPES } from './dependency-types';
import { LoggerFactoryImpl } from './LoggerFactoryImpl';

/*
 * Bind
 */
if (!dependencyContainer.isBound(LOGGING_DEPENDENCY_TYPES.LoggerFactory)) {
  dependencyContainer
    .bind<LoggerFactory>(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    .to(LoggerFactoryImpl)
    .inSingletonScope();
}

export { LOGGING_DEPENDENCY_TYPES } from './dependency-types';
export type { LoggerFactory } from './LoggerFactory';
export type { Logger } from './Logger';
