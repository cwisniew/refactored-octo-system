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

export enum PLAYER_LOGIN_ACTION_TYPES {
  LOGIN = 'LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  ERROR_LOGGING_IN = 'ERROR_LOGGING_IN',
  LOGOUT = 'LOGOUT',
}

export interface PlayerLoginPayload {
  name: string;
  password: string | undefined;
  team: string | undefined;
  error: string | undefined;
}

export interface PlayerLoginAction {
  type: PLAYER_LOGIN_ACTION_TYPES.LOGIN;
  payload: PlayerLoginPayload;
}

export interface PlayerLogoutAction {
  type: PLAYER_LOGIN_ACTION_TYPES.LOGOUT;
  payload: PlayerLoginPayload;
}

export interface PlayerLoginErrorAction {
  type: PLAYER_LOGIN_ACTION_TYPES.ERROR_LOGGING_IN;
  payload: PlayerLoginPayload;
}

export interface PlayerLoginSuccessAction {
  type: PLAYER_LOGIN_ACTION_TYPES.LOGIN_SUCCESS;
  payload: PlayerLoginPayload;
}

export type PlayerLoginActionTypes =
  | PlayerLoginAction
  | PlayerLogoutAction
  | PlayerLoginErrorAction
  | PlayerLoginSuccessAction;
