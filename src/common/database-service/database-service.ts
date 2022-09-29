import { inject, injectable } from 'inversify';
import mongoose, { ConnectOptions } from 'mongoose';
import { INJECT_KEYS } from '../../types/inject-type.enum.js';
import { ConfigInterface } from '../config-service/config.interface.js';
import { LoggerInterface } from '../logger-service/logger-service.interface.js';
import { DatabaseInterface } from './database.interface.js';

@injectable()
class DatabaseService implements DatabaseInterface {
  constructor(
    @inject(INJECT_KEYS.LoggerInterface) private logger: LoggerInterface,
    @inject(INJECT_KEYS.ConfigInterface) private config: ConfigInterface) {
  }

  async connect(uri: string, opts: ConnectOptions): Promise<void> {
    this.logger.info('Try to connect to Mongo DB...');
    await mongoose.connect(uri, opts);
    this.logger.info('Database connection established');
  }

  async disconect(): Promise<void> {
    mongoose.disconnect();
    this.logger.info('Database connection closed');
  }
}

export default DatabaseService;
