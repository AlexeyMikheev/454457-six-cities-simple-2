import got from 'got';
import { getErrorMessage } from './common.js';
import { drawRed } from './text.js';

export const get = async <T>(url: string): Promise<T> => {
  let data;

  try {
    data = await got(url).json();
  } catch (error) {
    const message = getErrorMessage(error, `Ошибка загрузки данных для ${url}`);
    console.log(drawRed(message));
  }

  return data as T;
};
