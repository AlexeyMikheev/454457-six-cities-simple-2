import TSVParser from '../common/parser/tsv-parser.js';
import FileReader, { FileReaderEvents } from '../common/file-reader/file-reader.js';
import CityTypeMapper from '../common/mapper/city-type-mapper.js';
import OfferMapper from '../common/mapper/offer-mapper.js';
import OfferTypeMapper from '../common/mapper/offer-type-mapper.js';
import { CommandType } from '../types/command-type.enum.js';
import { Offer } from '../types/offer.type.js';
import { CliCommandInterface } from './cli-command.interface.js';
import PositionMapper from '../common/mapper/position-mapper.js';
import AuthorMapper from '../common/mapper/author-mapper.js';

class ImportCommand implements CliCommandInterface {
  public readonly name: CommandType = CommandType.Import;

  private handleLineRead(line: string) {
    if (line) {
      const parser = new TSVParser<Offer>(line);
      parser.parse(new OfferMapper(
        new CityTypeMapper,
        new OfferTypeMapper,
        new PositionMapper,
        new AuthorMapper
      ));

      const data = parser.getData();

      console.log(data);
    }
  }

  private readFile(path: string) {
    const fileReader = new FileReader(path);
    fileReader.on(FileReaderEvents.OnLineRead, this.handleLineRead);
    fileReader.readFileParts();
  }

  execute(path: string) {
    this.readFile(path);
  }
}

export default ImportCommand;
