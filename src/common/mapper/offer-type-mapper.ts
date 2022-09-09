import { Nullable } from '../../types/nullable-type.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { MapperInterface } from './mapper.interface.js';

export default class OfferTypeMapper implements MapperInterface<OfferType> {
  public mapToItem(data: string): Nullable<OfferType> {
    switch(data.toLowerCase()){
      case OfferType.Apartment: return OfferType.Apartment;
      case OfferType.House: return OfferType.House;
      case OfferType.Room: return OfferType.Room;
      case OfferType.Hotel: return OfferType.Hotel;
      default: return null;
    }
  }
}
