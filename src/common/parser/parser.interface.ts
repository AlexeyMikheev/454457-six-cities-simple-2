import { Nullable } from '../../types/nullable-type.js';
import { MapperInterface } from '../mapper/mapper.interface.js';

export interface ParserStringToSingleInterface<T> {
    readonly content: string;
    getData(): Nullable<T>;
    parse(mapper?: MapperInterface<T>): void;
}

export interface ParserStringToArrayInterface<T> {
    readonly content: string;
    getData(): Nullable<T>[];
    parse(mapper?: MapperInterface<T>): void;
}

export interface ParserArrayToSingleInterface<T,C> {
    readonly content: string[];
    getData(): T;
    parse(mapper?: MapperInterface<C>): void;
}
