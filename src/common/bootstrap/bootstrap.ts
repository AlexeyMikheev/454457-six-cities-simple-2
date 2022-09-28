import { Container } from 'inversify';
import Application from '../../app/application.js';
import { INJECT_KEYS } from '../../types/inject-type.enum.js';
import { ConfigInterface } from '../config-service/config.interface.js';
import ConfigService from '../config-service/config.service.js';
import { LoggerInterface } from '../logger-service/logger-service.interface.js';
import LoggerService from '../logger-service/logger.service.js';

class Bootstrap {
  private static container: Container;

  private static createContainer() {
    const container = new Container();

    container.bind<Application>(INJECT_KEYS.Application).to(Application);
    container.bind<LoggerInterface>(INJECT_KEYS.LoggerInterface).to(LoggerService);
    container.bind<ConfigInterface>(INJECT_KEYS.ConfigInterface).to(ConfigService);

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
