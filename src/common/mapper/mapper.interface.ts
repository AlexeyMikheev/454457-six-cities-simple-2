import { Nullable } from '../../types/nullable-type.js';

export interface MapperInterface<T> {
    mapToItem(values: string): Nullable<T>;
}
