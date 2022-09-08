import TextColor from '../text-color.js';
import { FileParserInterface, ContentResult } from './file-parser.interface.js';


export default class JsonParser<T> implements FileParserInterface<T> {
  private data: ContentResult<T> = null;

  constructor(public readonly content: string) { }

  public getData(): ContentResult<T> {
    return this.data;
  }

  public parse() {
    try {
      this.data = JSON.parse(this.content);
    } catch (error) {
      console.log(TextColor.Red(error));
    }
  }
}
