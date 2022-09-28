export interface DatabaseInterface {
    connect(): Promise<void>;
    disconect(): Promise<void>
}
