import convict from 'convict';
import { ipaddress } from 'convict-format-with-validator';

convict.addFormat(ipaddress);

export type ConfigSchema = {
  PORT: number;
  SALT: string;
  DB_HOST: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_PORT: string;
  DB_NAME: string;
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
    default: '0.0.0.0',
    env: 'DB_HOST'
  },
  DB_USER: {
    doc: 'User name to connect to MongoDb',
    format: String,
    env: 'MONGO_INITDB_ROOT_USERNAME',
    default: null
  },
  DB_PASSWORD: {
    doc: 'User password to connect to MongoDb',
    format: String,
    env: 'MONGO_INITDB_ROOT_PASSWORD',
    default: null
  },
  DB_PORT: {
    doc: 'Port to connect to MongoDb',
    format: 'port',
    env: 'DB_PORT',
    default: null
  },
  DB_NAME: {
    doc: 'Database name to connect to MongoDb',
    format: String,
    env: 'DB_NAME',
    default: null
  }
});
