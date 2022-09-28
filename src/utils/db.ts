import { ConnectOptions } from 'mongoose';

export const getUri = (
  host: string,
  port: string,
  databaseName: string,
) => `mongodb://${host}:${port}/${databaseName}`;

export const getOpts = (user: string, pass: string, authSource: string): ConnectOptions => ({
  user,
  pass,
  authSource
});
