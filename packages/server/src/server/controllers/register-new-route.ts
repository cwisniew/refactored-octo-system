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

import { Controller } from './controller';
import { dependencyContainer } from '../../utils/dependency-injection';
import { ControllerManager } from './controller-manager';
import { CONTROLLER_DEPENDENCY_TYPES } from './dependency-types';

export const registerNewRoute = (
  controllerSymbol: symbol,
  bindToInSingleton: new (...args: never[]) => Controller,
): void => {
  if (!dependencyContainer.isBound(controllerSymbol)) {
    dependencyContainer
      .bind<Controller>(controllerSymbol)
      .to(bindToInSingleton)
      .inSingletonScope();

    const controllerManager = dependencyContainer.get<ControllerManager>(
      CONTROLLER_DEPENDENCY_TYPES.ControllerManager,
    );

    controllerManager.registerController(
      dependencyContainer.get<Controller>(controllerSymbol),
    );
  }
};
