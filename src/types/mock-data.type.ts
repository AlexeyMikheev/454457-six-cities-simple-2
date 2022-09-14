import { Author } from './author-type.js';
import { Position } from './position-type.js';

export type MockData = {
    titles: string[];
    descriptions: string[];
    cities: string[];
    previews: string[];
    images: string[];
    types: string[];
    features: string[];
    authors: Author[];
    positions: Position[];
}
