/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { i18n as i18nInstance } from 'i18next';

/**
 * Interface for a provider for a configured i18n instance.
 */
export interface I18NProvider {
  /**
   * Returns a configured i18n instance
   */
  i18n(): i18nInstance;
}
