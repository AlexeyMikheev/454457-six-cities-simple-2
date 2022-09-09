import { Nullable } from '../../types/nullable-type.js';
import { MapperInterface } from '../mapper/mapper.interface.js';

export interface ParserJsonInterface<T> {
    readonly content: string;
    getData(): Nullable<T>;
    parse(mapper?: MapperInterface<T>): void;
}

export interface ParserTSVInterface<T> {
    readonly content: string;
    getData(): Nullable<T>[];
    parse(mapper?: MapperInterface<T>): void;
}

export interface ParserCommandInterface<T,M> {
    readonly content: string[];
    getData(): T;
    parse(mapper?: MapperInterface<M>): void;
}
