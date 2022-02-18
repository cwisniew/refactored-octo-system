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

/**
 * A ConnectionManager is responsible for managing the connections to the server.
 */
export interface ConnectionManager {
  /**
   * Returns the connections to the server.
   */
  getConnections(): Connection[];

  /**
   * Returns the connection to the server for a specific player.
   * @param name the name of the player.
   */
  getConnection(name: string): Connection | undefined;
}
