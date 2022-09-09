import chalk from 'chalk';
export enum TextColorCode {
  Red,
  Green,
  Blue
}

export default class TextFormatter {
  public static draw(code: TextColorCode, text: unknown[]): string | unknown[] {
    switch (code) {
      case TextColorCode.Green: return chalk.green(text);
      case TextColorCode.Red: return chalk.red(text);
      case TextColorCode.Blue: return chalk.blue(text);
      default: return text;
    }
  }

  public static drawRed(...text: unknown[]): string | unknown[] {
    return this.draw(TextColorCode.Red, text);
  }

  public static drawGreen(...text: unknown[]): string | unknown[] {
    return this.draw(TextColorCode.Green, text);
  }

  public static drawBlue(...text: unknown[]): string | unknown[] {
    return this.draw(TextColorCode.Blue, text);
  }

  public static stringToArray(data: string, separator = '\n'): string[] {
    if (!data?.length) {
      return [];
    }
    return data.split(separator);
  }
}
