/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { dependencyContainer } from './utils/dependency-injection';
import { SERVER_DEPENDENCY_TYPES, VTTServer } from './server';

const vttServer = dependencyContainer.get<VTTServer>(
  SERVER_DEPENDENCY_TYPES.VTTServer,
);
const run = async () => {
  await vttServer.start();
}();
