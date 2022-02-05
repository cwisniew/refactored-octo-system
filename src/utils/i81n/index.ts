/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { dependencyContainer } from '../dependency-injection';
import { I18N_DEPENDENCY_TYPES } from './dependency-types';
import { I18NProvider } from './i18n-provider';
import { I18NProviderImpl } from './i18n-provider-impl';

/** Only bind the server if it has not been bound before. */
if (!dependencyContainer.isBound(I18N_DEPENDENCY_TYPES.I18N)) {
  dependencyContainer
    .bind<I18NProvider>(I18N_DEPENDENCY_TYPES.I18N)
    .to(I18NProviderImpl)
    .inSingletonScope();
}

export { I18N_DEPENDENCY_TYPES };
