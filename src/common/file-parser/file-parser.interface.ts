import { Nullable } from '../../types/nullable-type.js';
import { MapperInterface } from '../mapper/mapper.interface.js';

export interface FileParserInterface<T> {
    readonly content: string;
    getData(): Nullable<T>;
    parse(mapper?: MapperInterface<T>): void;
}
export interface FileParserArrayInterface<T> {
    readonly content: string;
    getData(): Nullable<T>[];
    parse(mapper?: MapperInterface<T>): void;
}
