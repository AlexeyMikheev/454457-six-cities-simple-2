import 'reflect-metadata';
import HelpCommand from './cli-command/help-command.js';
import VersionCommand from './cli-command/version-command.js';
import ImportCommand from './cli-command/import-command.js';
import CliApplication from './app/cli-application.js';
import CommandTypeMapper from './common/mapper/command-type-mapper.js';
import CommandParser from './common/parser/command-parser.js';
import GenerateCommand from './cli-command/generate-command.js';


const cliApplication = new CliApplication();
cliApplication.registerCommands([new VersionCommand, new HelpCommand, new ImportCommand, new GenerateCommand]);

const [, , ...args] = process.argv;
const commandParser = new CommandParser(args);
commandParser.parse(new CommandTypeMapper);

cliApplication.processCommand(commandParser.getData());
