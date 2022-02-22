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

import 'reflect-metadata';

import { ReactNode } from 'react';

import { Container } from 'inversify';
import { Provider } from 'inversify-react';

import { SocketConnectionImpl } from '../../connection/socket-connection-impl';
import { SOCKET_DEPENDENCY_TYPES, SocketConnection } from '../../connection';

interface Props {
  children: ReactNode;
}

const createContainer = () => {
  const container: Container = new Container({ defaultScope: 'Singleton' });
  container
    .bind<SocketConnection>(SOCKET_DEPENDENCY_TYPES.SocketConnection)
    .to(SocketConnectionImpl)
    .inSingletonScope();
  return container;
};

export const DIProvider = ({ children }: Props) => {
  return <Provider container={createContainer}>{children}</Provider>;
};
