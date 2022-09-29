import { City } from '../../types/city.enum.js';
import { MapperInterface } from './mapper.interface.js';

class CityMapper implements MapperInterface<City> {
  public mapToItem(data: string) {
    switch (data) {
      case City.Paris: return City.Paris;
      case City.Cologne: return City.Cologne;
      case City.Brussels: return City.Brussels;
      case City.Amsterdam: return City.Amsterdam;
      case City.Hamburg: return City.Hamburg;
      case City.Dusseldorf: return City.Dusseldorf;
      default: throw new Error(`Значение ${data} не определено в CityType`);
    }
  }

  public mapToString(data: City): string {
    if (!data) {
      throw new Error(`Значение ${data} не определено`);
    }
    return data.toString();
  }
}

export default CityMapper;
