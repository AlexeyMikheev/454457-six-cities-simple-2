import { User } from './user-type.js';
import { Position } from './position-type.js';
import { Feature } from './feature.enum.js';
import { City } from './city.enum.js';

export type MockData = {
    titles: string[];
    descriptions: string[];
    cities: City[];
    previews: string[];
    images: string[];
    types: string[];
    features: Feature[];
    authors: User[];
    positions: Position[];
}
