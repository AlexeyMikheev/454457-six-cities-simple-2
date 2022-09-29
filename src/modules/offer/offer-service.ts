import { DocumentType, types } from '@typegoose/typegoose';
import { BeAnObject } from '@typegoose/typegoose/lib/types.js';
import { inject } from 'inversify';
import { INJECT_KEYS } from '../../types/inject-type.enum.js';
import CreateOfferDto from './dto/create-offer.dto.js';
import { OfferServiceInterface } from './offer-service.interface.js';
import { OfferEntity } from './offer.entity.js';

class OfferService implements OfferServiceInterface {
  constructor(@inject(INJECT_KEYS.UserModel) private readonly offerModel: types.ModelType<OfferEntity>) { }

  async create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity, BeAnObject>> {
    const result = await this.offerModel.create(dto);

    return result;
  }

  async findById(offerId: string): Promise<DocumentType<OfferEntity, BeAnObject> | null> {
    return this.offerModel.findById(offerId).exec();
  }
}

export default OfferService;
