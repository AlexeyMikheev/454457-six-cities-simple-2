import { CliCommandInterface } from './cli-command.interface.js';
import TextColor from '../utils/text-color.js';
import FileReader from '../utils/file-reader.js';
import JsonParse from '../utils/json-parser.js';

const EMPTY_VERSION = 'Не определена';

export default class VersionCommand implements CliCommandInterface {
  public readonly name: string = '--version';

  private readVersion(): string {
    let version: string = EMPTY_VERSION;
    const file = FileReader.readeFileSync('./package.json');

    if(file) {
      const json = JsonParse.parseJson<{ version:string }>(file);

      version = json?.version || EMPTY_VERSION;
    }

    return version;
  }

  execute() {
    try{
      console.log(TextColor.Green(`Версия: ${this.readVersion()}`));
    } catch(error) {
      console.log(TextColor.Red(error));
    }
  }
}
