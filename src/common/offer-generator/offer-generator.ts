import { User } from '../../types/user-type.js';
import { City } from '../../types/city.enum.js';
import { GuestLimit } from '../../types/guest-limit.enum.js';
import { MockData } from '../../types/mock-data.type.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { Offer } from '../../types/offer.type.js';
import { Position } from '../../types/position-type.js';
import { PriceLimit } from '../../types/price-limit.enum.js';
import { RatingLimit } from '../../types/rating-limit.enum.js';
import { RoomLimit } from '../../types/room-limit.enum.js';
import { getRandomItem, getRandomItems, getRandomValue } from '../../utils/random.js';
import { MapperInterface } from '../mapper/mapper.interface.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';
import { Feature } from '../../types/feature.enum.js';

class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) { }

  public generate(mapper: MapperInterface<Offer>): string {
    const data: Offer = {
      title: getRandomItem<string>(this.mockData.titles),
      description: getRandomItem<string>(this.mockData.descriptions),
      date: new Date(),
      city: getRandomItem<City>(this.mockData.cities as City[]),
      preview: getRandomItem<string>(this.mockData.previews),
      images: getRandomItems<string>(this.mockData.images),
      isPremium: Boolean(getRandomValue(0, 1)),
      rating: getRandomValue(RatingLimit.Min, RatingLimit.Max, 1),
      type: getRandomItem<OfferType>(this.mockData.types as OfferType[]),
      room: getRandomValue(RoomLimit.Min, RoomLimit.Max),
      guest: getRandomValue(GuestLimit.Min, GuestLimit.Max),
      price: getRandomValue(PriceLimit.Min, PriceLimit.Max),
      features: getRandomItems<Feature>(this.mockData.features),
      user: getRandomItem<User>(this.mockData.authors),
      position: getRandomItem<Position>(this.mockData.positions),
      commentCount: getRandomValue(5, 10)
    };

    return mapper.mapToString(data);
  }
}

export default OfferGenerator;
