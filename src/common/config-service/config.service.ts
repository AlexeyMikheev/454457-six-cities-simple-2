import { LoggerInterface } from '../logger-service/logger-service.interface.js';
import { ConfigInterface } from './config.interface.js';
import { config } from 'dotenv';
import { configSchema, ConfigSchema, ConfigSchemaKey } from './config.schema.js';

class ConfigService implements ConfigInterface {
  private config!: ConfigSchema;

  constructor(private logger: LoggerInterface) {
    const parsedConfig = config();

    if (parsedConfig.error) {
      throw new Error('Error read .env file.');
    }

    configSchema.load({});
    configSchema.validate({ allowed: 'strict', output: this.logger.info });

    this.config = configSchema.getProperties();
    this.logger.info('.env file found and successfully parsed');
  }

  public get<T extends ConfigSchemaKey>(key: T) {
    return this.config[key];
  }
}

export default ConfigService;
