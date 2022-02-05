/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { dependencyContainer } from '../dependency-injection';
import { ID_GEN_DEPENDENCY_TYPES } from './dependency-types';
import { IdGen } from './id-gen';
import { IdGenImpl } from './id-gen-impl';

/* Only bind id generator if it is not already bound. */
if (!dependencyContainer.isBound(ID_GEN_DEPENDENCY_TYPES.IdGen)) {
  dependencyContainer
    .bind<IdGen>(ID_GEN_DEPENDENCY_TYPES.IdGen)
    .to(IdGenImpl)
    .inSingletonScope();
}

export { ID_GEN_DEPENDENCY_TYPES };
export type { IdGen };
