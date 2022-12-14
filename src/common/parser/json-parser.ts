import { drawRed } from '../../utils/text.js';

class JsonParser<T>  {
  private data?: T;

  constructor(public readonly content: string) { }

  public getData() {
    return this.data;
  }

  public parse() {
    try {
      this.data = JSON.parse(this.content);
    } catch (error) {
      console.log(drawRed(error));
    }
  }
}

export default JsonParser;
