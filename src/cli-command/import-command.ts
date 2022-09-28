import TSVParser from '../common/parser/tsv-parser.js';
import FileReader, { FileReaderEvents } from '../common/file-reader/file-reader.js';
import OfferMapper from '../common/mapper/offer-mapper.js';
import { CommandType } from '../types/command-type.enum.js';
import { Offer } from '../types/offer.type.js';
import { CliCommandInterface } from './cli-command.interface.js';
import CityTypeMapper from '../common/mapper/city-type-mapper.js';
import OfferTypeMapper from '../common/mapper/offer-type-mapper.js';
import PositionMapper from '../common/mapper/position-mapper.js';
import UserMapper from '../common/mapper/user-mapper.js';
import { DatabaseInterface } from '../common/database-service/database.interface.js';
import { UserServiceInterface } from '../modules/user/user-service.interface.js';
import UserService from '../modules/user/user.service.js';
import { LoggerInterface } from '../common/logger-service/logger-service.interface.js';
import LoggerService from '../common/logger-service/logger.service.js';
import { UserModel } from '../modules/user/user.entity.js';
import DatabaseService from '../common/database-service/database-service.js';
import { ConfigInterface } from '../common/config-service/config.interface.js';
import ConfigService from '../common/config-service/config.service.js';
import { getErrorMessage } from '../utils/common.js';

class ImportCommand implements CliCommandInterface {
  public readonly name: CommandType = CommandType.Import;
  private databaseService!: DatabaseInterface;
  private userService!: UserServiceInterface;
  private logger: LoggerInterface;
  private config: ConfigInterface;

  constructor() {
    this.handleLineRead = this.handleLineRead.bind(this);
    this.handleLinesRead = this.handleLinesRead.bind(this);

    this.logger = new LoggerService();
    this.userService = new UserService(this.logger, UserModel);
    this.config = new ConfigService(this.logger);
    this.databaseService = new DatabaseService(this.logger, this.config);
  }

  private async handleLineRead(line: string) {
    if (line) {
      const parser = new TSVParser<Offer>(line);
      parser.parse(new OfferMapper(
        new CityTypeMapper(),
        new OfferTypeMapper(),
        new PositionMapper(),
        new UserMapper()
      ));

      const data = parser.getData();

      if (data?.author) {
        this.userService.findOrCreate({ name: 'test' } as any, this.config.get('SALT'));
        // resolve();
      }

      console.log(data);
    }
  }

  private handleLinesRead() {
    console.log('handleLinesRead');
  }

  private async readFile(path: string) {
    const fileReader = new FileReader(path);
    fileReader.on(FileReaderEvents.OnLineRead, this.handleLineRead);
    fileReader.on(FileReaderEvents.OnLinesRead, this.handleLinesRead);
    await fileReader.readFileParts();
  }

  async execute(path: string) {
    try {
      this.databaseService.connect();
      this.userService.findOrCreate({ name: 'test' } as any, '123');
      // await this.readFile(path);
      this.databaseService.disconect();
    } catch (e) {
      this.logger.error(getErrorMessage(e));
    }
  }
}

export default ImportCommand;
