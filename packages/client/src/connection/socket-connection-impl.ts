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

import { injectable } from 'inversify';
import { SocketConnection } from './socket-connection';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';

// TODO: This is a temporary thing
const HOST_WS_ADDRESS = 'http://localhost:3000';

@injectable()
export class SocketConnectionImpl implements SocketConnection {
  private readonly socket = io(HOST_WS_ADDRESS);

  async send(event: string, msg: any): Promise<void> {
    this.socket.emit(event, msg);
  }

  on(event: string, callback: () => void): void {
    this.socket.on(event, callback);
  }

  getSocket(): Socket<DefaultEventsMap, DefaultEventsMap> {
    return this.socket;
  }
}
