import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { ConfigInterface } from '../common/config-service/config.interface.js';
import { LoggerInterface } from '../common/logger-service/logger-service.interface.js';
import { INJECT_KEYS } from '../types/inject-type.enum.js';
import { DatabaseInterface } from '../common/database-service/database.interface.js';

@injectable()
class Application {
  constructor(
    @inject(INJECT_KEYS.LoggerInterface) private logger: LoggerInterface,
    @inject(INJECT_KEYS.ConfigInterface) private config: ConfigInterface,
    @inject(INJECT_KEYS.DatabaseInterface) private databaseService: DatabaseInterface,
  ) { }

  public async init() {
    this.logger.info('Application initialization...');
    this.logger.info(`Get value from .env $PORT ${this.config.get('PORT')}`);
    this.logger.info(`Get value from .env $SALT ${this.config.get('SALT')}`);
    this.logger.info(`Get value from .env $DB_HOST ${this.config.get('DB_HOST')}`);

    await this.databaseService.connect();
  }
}

export default Application;
