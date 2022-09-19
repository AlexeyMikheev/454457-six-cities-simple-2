import { Author } from '../../types/author-type.js';
import { CityType } from '../../types/city-type.enum.js';
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

class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) { }

  public generate(mapper: MapperInterface<Offer>): string {
    const data: Offer = {
      title: getRandomItem<string>(this.mockData.titles),
      description: getRandomItem<string>(this.mockData.descriptions),
      date: new Date(),
      city: getRandomItem<CityType>(this.mockData.cities as CityType[]),
      preview: getRandomItem<string>(this.mockData.previews),
      images: getRandomItems<string>(this.mockData.images),
      isPremium: Boolean(getRandomValue(0, 1)),
      rating: getRandomValue(RatingLimit.Min, RatingLimit.Max, 1),
      type: getRandomItem<OfferType>(this.mockData.types as OfferType[]),
      room: getRandomValue(RoomLimit.Min, RoomLimit.Max),
      guest: getRandomValue(GuestLimit.Min, GuestLimit.Max),
      price: getRandomValue(PriceLimit.Min, PriceLimit.Max),
      features: getRandomItems<string>(this.mockData.features),
      author: getRandomItem<Author>(this.mockData.authors),
      position: getRandomItem<Position>(this.mockData.positions),
      commentCount: getRandomValue(5, 10)
    };

    return mapper.mapToString(data);
  }
}

export default OfferGenerator;
