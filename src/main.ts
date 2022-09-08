import HelpCommand from './cli-command/help-command.js';
import VersionCommand from './cli-command/version-command.js';
import ImportCommand from './cli-command/import-command.js';

new VersionCommand().execute();
new HelpCommand().execute();
new ImportCommand().execute();
