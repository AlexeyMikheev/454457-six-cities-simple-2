import { User } from './user-type.js';
import { City } from './city.enum.js';
import { OfferType } from './offer-type.enum.js';

export type Offer = {
    title: string;
    description: string;
    date: Date;
    city: City;
    preview: string;
    images: string[];
    isPremium: boolean;
    rating: number;
    type: OfferType;
    room: number;
    guest: number;
    price: number;
    features: string[];
    user: User;
    commentCount: number;
    position: [number, number];
}
