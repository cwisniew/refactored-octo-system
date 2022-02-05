/*
 * This software Copyright Craig Wisniewski, and
 * licensed under the Affero GPL Version 3 or, at your option, any later
 * version.
 *
 * MapTool Source Code is distributed in the hope that it will be
 * useful, but WITHOUT ANY WARRANTY; without even the implied warranty
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * You should have received a copy of the GNU Affero General Public
 * License * along with this source Code.  If not, please visit
 * <http://www.gnu.org/licenses/> and specifically the Affero license
 * text at <http://www.gnu.org/licenses/agpl.html>.
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
export type { I18NProvider };
