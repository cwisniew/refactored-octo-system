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

import { Team, TeamPermissions } from './team';

/**
 * An implementation of the Team interface to track teams.
 */
export class TeamImpl implements Team {
  /**
   * Create a new team.
   * @param name the name of the team.
   * @param permissions the permissions of the team.
   */
  constructor(readonly name: string, private permissions: TeamPermissions) {}

  /**
   * Returns the permissions of the team.
   */
  getPermissions(): TeamPermissions {
    return this.permissions;
  }

  /**
   * Sets the permissions of the team.
   * @param permissions
   */
  setPermissions(permissions: TeamPermissions): void {
    this.permissions = permissions;
  }
}
