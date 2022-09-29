import TSVParser from '../common/parser/tsv-parser.js';
import FileReader, { FileReaderEvents } from '../common/file-reader/file-reader.js';
import OfferMapper from '../common/mapper/offer-mapper.js';
import { CommandType } from '../types/command-type.enum.js';
import { Offer } from '../types/offer.type.js';
import { CliCommandInterface } from './cli-command.interface.js';
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
import { getOpts, getUri } from '../utils/db.js';
import { OfferServiceInterface } from '../modules/offer/offer-service.interface.js';
import OfferService from '../modules/offer/offer-service.js';
import { OfferModel } from '../modules/offer/offer.entity.js';
import { CITY_POSITION } from '../types/city.enum.js';

class ImportCommand implements CliCommandInterface {
  public readonly name: CommandType = CommandType.Import;
  private databaseService!: DatabaseInterface;
  private userService!: UserServiceInterface;
  private offerService!: OfferServiceInterface;
  private logger: LoggerInterface;
  private config: ConfigInterface;

  constructor() {
    this.handleLineRead = this.handleLineRead.bind(this);
    this.handleLinesRead = this.handleLinesRead.bind(this);

    this.logger = new LoggerService();
    this.userService = new UserService(UserModel);
    this.offerService = new OfferService(OfferModel);
    this.config = new ConfigService(this.logger);
    this.databaseService = new DatabaseService(this.logger, this.config);
  }

  private async handleLineRead(line: string, resolve: () => void) {
    if (line) {
      const parser = new TSVParser<Offer>(line);
      parser.parse(new OfferMapper());

      const data = parser.getData();

      if (data) {
        try {
          const user = await this.userService.findOrCreate(data.user, this.config.get('SALT'));

          const offer = await this.offerService.create({
            title: data.title,
            description: data.description,
            date: data.date,
            city: data.city,
            preview: data.preview,
            images: data.images,
            isPremium: data.isPremium,
            rating: data.rating,
            type: data.type,
            room: data.room,
            guest: data.guest,
            price: data.price,
            features: data.features,
            userId: user?.id,
            position: CITY_POSITION[data.city]
          });

          if (offer?.id) {
            this.logger.info(`Offer created ${offer.id}`);
          }

        } catch (error) {
          this.logger.error(getErrorMessage(error));
        }
        finally {
          resolve();
        }
      }
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
    const uri = getUri(this.config.get('DB_HOST'), this.config.get('DB_PORT'), this.config.get('DB_NAME'));
    const opts = getOpts(this.config.get('DB_USER'), this.config.get('DB_PASSWORD'), 'admin');

    try {
      this.databaseService.connect(uri, opts);
      await this.readFile(path);
    } catch (e) {
      this.logger.error(getErrorMessage(e));
    } finally {
      this.databaseService.disconect();
    }
  }
}

export default ImportCommand;
