import HelpCommand from './cli-command/help-command.js';
import VersionCommand from './cli-command/version-command.js';

new VersionCommand().execute();
new HelpCommand().execute();
