export type FileResult = string | null;

export interface FileReaderInterface {
    readonly path: string;
    getData(): FileResult;
    readFile(): void;
}
