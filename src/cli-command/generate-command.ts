import { CommandType } from '../types/command-type.enum.js';
import { MockData } from '../types/mock-data.type.js';
import { CliCommandInterface } from './cli-command.interface.js';
import { get } from '../utils/api.js';
import OfferGenerator from '../common/offer-generator/offer-generator.js';
import { appendFile } from 'fs/promises';

class GenerateCommand implements CliCommandInterface {
  public readonly name = CommandType.Generate;
  private initialData?: MockData;

  public async execute(...params: string[]): Promise<void> {
    const [count, filePath, url] = params;
    const offerCount = Number.parseInt(count, 10);

    this.initialData = await get<MockData>(url);

    if (this.initialData) {
      const offerGenerator = new OfferGenerator(this.initialData);

      for (let i = 0; i < offerCount; i++) {
        await appendFile(filePath, `${offerGenerator.generate()}\n`);
      }
    }
  }
}

export default GenerateCommand;
