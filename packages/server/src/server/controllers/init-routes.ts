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

import { registerNewRoute } from './register-new-route';
import {
  CampaignController,
  CAMPAIGN_CONTROLLER_DEPENDENCY_TYPES,
} from '../../campaign';
import {
  SceneController,
  SCENE_CONTROLLER_DEPENDENCY_TYPES,
} from '../../scene';

/**
 * Register the route for campaigns.
 */
registerNewRoute(
  CAMPAIGN_CONTROLLER_DEPENDENCY_TYPES.CampaignController,
  CampaignController,
);

/**
 * Register the route for game maps
 */
registerNewRoute(
  SCENE_CONTROLLER_DEPENDENCY_TYPES.SceneController,
  SceneController,
);
