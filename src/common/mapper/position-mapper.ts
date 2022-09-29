import { Position } from '../../types/position-type.js';
import { MapperInterface } from './mapper.interface.js';

class PositionMapper implements MapperInterface<Position> {
  constructor(private readonly separator = ';') { }
  public mapToModel(data: string) {
    const values = data?.split(this.separator);

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
      throw new Error(`В значение ${lonString} удалось определить longitude для Position`);
    }

    const position: Position = [lat, lon];

    return position;
  }

  public mapToString(data: Position): string {
    if (!data) {
      throw new Error(`Значение ${data} не определено`);
    }

    return data.join(this.separator);
  }
}

export default PositionMapper;
