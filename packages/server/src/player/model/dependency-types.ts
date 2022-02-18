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

/**
 * The Dependency types for the players.
 */
export const PLAYER_DEPENDENCY_TYPES = {
  /** Factory for creating player objects. */
  PlayerFactory: Symbol.for('Factory<Player>'),
  /** The player manager for the server. */
  PlayerManager: Symbol.for('PlayerManager'),
};
