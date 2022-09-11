import TSVParserM from '../common/parser/tsv-parser.js';
import FileReader from '../common/file-reader/file-reader.js';
import CityTypeMapper from '../common/mapper/city-type-mapper.js';
import OfferMapper from '../common/mapper/offer-mapper.js';
import OfferTypeMapper from '../common/mapper/offer-type-mapper.js';
import { CommandType } from '../types/command-type.enum.js';
import { Offer } from '../types/offer.type.js';
import { CliCommandInterface } from './cli-command.interface.js';
import PositionMapper from '../common/mapper/position-mapper.js';
import AuthorMapper from '../common/mapper/author-mapper.js';

export default class ImportCommand implements CliCommandInterface {
  public readonly name: CommandType = CommandType.Import;

  private readFile(path: string) {
    let data;

    const fileReader = new FileReader(path);
    fileReader.readFile();
    const file = fileReader.getData();

    if (file) {
      const parser = new TSVParserM<Offer>(file);
      parser.parse(new OfferMapper(
        new CityTypeMapper,
        new OfferTypeMapper,
        new PositionMapper,
        new AuthorMapper
      ));

      data = parser.getData();
    }

    return data;
  }

  execute(path: string) {
    console.log(this.readFile(path));
  }
}
