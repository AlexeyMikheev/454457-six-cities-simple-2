import { CliCommandInterface } from '../cli-command/cli-command.interface.js';
import { CommandType } from '../types/command-type.enum.js';
import { Command } from '../types/command-type.js';

export default class CliApplication {
  private commands: Map<CommandType, CliCommandInterface> = new Map();

  public registerCommands(commands: CliCommandInterface[]) {
    if (!commands?.length) {
      return;
    }

    this.commands = commands.reduce((acc, command) => {
      const { name } = command;

      if (!acc.has(name)) {
        acc.set(name, command);
      }
      return acc;
    }, this.commands);
    console.log(this.commands);
  }

  public processCommand(command: Command) {
    const [commandType, args] = command;
    const executer = this.commands.get(commandType);

    if (executer) {
      executer.execute(...args);
    }
  }
}
