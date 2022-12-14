export enum InjectType {
  Application = 'Application',
  LoggerInterface = 'LoggerInterface',
  ConfigInterface = 'ConfigInterface',
}

export type InjectKeys = { [key in InjectType]: symbol };

export const INJECT_KEYS: InjectKeys = {
  Application: Symbol.for(InjectType.Application),
  LoggerInterface: Symbol.for(InjectType.LoggerInterface),
  ConfigInterface: Symbol.for(InjectType.ConfigInterface),
};
