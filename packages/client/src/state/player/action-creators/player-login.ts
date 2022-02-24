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

import { Dispatch } from 'react';
import { Socket } from 'socket.io-client';
import {
  PLAYER_LOGIN_ACTION_TYPES,
  PlayerLoginAction,
} from '../actions/player-login';

export const playerLoginAction: (
  webSocket: Socket | undefined,
  name: string,
  password: string,
) => (dispatch: Dispatch<PlayerLoginAction>) => Promise<void> = (
  webSocket: Socket | undefined,
  name: string,
  password: string,
) => {
  return async (dispatch: Dispatch<PlayerLoginAction>) => {
    if (webSocket) {
      webSocket.emit(PLAYER_LOGIN_ACTION_TYPES.LOGIN, {
        name,
        password,
      });
    }
    dispatch({
      type: PLAYER_LOGIN_ACTION_TYPES.LOGIN,
      payload: {
        name,
        password,
        team: undefined,
        error: undefined,
      },
    });
  };
};
