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

import i18next, { i18n as i18nInstance } from 'i18next';
import enResources from '../../resources/i18n/en/translate.json';
import { I18NProvider } from './i18n-provider';
import { injectable } from 'inversify';

let i18n: i18nInstance | undefined;

/**
 * Creates a configured i18n object.
 */
(async (): Promise<i18nInstance> => {
  if (!i18n) {
    i18n = i18next.createInstance();
    await i18n.init({
      ns: 'translate',
      fallbackLng: 'en',
      initImmediate: false,
      resources: { en: { translate: enResources } },
    });
  }

  return i18n;
})();

/**
 * Provider for a configured i18n instance.
 */
@injectable()
export class I18NProviderImpl implements I18NProvider {
  /**
   * Returns a configured i18n instance
   */
  i18n(): i18nInstance {
    if (i18n) {
      return i18n;
    }
    throw 'Unable to load translations.';
  }
}
