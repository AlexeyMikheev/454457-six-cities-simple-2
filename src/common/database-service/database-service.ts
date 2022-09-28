import { inject, injectable } from 'inversify';
import mongoose, { ConnectOptions } from 'mongoose';
import { INJECT_KEYS } from '../../types/inject-type.enum.js';
import { getUri, getOpts } from '../../utils/db.js';
import { ConfigInterface } from '../config-service/config.interface.js';
import { LoggerInterface } from '../logger-service/logger-service.interface.js';
import { DatabaseInterface } from './database.interface.js';

@injectable()
class DatabaseService implements DatabaseInterface {
  private uri!: string;
  private opts!: ConnectOptions;

  constructor(
    @inject(INJECT_KEYS.LoggerInterface) private logger: LoggerInterface,
    @inject(INJECT_KEYS.ConfigInterface) private config: ConfigInterface) {

    this.uri = getUri(this.config.get('DB_HOST'), this.config.get('DB_PORT'), this.config.get('DB_NAME'));
    this.opts = getOpts(this.config.get('DB_USER'), this.config.get('DB_PASSWORD'), 'admin');
  }

  async connect(): Promise<void> {
    this.logger.info('Try to connect to Mongo DB...');
    await mongoose.connect(this.uri, this.opts);
    this.logger.info('Database connection established');
  }

  async disconect(): Promise<void> {
    mongoose.disconnect();
    this.logger.info('Database connection closed');
  }
}

export default DatabaseService;
