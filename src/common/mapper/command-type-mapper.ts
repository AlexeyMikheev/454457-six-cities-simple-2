import { CommandType } from '../../types/command-type.enum.js';
import { Nullable } from '../../types/nullable-type.js';
import { MapperInterface } from './mapper.interface.js';

export default class CommandTypeMapper implements MapperInterface<CommandType> {
  public mapToItem(data: string): Nullable<CommandType> {
    const cityTypeKey = Object.keys(CommandType).find((key) => key.toLowerCase() === data.toLowerCase());

    return cityTypeKey ? CommandType[cityTypeKey as CommandType] : null;
  }
}
