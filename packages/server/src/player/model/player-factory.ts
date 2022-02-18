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

import { Player } from './player';
import { PlayerImpl } from './player-impl';
import { Team } from './team';
import { I18N_DEPENDENCY_TYPES, I18NProvider } from '../../utils/i18n';
import { dependencyContainer } from '../../utils/dependency-injection';
import { interfaces } from 'inversify';
import { PLAYER_DEPENDENCY_TYPES } from './dependency-types';
import {
  Logger,
  LoggerFactory,
  LOGGING_DEPENDENCY_TYPES,
} from '../../utils/logging';
import { PlayerManager } from './player-manager';

/**
 * A factory for creating Player objects.
 */
export const registerPlayerFactory = (): void => {
  /* Only Bind Player factory if it is not already bound */
  if (!dependencyContainer.isBound(PLAYER_DEPENDENCY_TYPES.PlayerFactory)) {
    dependencyContainer
      .bind<interfaces.Factory<Player>>(PLAYER_DEPENDENCY_TYPES.PlayerFactory)
      .toFactory<Player, ['', undefined]>((context: interfaces.Context) => {
        const loggerFactory: LoggerFactory =
          context.container.get<LoggerFactory>(
            LOGGING_DEPENDENCY_TYPES.LoggerFactory,
          );
        const i18n = context.container.get<I18NProvider>(
          I18N_DEPENDENCY_TYPES.I18N,
        );
        const playerManager = context.container.get<PlayerManager>(
          PLAYER_DEPENDENCY_TYPES.PlayerManager,
        );
        return (name: string, team: Team | undefined): Player => {
          return new PlayerImpl(
            loggerFactory,
            i18n,
            name,
            team || playerManager.getDefaultTeam(),
          );
        };
      });
  }
};

export type PlayerFactory = (name: string, team: Team | undefined) => Player;
