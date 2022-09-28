import { CliCommandInterface } from './cli-command.interface.js';
import { drawBlue } from '../utils/text.js';
import { CommandType } from '../types/command-type.enum.js';

const HELP_TEXT = (
  `Программа для подготовки данных для REST API сервера.
    Пример:
        main.js --<command> [arguments]
    Команды:
        --version:                   # выводит номер версии
        --${CommandType.Help.toLocaleLowerCase()}:                      # печатает этот текст
        --${CommandType.Import.toLocaleLowerCase()} <path>:             # импортирует данные из TSV
        --${CommandType.Generate.toLocaleLowerCase()} <n> <path> <url> # генерирует произвольное количество тестовых данных
    `);

class HelpCommand implements CliCommandInterface {
  public readonly name: CommandType = CommandType.Help;

  async execute() {
    console.log(drawBlue(HELP_TEXT));
  }
}

export default HelpCommand;
