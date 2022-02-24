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

import React, { ReactElement, useEffect } from 'react';
import { SOCKET_DEPENDENCY_TYPES, SocketConnection } from '../../connection';
import { useInjection } from 'inversify-react';

const socket = useInjection<SocketConnection>(
  SOCKET_DEPENDENCY_TYPES.SocketConnection,
);
const ws = socket.getSocket();

export const SocketListener = (): ReactElement => {
  useEffect(() => {
    ws.on('connect', () => {
      console.log('connected');
    });
  });

  return <div />;
};
