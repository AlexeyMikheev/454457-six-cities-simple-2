import { readFileSync } from 'fs';
import TextColor from '../text-color.js';
import { FileReaderInterface, FileResult } from './file-reader.interface.js';


export default class FileReader implements FileReaderInterface {
  private data: FileResult = null;

  constructor(public readonly path: string) { }

  public getData(): FileResult {
    return this.data;
  }

  public readFile() {
    try {
      this.data = readFileSync(this.path, 'utf-8');
    } catch (error) {
      console.log(TextColor.Red(error));
    }
  }
}
