import { CityType } from '../../types/city-type.enum.js';
import { Nullable } from '../../types/nullable-type.js';
import { MapperInterface } from './mapper.interface.js';

export default class CityTypeMapper implements MapperInterface<CityType> {
  public mapToItem(data: string): Nullable<CityType> {
    const cityTypeKey = Object.keys(CityType).find((key) => key.toLowerCase() === data.toLowerCase());

    return cityTypeKey ? CityType[cityTypeKey as CityType] : null;
  }
}
