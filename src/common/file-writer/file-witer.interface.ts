export interface FileWriterInterface {
    readonly fileName: string;
    writeFilePart(data: string): Promise<void>;
}
