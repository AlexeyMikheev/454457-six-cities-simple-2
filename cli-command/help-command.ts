import { CliCommandInterface } from './cli-command.interface.js';
import TextColor from '../utils/text-color.js';

export default class HelpCommand implements CliCommandInterface {
  public readonly name: string = '--help';

  private readonly helpText = (
    `Программа для подготовки данных для REST API сервера.
    Пример:
        main.js --<command> [--arguments]
    Команды:
        --version:                   # выводит номер версии
        --help:                      # печатает этот текст
        --import <path>:             # импортирует данные из TSV
        --generator <n> <path> <url> # генерирует произвольное количество тестовых данных
    `
  );

  execute() {
    console.log(TextColor.Blue(this.helpText));
  }
}
