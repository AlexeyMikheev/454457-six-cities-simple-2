import { MockData } from '../../types/mock-data.type.js';
import { getRandomItem } from '../../utils/random.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';

class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) { }

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const date = new Date().toISOString();
    const city = getRandomItem<string>(this.mockData.cities);

    return [
      title,
      description,
      date,
      city
    ].join('\t');
  }
}

export default OfferGenerator;
