import { CliCommandInterface } from './cli-command.interface.js';
import TextColor from '../utils/text-color.js';

const HELP_TEXT = (
  `Программа для подготовки данных для REST API сервера.
    Пример:
        main.js --<command> [--arguments]
    Команды:
        --version:                   # выводит номер версии
        --help:                      # печатает этот текст
        --import <path>:             # импортирует данные из TSV
        --generator <n> <path> <url> # генерирует произвольное количество тестовых данных
    `);

export default class HelpCommand implements CliCommandInterface {
  public readonly name: string = '--help';

  execute() {
    console.log(TextColor.Blue(HELP_TEXT));
  }
}
