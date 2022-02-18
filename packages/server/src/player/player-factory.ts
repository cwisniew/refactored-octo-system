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

import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { Player } from './player';
import { PlayerImpl } from './player-impl';
import { TeamImpl } from './team-impl';

export const playerFactory = (
  name: string,
  socket: Socket<DefaultEventsMap, DefaultEventsMap>,
): Player => {
  return new PlayerImpl(name, socket, new TeamImpl('gm', 'gm'));
};
