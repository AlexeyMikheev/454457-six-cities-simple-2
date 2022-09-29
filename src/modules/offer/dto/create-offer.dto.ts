import { City } from '../../../types/city.enum.js';
import { Feature } from '../../../types/feature.enum.js';
import { OfferType } from '../../../types/offer-type.enum.js';

class CreateOfferDto {
  public title!: string;
  public description!: string;
  public date!: Date;
  public city!: City;
  public preview!: string;
  public images!: string[];
  public isPremium!: boolean;
  public rating!: number;
  public userId!: string;
  public type!: OfferType;
  public room!: number;
  public guest!: number;
  public price!: number;
  public features!: Feature[];
  public position!: [number, number];
}

export default CreateOfferDto;
