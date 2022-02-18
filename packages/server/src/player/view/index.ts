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
import { PlayerViewImpl } from './player-view-impl';
import { PlayerView } from './player-view';
import { PLAYER_VIEW_DEPENDENCY_TYPES } from './dependency-types';

/* Only bind if not already bound. */
if (!dependencyContainer.isBound(PLAYER_VIEW_DEPENDENCY_TYPES.PlayerView)) {
  dependencyContainer
    .bind<PlayerView>(PLAYER_VIEW_DEPENDENCY_TYPES.PlayerView)
    .to(PlayerViewImpl)
    .inSingletonScope();
}

export { PLAYER_VIEW_DEPENDENCY_TYPES };
export type { PlayerView } from './player-view';
