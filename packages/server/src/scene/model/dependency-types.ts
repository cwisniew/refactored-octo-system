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
 * Types for scene dependency injection
 */
export const SCENE_DEPENDENCY_TYPES = {
  /** Scene Maps. */
  Scene: Symbol.for('Scene'),
  /** Factory for creating starter game maps. */
  StarterSceneFactory: Symbol.for('Factory<Scene>'),
  /** Storage for Scenes. */
  SceneStore: Symbol.for('Scene'),
};
