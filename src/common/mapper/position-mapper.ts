import { Nullable } from '../../types/nullable-type.js';
import { Position } from '../../types/position-type.js';
import TextFormatter from '../text-formatter.js';
import { MapperInterface } from './mapper.interface.js';

export default class PositionMapper implements MapperInterface<Position> {
  public mapToItem(data: string): Nullable<Position> {
    const values = TextFormatter.stringToArray(data, ';');

    if (values?.length !== 2) {
      return null;
    }

    const [latString, lonString] = values;

    const latValue = Number.parseFloat(latString);
    const lotValue = Number.parseFloat(lonString);

    const lat = !!latValue && !Number.isNaN(latValue) && Number.isFinite(latValue) ? latValue : 0;
    const lon = !!latValue && !Number.isNaN(lotValue) && Number.isFinite(lotValue) ? lotValue : 0;

    return [lat, lon];
  }
}
