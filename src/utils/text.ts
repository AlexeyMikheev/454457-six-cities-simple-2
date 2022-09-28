import chalk from 'chalk';

export const drawRed = (...text: unknown[]): string => chalk.red(text);

export const drawGreen = (...text: unknown[]): string => chalk.green(text);

export const drawBlue = (...text: unknown[]): string => chalk.blue(text);
