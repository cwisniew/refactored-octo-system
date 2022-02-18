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

import { dependencyContainer } from '../../utils/dependency-injection';
import { PLAYER_DEPENDENCY_TYPES } from './dependency-types';
import { PlayerManagerImpl } from './player-manager-impl';
import { registerPlayerFactory } from './player-factory';

/** Only register if not already bound. */
if (!dependencyContainer.isBound(PLAYER_DEPENDENCY_TYPES.PlayerManager)) {
  dependencyContainer
    .bind(PLAYER_DEPENDENCY_TYPES.PlayerManager)
    .to(PlayerManagerImpl)
    .inSingletonScope();
}
registerPlayerFactory();

export type { Player } from './player';
export type { Team } from './team';
export type { PlayerFactory } from './player-factory';
export type { PlayerManager } from './player-manager';
export { PLAYER_DEPENDENCY_TYPES };
