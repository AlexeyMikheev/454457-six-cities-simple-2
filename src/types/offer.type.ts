import { Author } from './author-type.js';
import { CityType } from './city-type.enum.js';
import { OfferType } from './offer-type.enum.js';

export type Offer = {
    name: string;
    description: string;
    date: Date;
    city: CityType;
    preview: string;
    images: string[];
    isPremium: boolean;
    rating: number;
    type: OfferType;
    room: number;
    guest: number;
    price: number;
    features: string[];
    author: Author;
    commentCount: number;
    position: [number, number];
}
