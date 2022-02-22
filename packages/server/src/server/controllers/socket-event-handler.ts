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

import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

/**
 * Interface for classes that handle socket events.
 */
export interface SocketEventHandler {
  /**
   * Handles the connection event and registers other event handlers.
   * @param socketIOServer the socket.io server.
   * @param socket the socket the event was emitted from.
   */
  connected(
    socketIOServer: Server,
    socket: Socket<DefaultEventsMap, DefaultEventsMap>,
  ): void;
}
