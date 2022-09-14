import { CityType } from '../../types/city-type.enum.js';
import { MapperInterface } from './mapper.interface.js';

class CityTypeMapper implements MapperInterface<CityType> {
  public mapToItem(data: string) {
    switch (data) {
      case CityType.Paris: return CityType.Paris;
      case CityType.Cologne: return CityType.Cologne;
      case CityType.Brussels: return CityType.Brussels;
      case CityType.Amsterdam: return CityType.Amsterdam;
      case CityType.Hamburg: return CityType.Hamburg;
      case CityType.Dusseldorf: return CityType.Dusseldorf;
      default: throw new Error(`Значение ${data} не определено в CityType`);
    }
  }
}

export default CityTypeMapper;
