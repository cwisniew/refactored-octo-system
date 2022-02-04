/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import 'reflect-metadata';
import { Container } from 'inversify';

/**
 * Dependency Injection Container
 */
export const inversifyContainer = new Container({ defaultScope: 'Singleton' });
