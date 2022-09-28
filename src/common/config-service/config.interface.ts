import { ConfigSchema, ConfigSchemaKey } from './config.schema.js';

export interface ConfigInterface {
    get<T extends ConfigSchemaKey>(key: T): ConfigSchema[T];
}
