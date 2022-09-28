import { ConnectOptions } from "mongoose";

export interface DatabaseInterface {
    connect(uri: string, opts: ConnectOptions): Promise<void>;
    disconect(): Promise<void>
}