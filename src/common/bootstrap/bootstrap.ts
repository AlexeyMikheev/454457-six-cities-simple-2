import { Container } from 'inversify';
import Application from '../../app/application.js';
import { UserServiceInterface } from '../../modules/user/user-service.interface.js';
import { UserEntity, UserModel } from '../../modules/user/user.entity.js';
import UserService from '../../modules/user/user.service.js';
import { INJECT_KEYS } from '../../types/inject-type.enum.js';
import { ConfigInterface } from '../config-service/config.interface.js';
import ConfigService from '../config-service/config.service.js';
import DatabaseService from '../database-service/database-service.js';
import { LoggerInterface } from '../logger-service/logger-service.interface.js';
import LoggerService from '../logger-service/logger.service.js';

class Bootstrap {
  private static container: Container;

  private static createContainer() {
    const container = new Container();

    container.bind<Application>(INJECT_KEYS.Application).to(Application);
    container.bind<LoggerInterface>(INJECT_KEYS.LoggerInterface).to(LoggerService);
    container.bind<ConfigInterface>(INJECT_KEYS.ConfigInterface).to(ConfigService);
    container.bind<DatabaseService>(INJECT_KEYS.DatabaseInterface).to(DatabaseService);
    container.bind<UserServiceInterface>(INJECT_KEYS.UserService).to(UserService);
    container.bind<UserEntity>(INJECT_KEYS.UserService).to(UserModel);

    return container;
  }

  public static getContainer() {
    if (!this.container) {
      this.container = this.createContainer();
    }

    return this.container;
  }
}

export default Bootstrap;
