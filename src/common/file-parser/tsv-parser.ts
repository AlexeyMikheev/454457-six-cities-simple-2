import { MapperInterface } from '../mapper/mapper.interface.js';
import { FileParserArrayInterface } from './file-parser.interface.js';
import TextFormatter from '../text-formatter.js';
import { Nullable } from '../../types/nullable-type.js';

export default class TSVParserM<T> implements FileParserArrayInterface<T> {
  private data: Nullable<T>[] = [];

  constructor(public readonly content: string) { }

  public getData(): Nullable<T>[] {
    return this.data;
  }

  public parse(mapper: MapperInterface<T>) {
    try {
      const rows = TextFormatter.stringToArray(this.content).filter((row) => row.trim() !== '');

      if(rows?.length){
        this.data = rows.map((row) => mapper.mapToItem(row));
      }
    } catch (error) {
      console.log(TextFormatter.drawRed(error));
    }
  }
}
