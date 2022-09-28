import { createWriteStream, WriteStream } from 'fs';
import { FileWriterInterface } from './file-witer.interface';

class FileWriter implements FileWriterInterface {
  private stream: WriteStream;

  constructor(public readonly fileName: string,
    private readonly flags: string = 'w',
    private readonly encoding: BufferEncoding = 'utf-8',
    private readonly chunkSize = 512) {

    this.stream = createWriteStream(this.fileName, {
      flags: this.flags,
      encoding: this.encoding,
      highWaterMark: this.chunkSize,
      autoClose: true
    });
  }

  public async writeFilePart(data: string): Promise<void> {
    if (!this.stream.write(data)) {
      return new Promise((resolve) => {
        this.stream.once('drain', () => resolve());
      });
    }

    return Promise.resolve();
  }
}

export default FileWriter;
