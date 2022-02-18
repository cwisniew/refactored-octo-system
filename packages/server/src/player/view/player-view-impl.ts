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

import { Player, PlayerManager, PLAYER_DEPENDENCY_TYPES } from '../model';
import { PlayerData, PlayerListData, PlayerView } from './player-view';
import { inject, injectable } from 'inversify';

/**
 * implementation of interface for objects that extract data from {@link Player} objects.
 */
@injectable()
export class PlayerViewImpl implements PlayerView {
  /**
   * Creates a new instance of PlayerViewImpl.
   * @param playerManager the {@link PlayerManager} to use to get the {@link Player} objects.
   */
  constructor(
    @inject(PLAYER_DEPENDENCY_TYPES.PlayerManager)
    private readonly playerManager: PlayerManager,
  ) {}

  /**
   * Extract all the information for a player.
   * @param player if string the name of the {@link Player} or the {@link Player}.
   */
  getPlayerData(player: string | Player): PlayerData {
    let pl: Player | undefined;
    if (typeof player === 'string') {
      pl = this.playerManager.getPlayer(player);
      if (!pl) {
        throw new Error(`player ${player} not found`);
      }
    } else {
      pl = player;
    }
    return this.extractPlayerData(pl);
  }

  /**
   * Extract data from the list of players.
   */
  getPlayerList(): PlayerListData {
    return {
      players: this.playerManager.getPlayers().map(this.extractPlayerData),
    };
  }

  /**
   * Extract data from a player.
   * @param player
   * @private
   */
  private extractPlayerData(player: Player): PlayerData {
    return {
      name: player.name,
      teamName: player.getTeam().name,
    };
  }
}
