/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { SERVER_DEPENDENCY_TYPES } from './dependency-types';
import { dependencyContainer } from '../utils/dependency-injection';
import { VttServerImpl } from './vtt-server-impl';
import { VTTServer } from './vtt-server';

/** Only bind the server if it has not been bound before. */
if (!dependencyContainer.isBound(SERVER_DEPENDENCY_TYPES.VTTServer)) {
  dependencyContainer
    .bind<VTTServer>(SERVER_DEPENDENCY_TYPES.VTTServer)
    .to(VttServerImpl)
    .inRequestScope();
}

export type { VTTServer } from './vtt-server';
export { SERVER_DEPENDENCY_TYPES } from './dependency-types';
