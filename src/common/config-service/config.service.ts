import { config } from 'dotenv';
import { injectable, inject } from 'inversify';
import { INJECT_KEYS } from '../../types/inject-type.enum.js';
import { LoggerInterface } from '../logger-service/logger-service.interface.js';
import { ConfigInterface } from './config.interface.js';
import { configSchema, ConfigSchema, ConfigSchemaKey } from './config.schema.js';

@injectable()
class ConfigService implements ConfigInterface {
  private config!: ConfigSchema;

  constructor(@inject(INJECT_KEYS.LoggerInterface) private logger: LoggerInterface) {
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
