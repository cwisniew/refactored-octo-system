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

import { RouteHandler } from './route-handler';
import { dependencyContainer } from '../../utils/dependency-injection';
import { RouteManager } from './route-manager';
import { ROUTES_DEPENDENCY_TYPES } from './dependency-types';

export const registerNewRoute = (
  routeHandlerSymbol: symbol,
  bindToInSingleton: new (...args: never[]) => RouteHandler,
): void => {
  console.log('here 1');
  if (!dependencyContainer.isBound(routeHandlerSymbol)) {
    console.log('here 2');
    dependencyContainer
      .bind<RouteHandler>(routeHandlerSymbol)
      .to(bindToInSingleton)
      .inSingletonScope();

    const routeManager = dependencyContainer.get<RouteManager>(
      ROUTES_DEPENDENCY_TYPES.RouteManager,
    );

    routeManager.registerRouteHandler(
      dependencyContainer.get<RouteHandler>(routeHandlerSymbol),
    );
  }
};
