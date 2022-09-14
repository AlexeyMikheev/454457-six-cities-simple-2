import got from 'got';

export const get = async <T>(url:string): Promise<T> => {
  let data;

  try {
    data = await got(url).json();
  } catch (error) {
    const message = error instanceof Error ? error.message : `Ошибка загрузки данных для ${url}`;
    console.log(message);
  }

  return data as T;
};
