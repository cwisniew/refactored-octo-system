/*
 * This software Copyright Craig Wisniewski, and
 * licensed under the Affero GPL Version 3 or, at your option, any later
 * version.
 *
 * This Source Code is distributed in the hope that it will be
 * useful, but WITHOUT ANY WARRANTY; without even the implied warranty
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * You should have received a copy of the GNU Affero General Public
 * License * along with this source Code.  If not, please visit
 * <http://www.gnu.org/licenses/> and specifically the Affero license
 * text at <http://www.gnu.org/licenses/agpl.html>.
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

export type { VTTServer };
export { SERVER_DEPENDENCY_TYPES };
