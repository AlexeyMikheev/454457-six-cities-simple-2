import { CommandType } from '../../types/command-type.enum.js';
import { Command } from '../../types/command-type.js';
import { MapperInterface } from '../mapper/mapper.interface.js';

class CommandParser {
  private data: Command = [CommandType.Help, []];
  constructor(public readonly content: string[]) { }

  public getData(): Command {
    return this.data;
  }

  public parse(mapper: MapperInterface<CommandType>) {
    if (!this.content?.length) {
      return;
    }

    const [commandValue, ...commandArgs] = this.content;

    const commandType = mapper.mapToItem(commandValue.replace('--', '')) || CommandType.Help;

    this.data = [commandType, commandArgs];
  }
}

export default CommandParser;
