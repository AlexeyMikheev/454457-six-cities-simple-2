import { Offer } from '../../types/offer.type.js';
import { MapperInterface } from './mapper.interface.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { City } from '../../types/city.enum.js';
import { Position } from '../../types/position-type.js';
import { User } from '../../types/user-type.js';
import { Feature } from '../../types/feature.enum.js';

class OfferMapper implements MapperInterface<Offer> {
  constructor(
    private cityMapper: MapperInterface<City>,
    private offerTypeMapper: MapperInterface<OfferType>,
    private positionMapper: MapperInterface<Position>,
    private userMapper: MapperInterface<User>,
    private featureMapper: MapperInterface<Feature[]>,
    private readonly separator = '\t',
  ) { }

  public mapToModel(value: string) {
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
      user,
      commentCount,
      position
    ] = values;

    return {
      title,
      description,
      date: new Date(date),
      city: this.cityMapper.mapToModel(city),
      preview,
      images: images?.split(';'),
      isPremium: !!isPremium,
      rating: Number.parseInt(rating, 10),
      type: this.offerTypeMapper.mapToModel(type),
      room: Number.parseInt(room, 10),
      guest: Number.parseInt(guest, 10),
      price: Number.parseInt(price, 10),
      features: this.featureMapper.mapToModel(features),
      user: this.userMapper.mapToModel(user),
      commentCount: Number.parseInt(commentCount, 10),
      position: this.positionMapper.mapToModel(position) || [0, 0]
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
      this.userMapper.mapToString(data.user),
      data.commentCount,
      this.positionMapper.mapToString(data.position),
    ].join(this.separator);
  }
}

export default OfferMapper;
