import { drawRed } from '../../utils/text.js';
import { MapperInterface } from '../mapper/mapper.interface.js';

class TSVParser<T>  {
  private data?: T;

  constructor(public readonly content: string) { }

  public getData() {
    return this.data;
  }

  public parse(mapper: MapperInterface<T>) {
    try {
      this.data = mapper.mapToItem(this.content);
    }
    catch (error) {
      console.log(drawRed(error));
    }
  }
}

export default TSVParser;
