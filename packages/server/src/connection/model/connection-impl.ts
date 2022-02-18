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

import { Connection } from './connection';
import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

/**
 * Connection implementation.
 */
export class ConnectionImpl implements Connection {
  /**
   * Creates a new ConnectionImpl instance.
   * @param playerName The name of the player that this connection belongs to.
   * @param socket The socket.io socket that this connection is associated with.
   */
  constructor(
    readonly playerName: string,
    private socket: Socket<DefaultEventsMap, DefaultEventsMap>,
  ) {}

  /**
   * Returns the socket for the connection.
   */
  getSocket(): Socket<DefaultEventsMap, DefaultEventsMap> {
    return this.socket;
  }

  /**
   * Returns if the connection is still connected.
   */
  isConnected(): boolean {
    return this.socket && this.socket.connected;
  }
}
