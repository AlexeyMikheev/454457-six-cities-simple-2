import Application from './app/applications.js';
import ConfigService from './common/config-service/config.service.js';
import LoggerService from './common/logger-service/logger.service.js';

const logger = new LoggerService();
const config = new ConfigService(logger);
const application = new Application(logger, config);
await application.init();
