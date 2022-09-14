import { MockData } from '../../types/mock-data.type.js';
import { getRandomItems } from '../../utils/random.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';

class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const categories = getRandomItems<string>(this.mockData.cities).join(';');

    return [
      categories
    ].join('\t');
  }
}

export default OfferGenerator;
