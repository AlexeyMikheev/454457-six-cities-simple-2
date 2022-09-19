import got from 'got';
import { drawRed } from './text.js';

export const get = async <T>(url:string): Promise<T> => {
  let data;

  try {
    data = await got(url).json();
  } catch (error) {
    const message = error instanceof Error ? error.message : `Ошибка загрузки данных для ${url}`;
    console.log(drawRed(message));
  }

  return data as T;
};
