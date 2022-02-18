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

export type TeamPermissions = 'gm' | 'player' | 'observer';

/**
 * Interface that represents a team in the game.
 */
export interface Team {
  /** The name of the team. */
  name: string;

  /**
   * Returns the permissions of the team.
   */
  getPermissions(): TeamPermissions;

  /**
   * Sets the permissions of the team.
   * @param permissions
   */
  setPermissions(permissions: TeamPermissions): void;
}
