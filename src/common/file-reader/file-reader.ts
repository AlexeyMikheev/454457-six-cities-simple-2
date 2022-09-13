import { readFileSync } from 'fs';
import { drawRed } from '../utils/text-formatter.js';
import { FileReaderInterface } from './file-reader.interface.js';

export default class FileReader implements FileReaderInterface<string> {
  private data?: string;

  constructor(public readonly path: string) { }

  public getData() {
    return this.data;
  }

  public readFile() {
    try {
      this.data = readFileSync(this.path, 'utf-8');
    } catch (error) {
      console.log(drawRed(error));
    }
  }
}
