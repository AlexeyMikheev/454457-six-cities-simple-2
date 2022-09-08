import { Nullable } from '../../types/nullable-type.js';

export interface FileReaderInterface<T> {
    readonly path: string;
    getData(): Nullable<T>;
    readFile(): void;
}
