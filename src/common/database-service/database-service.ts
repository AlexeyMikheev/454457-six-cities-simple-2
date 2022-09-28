import { inject, injectable } from "inversify";
import mongoose, { ConnectOptions } from "mongoose";
import { INJECT_KEYS } from "../../types/inject-type.enum.js";
import { LoggerInterface } from "../logger-service/logger-service.interface.js";
import { DatabaseInterface } from "./database.interface.js";

@injectable()
class DatabseService implements DatabaseInterface {
    constructor(@inject(INJECT_KEYS.LoggerInterface) private logger: LoggerInterface) { }
    async connect(url: string, opts: ConnectOptions): Promise<void> {
        this.logger.info('Try to connect to Mongo DB...')
        await mongoose.connect(url, opts);
        this.logger.info('Database connection established')
    }

    async disconect(): Promise<void> {
        mongoose.disconnect();
        this.logger.info('Database connection closed');
    }
}

export default DatabseService;
