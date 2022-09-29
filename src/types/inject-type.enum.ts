export enum InjectType {
  Application = 'Application',
  LoggerInterface = 'LoggerInterface',
  ConfigInterface = 'ConfigInterface',
  DatabaseInterface = 'DatabaseInterface',
  UserService = 'UserService',
  UserModel = 'UserModel',
  OfferModel = 'OfferModel',
  OfferService = 'OfferService',
}

export type InjectKeys = { [key in InjectType]: symbol };

export const INJECT_KEYS: InjectKeys = {
  Application: Symbol.for(InjectType.Application),
  LoggerInterface: Symbol.for(InjectType.LoggerInterface),
  ConfigInterface: Symbol.for(InjectType.ConfigInterface),
  DatabaseInterface: Symbol.for(InjectType.DatabaseInterface),
  UserService: Symbol.for(InjectType.UserService),
  UserModel: Symbol.for(InjectType.UserModel),
  OfferModel: Symbol.for(InjectType.OfferModel),
  OfferService: Symbol.for(InjectType.OfferService),
};
