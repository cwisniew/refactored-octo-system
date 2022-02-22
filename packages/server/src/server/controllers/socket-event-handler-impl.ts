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

import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { SocketEventHandler } from './socket-event-handler';
import { Logger, LOGGING_DEPENDENCY_TYPES } from '../../utils/logging';
import { inject } from 'inversify';
import { I18N_DEPENDENCY_TYPES, I18NProvider } from '../../utils/i18n';
import { i18n } from 'i18next';

/**
 * Class that handles socket.io events.
 */
export class SocketEventHandlerImpl implements SocketEventHandler {
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
   * Creates a new socket event handler.
   * @param loggerFactory the factory for creating logging objects.
   * @param i18nProvider the provider to get translation objects.
   */
  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: (name: string) => Logger,
    @inject(I18N_DEPENDENCY_TYPES.I18N) i18nProvider: I18NProvider,
  ) {
    this.logger = loggerFactory('SocketEventHandlerImpl');
    this.i18n = i18nProvider.i18n();
  }

  /**
   * Handles the connection event and registers other event handlers.
   * @param socketIOServer the socket.io server.
   * @param socket the socket the event was emitted from.
   */
  connected(
    socketIOServer: Server,
    socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>,
  ): void {
    this.logger.info(
      this.i18n.t('socket.event.handler.connected', {
        from: socket.handshake.address,
      }),
    );
  }
}
