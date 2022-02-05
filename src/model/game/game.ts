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

import { Campaign } from '../campaign';

/**
 * Interface for the class that represents the running game.
 */
export interface Game {
  /**
   * The version of the VTT
   */
  version: string;

  /**
   * Returns the current {@Campaign} of the game.
   */
  getCampaign(): Campaign;

  /**
   * Sets the current {@Campaign} from the game.
   * @param campaign
   */
  setCampaign(campaign: Campaign): void;
}
