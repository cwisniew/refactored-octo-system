/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import { injectable } from 'inversify';
import { v4 as uuidv4 } from 'uuid';
import { IdGen } from './id-gen';

/**
 *  Class to generate IDs.
 */
@injectable()
export class IdGenImpl implements IdGen {
  /**
   * Generate and ID.
   */
  id(): string {
    return uuidv4();
  }
}
