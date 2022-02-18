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
import { Team } from './team';
import { Logger } from '../../utils/logging';
import { I18NProvider } from '../../utils/i18n';
import { i18n } from 'i18next';

/**
 * The PlayerImpl class is the implementation of the Player interface.
 *
 * It is used to represent a player in the game.
 */
export class PlayerImpl implements Player {
  /**
   * Logger used for logging messages.
   * @private
   */
  private readonly logger: Logger;

  /**
   * The object used for translations.
   * @private
   */
  private readonly i18n: i18n;
  /**
   * Creates a new PlayerImpl instance.
   * @param loggerFactory the factory used to create the logger object.
   * @param i18nProvider the provider used to create the translation object.
   * @param name The name of the player.
   * @param team The team that the player belongs to.
   */
  constructor(
    loggerFactory: (name: string) => Logger,
    i18nProvider: I18NProvider,
    readonly name: string,
    private team: Team,
  ) {
    this.logger = loggerFactory(this.constructor.name);
    this.i18n = i18nProvider.i18n();
  }

  /**
   * Returns the team that the player belongs to.
   */
  getTeam(): Team {
    return this.team;
  }
}
