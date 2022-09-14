import EventEmitter from 'events';
import { createReadStream, readFileSync } from 'fs';
import { drawRed } from '../../utils/text.js';
import { FileReaderInterface } from './file-reader.interface.js';

export enum FileReaderEvents {
  OnLineRead = 'OnLineRead'
}

class FileReader extends EventEmitter implements FileReaderInterface<string> {
  private data?: string;

  private readFilePart(part: string, separator = '\n'): string {
    let index = part.indexOf(separator);

    if (index === -1) {
      return part;
    }

    const readyPart = part.slice(0, index);

    if (this.listenerCount(FileReaderEvents.OnLineRead)) {
      this.emit(FileReaderEvents.OnLineRead, readyPart);
    }

    part = part.slice(++index);

    return this.readFilePart(part);
  }

  constructor(
    public readonly path: string,
    private readonly encoding: BufferEncoding = 'utf-8',
    private readonly chunkSize = 1024) {
    super();
  }

  public getData() {
    return this.data;
  }

  public readFile() {
    try {
      this.data = readFileSync(this.path, this.encoding);
    } catch (error) {
      console.log(drawRed(error));
    }
  }

  public async readFileParts(separator = '\n'): Promise<void> {
    const stream = createReadStream(this.path, {
      highWaterMark: this.chunkSize,
      encoding: this.encoding
    });

    let temp = '';

    for await (const part of stream) {
      temp = this.readFilePart(temp + part.toString(), separator);
    }
  }
}

export default FileReader;
