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

import {
  PLAYER_LOGIN_ACTION_TYPES,
  PlayerLoginActionTypes,
} from '../actions/player-login';

export interface PlayerLoginState {
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | undefined;
  name: string | undefined;
  team: string | undefined;
}

const initialPlayerLoginState: PlayerLoginState = {
  isLoggedIn: false,
  isLoading: false,
  error: undefined,
  name: undefined,
  team: undefined,
};

export const playerLoginReducer = (
  state: PlayerLoginState = initialPlayerLoginState,
  action: PlayerLoginActionTypes,
): PlayerLoginState => {
  switch (action.type) {
    case PLAYER_LOGIN_ACTION_TYPES.LOGIN:
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
        error: undefined,
        name: action.payload.name,
      };
    case PLAYER_LOGIN_ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: undefined,
        name: action.payload.name,
      };
    case PLAYER_LOGIN_ACTION_TYPES.ERROR_LOGGING_IN:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload.error,
      };
    case PLAYER_LOGIN_ACTION_TYPES.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        error: undefined,
      };
    default:
      return state;
  }
};
