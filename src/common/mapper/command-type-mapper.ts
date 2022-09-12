import { CommandType } from '../../types/command-type.enum.js';
import { MapperInterface } from './mapper.interface.js';

export default class CommandTypeMapper implements MapperInterface<CommandType> {
  public mapToItem(data: string) {
    switch (data.toLowerCase()) {
      case CommandType.Help: return CommandType.Help;
      case CommandType.Version: return CommandType.Version;
      case CommandType.Import: return CommandType.Import;
      default: throw new Error(`Значение ${data} не определено в CommandType`);
    }
  }
}
