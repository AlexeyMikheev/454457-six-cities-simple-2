import { CityType } from './city-type.enum.js';
import { Nullable } from './nullable-type.js';
import { OfferType } from './offer-type.enum.js';

export type Offer = {
    name: string;
    description: string;
    date: Date;
    city: Nullable<CityType>;
    preview: string;
    images: string[];
    isPremium: boolean;
    rating: number;
    type: Nullable<OfferType>;
    room: number;
    guest: number;
    price: number;
    features: string[];
    author: string;
    commentCount: number;
    position: [number, number];
}
