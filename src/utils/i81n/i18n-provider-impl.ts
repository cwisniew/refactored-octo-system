/*
 * This software Copyright by Craig Wisniewski
 * license TBD
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
