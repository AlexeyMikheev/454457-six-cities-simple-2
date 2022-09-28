import Application from './app/application.js';
import Bootstrap from './common/bootstrap/bootstrap.js';
import { INJECT_KEYS } from './types/inject-type.enum.js';

const application = Bootstrap.getContainer().get<Application>(INJECT_KEYS.Application);
await application.init();
