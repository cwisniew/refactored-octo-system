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

import { Campaign } from '../../model/campaign';

/**
 * Information in the campaign.
 */
export interface CampaignData {
  /** The id of the campaign. */
  id: string;
  /** The name of the campaign. */
  name: string;
  /** The version format of the campaign. */
  formatVersion: string;
  /** The ids of the game maps for the campaign. */
  gameMaps: string[];
}

/**
 * Interface of objects that extract data from a {@link Campaign} object.
 */
export interface CampaignView {
  /**
   * Extract all the data from the campaign.
   * @param campaign the {@link Campaign} to extract the information from.
   */
  getCampaignData(campaign: Campaign): CampaignData;
}
