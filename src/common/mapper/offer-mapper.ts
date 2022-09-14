import { Offer } from '../../types/offer.type.js';
import { MapperInterface } from './mapper.interface.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { CityType } from '../../types/city-type.enum.js';
import { Position } from '../../types/position-type.js';
import { Author } from '../../types/author-type.js';

class OfferMapper implements MapperInterface<Offer> {
  constructor(
    private cityMapper: MapperInterface<CityType>,
    private offerTypeMapper: MapperInterface<OfferType>,
    private positionMapper: MapperInterface<Position>,
    private authorMapper: MapperInterface<Author>,
  ) { }

  public mapToItem(value: string) {
    const values: string[] = value.split('\t');

    const [
      title,
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
      features,
      author,
      commentCount,
      position
    ] = values;

    return {
      title,
      description,
      date: new Date(date),
      city: this.cityMapper.mapToItem(city),
      preview,
      images: images?.split(';'),
      isPremium: !!isPremium,
      rating: Number.parseInt(rating, 10),
      type: this.offerTypeMapper.mapToItem(type),
      room: Number.parseInt(room, 10),
      guest: Number.parseInt(guest, 10),
      price: Number.parseInt(price, 10),
      features: features?.split(';'),
      author: this.authorMapper.mapToItem(author),
      commentCount: Number.parseInt(commentCount, 10),
      position: this.positionMapper.mapToItem(position) || [0, 0]
    };
  }
}

export default OfferMapper;
