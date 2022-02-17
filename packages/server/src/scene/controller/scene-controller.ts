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

import { Controller } from '../../server/controllers/controller';
import { Express } from 'express';
import { inject, injectable } from 'inversify';
import { Logger, LOGGING_DEPENDENCY_TYPES } from '../../utils/logging';
import { I18N_DEPENDENCY_TYPES, I18NProvider } from '../../utils/i18n';
import { i18n } from 'i18next';

/**
 * The route handler for Game Maps.
 */
@injectable()
export class SceneController implements Controller {
  /** Object used to log messages. */
  private readonly logger: Logger;

  /** Object for translation. */
  private readonly i18n: i18n;
  /**
   * Create a new GameMapController.
   * @param loggerFactory the factory used to create logging objects.
   * @param i18nProvider provider for the translation object.
   * @param sceneView the view for scenes
   */
  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: (name: string) => Logger,
    @inject(I18N_DEPENDENCY_TYPES.I18N) i18nProvider: I18NProvider,
    @inject(SCENE_VIEW_DEPENDENCY_TYPES.sceneView)
    private readonly sceneView: sceneView,
  ) {
    this.logger = loggerFactory(this.constructor.name);
    this.i18n = i18nProvider.i18n();
  }

  /**
   * Adds routes for the model object to the express app.
   * @param expressApp the express app to add the routes to.
   */
  addRoutes(expressApp: Express): void {
    this.logger.debug(
      this.i18n.t('server.debug.route.add', { path: '/game-map' }),
    );
    expressApp.get('/game-map/:id', (req, res) => {
      const id = req.params.id;
      try {
        res.send(this.sceneView.getGameMapData(id));
      } catch (e) {
        this.logger.warn(
          this.i18n.t('server.request.unknownId', {
            what: 'GameMap',
            id: id,
          }),
        );
        res.sendStatus(404);
      }
    });

    expressApp.get('/game-map', (req, res) => {
      res.send(this.sceneView.getGameMapList());
    });
  }
}
