export interface FileReaderInterface<T> {
    readonly path: string;
    getData(): T | undefined;
    readFile(): void;
}
