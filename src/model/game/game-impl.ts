/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { Game } from './game';
import { Campaign } from '../campaign';
import {
  Logger,
  LoggerFactory,
  LOGGING_DEPENDENCY_TYPES,
} from '../../utils/logging';
import { inject, injectable } from 'inversify';

@injectable()
export class GameImpl implements Game {
  private readonly logger: Logger;
  private campaign: Campaign | undefined;

  constructor(
    @inject(LOGGING_DEPENDENCY_TYPES.LoggerFactory)
    loggerFactory: (name: string) => Logger,
  ) {
    this.logger = loggerFactory(this.constructor.name);
  }
  getCampaign(): Campaign | undefined {
    return this.campaign;
  }

  setCampaign(campaign: Campaign): void {
    this.campaign = campaign;
  }
}
