import { CityType } from '../../types/city-type.enum.js';

export default class CityTypeMapper {
  public static mapToCity(data: string): CityType | null {
    if(!data){
      return null;
    }

    switch(data.toLowerCase()) {
      case CityType.Paris.toLowerCase(): return CityType.Paris;
      case CityType.Cologne.toLowerCase(): return CityType.Cologne;
      case CityType.Brussels.toLowerCase(): return CityType.Brussels;
      case CityType.Amsterdam.toLowerCase(): return CityType.Amsterdam;
      case CityType.Hamburg.toLowerCase(): return CityType.Hamburg;
      case CityType.Dusseldorf.toLowerCase(): return CityType.Dusseldorf;
      default: return null;
    }
  }
}
