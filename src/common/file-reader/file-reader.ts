import { readFileSync } from 'fs';
import { Nullable } from '../../types/nullable-type.js';
import TextFormatter from '../text-formatter.js';
import { FileReaderInterface } from './file-reader.interface.js';


export default class FileReader implements FileReaderInterface<string> {
  private data: Nullable<string> = null;

  constructor(public readonly path: string) { }

  public getData(): Nullable<string> {
    return this.data;
  }

  public readFile() {
    try {
      this.data = readFileSync(this.path, 'utf-8');
    } catch (error) {
      console.log(TextFormatter.drawRed(error));
    }
  }
}
