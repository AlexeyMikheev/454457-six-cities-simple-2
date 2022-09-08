import TextFormatter from '../../utils/text-formatter.js';
import { Offer } from '../../types/offer.type.js';
import CityTypeMapper from './city-type-mapper.js';
import { MapperInterface } from './mapper.interface.js';

export default class OfferMapper implements MapperInterface<Offer> {
  public mapToItem(values: string[]): Offer {
    const [
      name,
      description,
      date,
      city,
      images
    ] = values;

    return {
      name,
      description,
      date: new Date(date),
      city: CityTypeMapper.mapToCity(city),
      images: TextFormatter.stringToArray(images)
    };
  }
}
