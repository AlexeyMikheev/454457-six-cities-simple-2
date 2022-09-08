import { MapperInterface } from '../mapper/mapper.interface.js';

export type ContentResult<T> = T | null;

export interface FileParserInterface<T> {
    readonly content: string;
    getData(): ContentResult<T>;
    parse(mapper?: MapperInterface<T>): void;
}
export interface FileParserArrayInterface<T> {
    readonly content: string;
    getData(): ContentResult<T[]>;
    parse(mapper?: MapperInterface<T>): void;
}
