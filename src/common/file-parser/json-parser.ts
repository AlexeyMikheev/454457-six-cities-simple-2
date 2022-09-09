import { Nullable } from '../../types/nullable-type.js';
import TextFormatter from '../text-formatter.js';
import { FileParserInterface } from './file-parser.interface.js';

export default class JsonParser<T> implements FileParserInterface<T> {
  private data: Nullable<T> = null;

  constructor(public readonly content: string) { }

  public getData(): Nullable<T> {
    return this.data;
  }

  public parse() {
    try {
      this.data = JSON.parse(this.content);
    } catch (error) {
      console.log(TextFormatter.drawRed(error));
    }
  }
}
