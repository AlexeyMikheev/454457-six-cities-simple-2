import TextColor from './text-color.js';

export type JsonResult<T> = T | null;

export default class JsonParse {
  public static parseJson<T>(json: string): JsonResult<T> {
    let data: JsonResult<T> = null;

    try {
      data = JSON.parse(json);
    } catch (error) {
      console.log(TextColor.Red(error));
    }

    return data;
  }
}
