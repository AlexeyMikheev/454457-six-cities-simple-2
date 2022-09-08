import { CityType } from './city-type.enum.js';

export type Offer = {
    name: string;
    description: string;
    date: Date;
    city: CityType | null;
    images: string[];
}
