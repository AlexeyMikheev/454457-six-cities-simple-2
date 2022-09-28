import { Offer } from '../../types/offer.type.js';
import { MapperInterface } from '../mapper/mapper.interface.js';

export interface OfferGeneratorInterface {
    generate(mapper: MapperInterface<Offer>): string;
}
