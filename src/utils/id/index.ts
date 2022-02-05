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
