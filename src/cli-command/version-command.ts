import { CliCommandInterface } from './cli-command.interface.js';
import { drawGreen } from '../utils/text.js';
import FileReader from '../common/file-reader/file-reader.js';
import JsonParser from '../common/parser/json-parser.js';
import { CommandType } from '../types/command-type.enum.js';

const EMPTY_VERSION = 'Не определена';

class VersionCommand implements CliCommandInterface {
  public readonly name: CommandType.Version = CommandType.Version;

  private readVersion(): string {
    let version: string = EMPTY_VERSION;

    const fileReader = new FileReader('./package.json');
    fileReader.readFile();
    const file = fileReader.getData();

    if (file) {
      const jsonParser = new JsonParser<{ version: string }>(file);
      jsonParser.parse();
      const json = jsonParser.getData();

      version = json?.version || EMPTY_VERSION;
    }

    return version;
  }

  execute() {
    console.log(drawGreen(`Версия: ${this.readVersion()}`));
  }
}

export default VersionCommand;
