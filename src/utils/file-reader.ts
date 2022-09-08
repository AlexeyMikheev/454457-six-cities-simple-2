import { readFileSync } from 'fs';
import TextColor from './text-color.js';

export type FileResult =  string | null;

export default class FileReader {
  public static readeFileSync(path:string): FileResult{
    let data: FileResult = null;

    try{
      data = readFileSync(path,'utf-8');
    } catch(error) {
      console.log(TextColor.Red(error));
    }

    return data;
  }
}
