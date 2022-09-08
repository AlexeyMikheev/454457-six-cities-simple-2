import chalk from 'chalk';

export enum TextColorCode {
    Red,
    Green,
    Blue
}

export default class TextColor {
  public static Draw(code:TextColorCode, text: unknown[]):string | unknown[] {
    switch(code) {
      case TextColorCode.Green: return chalk.green(text);
      case TextColorCode.Red: return chalk.red(text);
      case TextColorCode.Blue: return chalk.blue(text);
      default: return text;
    }
  }

  public static Red(...text: unknown[]):string | unknown[]  {
    return this.Draw(TextColorCode.Red, text);
  }

  public static Green(...text: unknown[]):string | unknown[]  {
    return this.Draw(TextColorCode.Green, text);
  }

  public static Blue(...text: unknown[]):string | unknown[]  {
    return this.Draw(TextColorCode.Blue, text);
  }
}
