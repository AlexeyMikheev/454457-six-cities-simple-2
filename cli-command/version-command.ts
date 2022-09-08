import { readFileSync } from 'fs';
import { CliCommandInterface } from './cli-command.interface.js';
import TextColor from '../utils/text-color.js';

export default class VersionCommand implements CliCommandInterface {
  public readonly name: string = '--version';

  private readVersion(): string {
    const fileContent = readFileSync('./package.json','utf-8');
    const jsonConten = JSON.parse(fileContent);

    return jsonConten?.version;
  }

  execute() {
    try{
      console.log(TextColor.Green(`Версия: ${this.readVersion()}`));
    } catch(error) {
      console.log(TextColor.Red(error));
    }
  }
}
