import { CommandType } from '../../types/command-type.enum.js';
import { MapperInterface } from './mapper.interface.js';

class CommandTypeMapper implements MapperInterface<CommandType> {
  public mapToModel(data: string) {
    switch (data.toLowerCase()) {
      case CommandType.Help: return CommandType.Help;
      case CommandType.Version: return CommandType.Version;
      case CommandType.Import: return CommandType.Import;
      case CommandType.Generate: return CommandType.Generate;
      default: throw new Error(`Значение ${data} не определено в CommandType`);
    }
  }

  public mapToString(data: CommandType): string {
    if (!data) {
      throw new Error(`Значение ${data} не определено`);
    }
    return data.toString();
  }
}

export default CommandTypeMapper;
