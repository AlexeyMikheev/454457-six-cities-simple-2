import TSVParserM from '../common/file-parser/tsv-parser.js';
import FileReader from '../common/file-reader/file-reader.js';
import CityTypeMapper from '../common/mapper/city-type-mapper.js';
import OfferMapper from '../common/mapper/offer-mapper.js';
import OfferTypeMapper from '../common/mapper/offer-type-mapper.js';
import { CommandType } from '../types/command-type.enum.js';
import { Nullable } from '../types/nullable-type.js';
import { Offer } from '../types/offer.type.js';
import { CliCommandInterface } from './cli-command.interface.js';

export default class ImportCommand implements CliCommandInterface {
  public readonly name: CommandType = CommandType.Import;

  private readFile() {
    let data: Nullable<Offer>[] = [];

    const fileReader = new FileReader('./mocks/mock-data.tsv');
    fileReader.readFile();
    const file = fileReader.getData();

    if (file) {
      const parser = new TSVParserM<Offer>(file);
      parser.parse(new OfferMapper(new CityTypeMapper(), new OfferTypeMapper()));

      data = parser.getData();
    }

    return data;
  }

  execute() {
    console.log(this.readFile());
  }
}
