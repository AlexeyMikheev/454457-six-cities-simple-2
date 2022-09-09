import HelpCommand from './cli-command/help-command.js';
import VersionCommand from './cli-command/version-command.js';
import ImportCommand from './cli-command/import-command.js';
import CliApplication from './app/cli-application.js';


const cliApplication = new CliApplication();
cliApplication.registerCommands([new VersionCommand(),new HelpCommand(),new ImportCommand()]);
