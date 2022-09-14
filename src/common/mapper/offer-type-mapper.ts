import { OfferType } from '../../types/offer-type.enum.js';
import { MapperInterface } from './mapper.interface.js';

class OfferTypeMapper implements MapperInterface<OfferType> {
  public mapToItem(data: string) {
    switch (data?.toLowerCase()) {
      case OfferType.Apartment: return OfferType.Apartment;
      case OfferType.House: return OfferType.House;
      case OfferType.Room: return OfferType.Room;
      case OfferType.Hotel: return OfferType.Hotel;
      default: throw new Error(`Значение ${data} не определено в OfferType`);
    }
  }
}

export default OfferTypeMapper;
