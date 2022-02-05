/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { Campaign } from './campaign';
import { inject, injectable } from 'inversify';
import { Logger, LOGGING_DEPENDENCY_TYPES } from '../../utils/logging';

export const CURRENT_CAMPAIGN_FORMAT_VERSION = '0.0.1';

@injectable()
export class CampaignImpl implements Campaign {
  private readonly logger: Logger;
  private name: string;
  private formatVersion: string;

  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: (name: string) => Logger,
  ) {
    this.logger = loggerFactory(this.constructor.name);
    this.name = '';
    this.formatVersion = CURRENT_CAMPAIGN_FORMAT_VERSION;
  }

  getFormatVersion(): string {
    return this.formatVersion;
  }

  getName(): string {
    return this.name;
  }

  setFormatVersion(version: string): void {
    this.formatVersion = version;
  }

  setName(name: string): void {
    this.name = name;
  }
}
