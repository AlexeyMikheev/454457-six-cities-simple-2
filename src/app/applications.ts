import { ConfigInterface } from '../common/config-service/config.interface';
import { LoggerInterface } from '../common/logger-service/logger-service.interface';

class Application {
  constructor(private logger: LoggerInterface, private config: ConfigInterface) { }

  public init() {
    this.logger.info('Application initialization...');
    this.logger.info(`Get value from .env $PORT ${this.config.get('PORT')}`);
    this.logger.info(`Get value from .env $SALT ${this.config.get('SALT')}`);
    this.logger.info(`Get value from .env $DB_HOST ${this.config.get('DB_HOST')}`);
  }
}

export default Application;
