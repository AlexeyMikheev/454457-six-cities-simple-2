import { Nullable } from '../../types/nullable-type.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { MapperInterface } from './mapper.interface.js';

export default class OfferTypeMapper implements MapperInterface<OfferType> {
  public mapToItem(data: string): Nullable<OfferType> {
    const cityTypeKey = Object.keys(OfferType).find((key) => key.toLowerCase() === data.toLowerCase());

    return cityTypeKey ? OfferType[cityTypeKey as OfferType] : null;
  }
}
