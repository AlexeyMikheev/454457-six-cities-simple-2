import { MapperInterface } from '../mapper/mapper.interface.js';
import { stringToArray, drawRed } from '../utils/text-formatter.js';

export default class TSVParserM<T>  {
  private data?: T[];

  constructor(public readonly content: string) { }

  public getData() {
    return this.data;
  }

  public parse(mapper: MapperInterface<T>) {
    try {
      const rows = stringToArray(this.content, '\r\n').filter((row) => row.trim() !== '');

      if (rows?.length) {
        this.data = rows.reduce((acc, row) => {
          const rowData = mapper.mapToItem(row);

          if (rowData) {
            acc.push(rowData);
          }

          return acc;
        }, [] as T[]);
      }
    } catch (error) {
      console.log(drawRed(error));
    }
  }
}
