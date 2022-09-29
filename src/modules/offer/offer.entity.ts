import typegoose, { getModelForClass, defaultClasses, Ref } from '@typegoose/typegoose';
import { Feature } from '../../types/feature.enum.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { UserEntity } from '../user/user.entity.js';

const { prop, modelOptions } = typegoose;

export interface OfferEntity extends defaultClasses.Base { }

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})

export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({ required: true, minlength: 10, maxlength: 100, default: '' })
  public title!: string;

  @prop({ required: true, minlength: 10, maxlength: 100, default: '' })
  public description!: string;

  @prop({ required: true })
  public date!: Date;

  @prop({ required: true })
  public preview!: string;

  @prop({ required: true, type: String })
  public images!: string[];

  @prop({ required: true })
  public isPremium!: boolean;

  @prop({ min: 1, max: 5 })
  public rating!: number;

  @prop({ required: true, type: String, enum: OfferType })
  public type!: OfferType;

  @prop({ min: 1, max: 8 })
  public room!: number;

  @prop({ min: 1, max: 10 })
  public guest!: number;

  @prop({ min: 100, max: 100000 })
  public price!: number;

  @prop({ required: true, type: String, enum: Feature })
  public features!: Feature[];

  @prop({ required: true, type: Number })
  public position!: [number, number];

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;
}

export const OfferModel = getModelForClass(OfferEntity);
