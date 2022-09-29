import { Feature } from '../../types/feature.enum.js';
import { MapperInterface } from './mapper.interface.js';

class FeatureMapper implements MapperInterface<Feature[]> {
  private getValue(data: string) {
    switch (data) {
      case Feature.Breakfast: return Feature.Breakfast;
      case Feature.AirConditioning: return Feature.AirConditioning;
      case Feature.LaptopFriendlyWorkspace: return Feature.LaptopFriendlyWorkspace;
      case Feature.BabySeat: return Feature.BabySeat;
      case Feature.Washer: return Feature.Washer;
      case Feature.Towels: return Feature.Towels;
      case Feature.Fridge: return Feature.Fridge;

      default: throw new Error(`Значение ${data} не определено в Feature`);
    }
  }

  public mapToModel(data: string) {
    return data?.split(';').map(this.getValue) || [];
  }

  public mapToString(data: Feature[]): string {
    if (!data) {
      throw new Error(`Значение ${data} не определено`);
    }
    return data?.map((d) => d.toString()).join(';');
  }
}

export default FeatureMapper;
