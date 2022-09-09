import TextFormatter from '../text-formatter.js';
import { Offer } from '../../types/offer.type.js';
import { MapperInterface } from './mapper.interface.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { CityType } from '../../types/city-type.enum.js';

export default class OfferMapper implements MapperInterface<Offer> {
  constructor(private cityMapper: MapperInterface<CityType>, private offerTypeMapper: MapperInterface<OfferType>) { }

  public mapToItem(value: string): Offer {
    const values: string[] = TextFormatter.stringToArray(value, '\t');

    const [
      name,
      description,
      date,
      city,
      preview,
      images,
      isPremium,
      rating,
      type,
      room,
      guest,
      price,
    ] = values;

    return {
      name,
      description,
      date: new Date(date),
      city: this.cityMapper.mapToItem(city),
      preview,
      images: TextFormatter.stringToArray(images, ';'),
      isPremium: !!isPremium,
      rating: Number.parseInt(rating, 10),
      type: this.offerTypeMapper.mapToItem(type),
      room: Number.parseInt(room, 10),
      guest: Number.parseInt(guest, 10),
      price: Number.parseInt(price, 10),
    };
  }
}
