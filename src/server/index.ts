/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { SERVER_DEPENDENCY_TYPES } from './dependency-types';
import { dependencyContainer } from '../utils/dependency-injection';
import { VTTServerImpl } from './VTTServerImpl';
import { VTTServer } from './VTTServer';

if (!dependencyContainer.isBound(SERVER_DEPENDENCY_TYPES.VTTServer)) {
  dependencyContainer
    .bind<VTTServer>(SERVER_DEPENDENCY_TYPES.VTTServer)
    .to(VTTServerImpl)
    .inRequestScope();
}

export type { VTTServer } from './VTTServer';
export { SERVER_DEPENDENCY_TYPES } from './dependency-types';
