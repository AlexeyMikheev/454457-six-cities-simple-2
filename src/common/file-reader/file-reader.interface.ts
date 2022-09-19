export interface FileReaderInterface<T> {
    readonly path: string;
    getData(): T | undefined;
    readFile(): void;
    readFileParts(separator: string): Promise<void>;
}
