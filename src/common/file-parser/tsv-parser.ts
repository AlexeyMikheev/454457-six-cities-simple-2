import { MapperInterface } from '../mapper/mapper.interface.js';
import TextColor from '../text-color.js';
import { FileParserArrayInterface, ContentResult } from './file-parser.interface.js';
import TextFormatter from '../../utils/text-formatter.js';

export default class TSVParserM<T> implements FileParserArrayInterface<T> {
  private data: ContentResult<T[]> = null;

  constructor(public readonly content: string) { }

  public getData(): ContentResult<T[]> {
    return this.data;
  }

  public parse(mapper: MapperInterface<T>) {
    try {
      const rows = TextFormatter.stringToArray(this.content).filter((row) => row.trim() !== '');

      if(rows?.length){
        this.data = rows.map((row) =>  mapper.mapToItem(TextFormatter.stringToArray(row, '\t')));
      }
    } catch (error) {
      console.log(TextColor.Red(error));
    }
  }
}
