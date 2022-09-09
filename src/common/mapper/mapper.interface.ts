import { Nullable } from '../../types/nullable-type.js';

export interface MapperInterface<T> {
    mapToItem(data: string): Nullable<T>;
}
