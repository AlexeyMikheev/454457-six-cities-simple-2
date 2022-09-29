import { CommandType } from '../types/command-type.enum.js';
import { MockData } from '../types/mock-data.type.js';
import { CliCommandInterface } from './cli-command.interface.js';
import { get } from '../utils/api.js';
import OfferGenerator from '../common/offer-generator/offer-generator.js';
import { existsSync } from 'fs';
import { truncate } from 'fs/promises';
import OfferMapper from '../common/mapper/offer-mapper.js';
import FileWriter from '../common/file-writer/file-writer.js';

class GenerateCommand implements CliCommandInterface {
  public readonly name = CommandType.Generate;
  private initialData?: MockData;

  public async execute(...params: string[]): Promise<void> {
    const [count, filePath, url] = params;
    const offerCount = Number.parseInt(count, 10);

    this.initialData = await get<MockData>(url);

    if (this.initialData) {
      const offerGenerator = new OfferGenerator(this.initialData);
      const offerMapper = new OfferMapper();

      if (existsSync(filePath)) {
        await truncate(filePath);
      }

      const fileWriter = new FileWriter(filePath);

      for (let i = 0; i < offerCount; i++) {
        await fileWriter.writeFilePart(`${offerGenerator.generate(offerMapper)}\n`);
      }
    }
  }
}

export default GenerateCommand;
