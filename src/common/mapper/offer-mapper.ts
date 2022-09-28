import { Offer } from '../../types/offer.type.js';
import { MapperInterface } from './mapper.interface.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { CityType } from '../../types/city-type.enum.js';
import { Position } from '../../types/position-type.js';
import UserDto from '../../modules/user/dto/user.dto.js';
import { AnyArray } from 'mongoose';

class OfferMapper implements MapperInterface<Offer> {
  constructor(
    private cityMapper: MapperInterface<CityType>,
    private offerTypeMapper: MapperInterface<OfferType>,
    private positionMapper: MapperInterface<Position>,
    private authorMapper: MapperInterface<UserDto>,
    private readonly separator = '\t',
  ) { }

  public mapToItem(value: string) {
    const values: string[] = value.split(this.separator);

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

  public mapToString(data: Offer): string {
    return [
      data.title,
      data.description,
      data.date.toISOString(),
      this.cityMapper.mapToString(data.city),
      data.preview,
      data.images.join(';'),
      data.isPremium,
      data.rating,
      this.offerTypeMapper.mapToString(data.type),
      data.room,
      data.guest,
      data.price,
      data.features.join(';'),
      this.authorMapper.mapToString(data.author as any),
      data.commentCount,
      this.positionMapper.mapToString(data.position),
    ].join(this.separator);
  }
}

export default OfferMapper;
