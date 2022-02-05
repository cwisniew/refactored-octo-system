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
import { CampaignData, CampaignView } from './campaign-view';
import { injectable } from 'inversify';

/**
 * Extracts data from a {@link Campaign} object.
 */
@injectable()
export class CampaignViewImpl implements CampaignView {
  /**
   * Returns the campaign data.
   * @param campaign
   */
  getCampaignData(campaign: Campaign): CampaignData {
    return {
      id: campaign.id,
      name: campaign.getName(),
      formatVersion: campaign.getFormatVersion(),
      gameMaps: campaign.getMapIds(),
    };
  }
}
