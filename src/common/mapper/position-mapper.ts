import { Position } from '../../types/position-type.js';
import { stringToArray } from '../utils/text-formatter.js';
import { MapperInterface } from './mapper.interface.js';

export default class PositionMapper implements MapperInterface<Position> {
  public mapToItem(data: string) {
    const values = stringToArray(data, ';');

    if (values?.length !== 2) {
      throw new Error(`В значение ${data} не удалось определить Position`);
    }

    const [latString, lonString] = values;

    const lat = Number.parseFloat(latString);
    const lon = Number.parseFloat(lonString);

    if (!lat || Number.isNaN(lat)) {
      throw new Error(`В значение ${latString} удалось определить latitude для Position`);
    }

    if (!lon || Number.isNaN(lon)) {
      throw new Error(`В значение ${lonString} удалось определить latitude для Position`);
    }

    const position: Position = [lat, lon];

    return position;
  }
}
