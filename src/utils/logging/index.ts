/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { dependencyContainer } from '../dependency-injection';
import { LoggerFactory } from './logger-factory';
import { LOGGING_DEPENDENCY_TYPES } from './dependency-types';
import { LoggerFactoryImpl } from './logger-factory-impl';

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
export type { LoggerFactory } from './logger-factory';
export type { Logger } from './logger';
