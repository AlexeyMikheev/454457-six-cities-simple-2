import { CliCommandInterface } from './cli-command.interface.js';
import TextFormatter from '../common/text-formatter.js';
import { CommandType } from '../types/command-type.enum.js';

const HELP_TEXT = (
  `Программа для подготовки данных для REST API сервера.
    Пример:
        main.js --<command> [arguments]
    Команды:
        --version:                   # выводит номер версии
        --${CommandType.Help.toLocaleLowerCase()}:                      # печатает этот текст
        --${CommandType.Import.toLocaleLowerCase()} <path>:             # импортирует данные из TSV
        --${CommandType.Generator.toLocaleLowerCase()} <n> <path> <url> # генерирует произвольное количество тестовых данных
    `);

export default class HelpCommand implements CliCommandInterface {
  public readonly name: CommandType = CommandType.Help;

  execute() {
    console.log(TextFormatter.drawBlue(HELP_TEXT));
  }
}
