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

import { Campaign } from './campaign';
import { dependencyContainer } from '../../utils/dependency-injection';
import { interfaces } from 'inversify';
import { CAMPAIGN_DEPENDENCY_TYPES } from './dependency-types';
import { I18NProvider, I18N_DEPENDENCY_TYPES } from '../../utils/i18n';
import { Scene, SCENE_DEPENDENCY_TYPES } from '../../scene';

/**
 * Factory for creating a "starter" model.
 */
export const registerStarterCampaignFactory = (): void => {
  dependencyContainer
    .bind<interfaces.Factory<Campaign>>(
      CAMPAIGN_DEPENDENCY_TYPES.StarterCampaignFactory,
    )
    .toFactory<Campaign, [name: string]>((context: interfaces.Context) => {
      return (campaignName: string) => {
        const i18nProvider: I18NProvider = context.container.get<I18NProvider>(
          I18N_DEPENDENCY_TYPES.I18N,
        );

        const i18n = i18nProvider.i18n();

        const campaign = context.container.get<Campaign>(
          CAMPAIGN_DEPENDENCY_TYPES.Campaign,
        );
        campaign.setName(campaignName);

        const sceneFactory: (name: string) => Scene = context.container.get(
          SCENE_DEPENDENCY_TYPES.StarterSceneFactory,
        );
        const scene = sceneFactory(i18n.t('scene.starter.name'));
        campaign.addScene(scene);
        return campaign;
      };
    });
};
