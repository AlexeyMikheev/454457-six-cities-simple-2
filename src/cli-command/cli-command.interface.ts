import { CommandType } from '../types/command-type.enum.js';

export interface CliCommandInterface {
    readonly name: CommandType;
    execute(...params: string[]): void;
}
