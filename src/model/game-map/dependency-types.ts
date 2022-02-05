/*
 * This software Copyright Craig Wisniewski, and
 * licensed under the Affero GPL Version 3 or, at your option, any later
 * version.
 *
 * MapTool Source Code is distributed in the hope that it will be
 * useful, but WITHOUT ANY WARRANTY; without even the implied warranty
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * You should have received a copy of the GNU Affero General Public
 * License * along with this source Code.  If not, please visit
 * <http://www.gnu.org/licenses/> and specifically the Affero license
 * text at <http://www.gnu.org/licenses/agpl.html>.
 */

/**
 * Types for game map dependency injection
 */
export const GAME_MAP_DEPENDENCY_TYPES = {
  /** Game Maps. */
  GameMap: Symbol.for('GameMap'),
  /** Factory for creating starter game maps. */
  StarterGameMapFactory: Symbol.for('Factory<GameMap>'),
};
