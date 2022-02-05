/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { Campaign } from './campaign';
import { inject, injectable } from 'inversify';
import { Logger, LOGGING_DEPENDENCY_TYPES } from '../../utils/logging';
import { IdGen, ID_GEN_DEPENDENCY_TYPES } from '../../utils/id';

export const CURRENT_CAMPAIGN_FORMAT_VERSION = '0.0.1';

/**
 * The standard campaign class.
 */
@injectable()
export class CampaignImpl implements Campaign {
  /**
   * The id of the campaign.
   * @private
   */
  private readonly id: string;

  /**
   * Logger used for logging messages.
   * @private
   */
  private readonly logger: Logger;

  /**
   * The name of the campaign.
   * @private
   */
  private name: string;

  /**
   * The version of the format used for the campaign.
   * @private
   */
  private formatVersion: string;

  /**
   * Creates a new campaign.
   * @param loggerFactory the factory for creating logging objects.
   * @param idGen class used to generate ids.
   */
  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: (name: string) => Logger,
    @inject(ID_GEN_DEPENDENCY_TYPES.IdGen) idGen: IdGen,
  ) {
    this.id = idGen.id();
    this.logger = loggerFactory(this.constructor.name);
    this.name = '';
    this.formatVersion = CURRENT_CAMPAIGN_FORMAT_VERSION;
    this.logger.debug('campaign.debug.created');
  }

  /**
   * Returns the id of the campaign.
   */
  getId(): string {
    return this.id;
  }

  /**
   * Returns the version of the campaign format.
   */
  getFormatVersion(): string {
    return this.formatVersion;
  }

  /**
   * Returns the name of the campaign.
   */
  getName(): string {
    return this.name;
  }

  /**
   * Sets the version of the campaign format.
   * @param version the version of the campaign format.
   */
  setFormatVersion(version: string): void {
    this.formatVersion = version;
  }

  /**
   * Sets the name of the campaign.
   * @param name the name of the campaign.
   */
  setName(name: string): void {
    this.name = name;
  }
}
