import convict from 'convict';
import { ipaddress } from 'convict-format-with-validator';

convict.addFormat(ipaddress);

export type ConfigSchema = {
  PORT: number;
  SALT: string;
  DB_HOST: string;
};

export type ConfigSchemaKey = keyof ConfigSchema;

export const configSchema = convict<ConfigSchema>({
  PORT: {
    doc: 'Port for incomming conncetions',
    format: 'port',
    env: 'PORT',
    default: 4000
  },
  SALT: {
    doc: 'Salt for password hash',
    format: String,
    env: 'SALT',
    default: null
  },
  DB_HOST: {
    doc: 'Ip address of the database server (Mongo DB)',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'DB_HOST'
  },
});
