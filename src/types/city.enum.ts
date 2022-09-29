export enum City {
    Paris = 'Paris',
    Cologne = 'Cologne',
    Brussels = 'Brussels',
    Amsterdam = 'Amsterdam',
    Hamburg = 'Hamburg',
    Dusseldorf = 'Dusseldorf',
}

export type CityPosition = { [key in City]: [number, number] };

export const CITY_POSITION: CityPosition = {
  [City.Paris]: [48.85661, 2.351499],
  [City.Cologne]: [50.938361, 6.959974],
  [City.Brussels]: [50.846557, 4.351697],
  [City.Amsterdam]: [52.370216, 4.895168],
  [City.Hamburg]: [53.550341, 10.000654],
  [City.Dusseldorf]: [51.225402, 6.776314],
};

