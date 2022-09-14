export const getRandomValue = (min: number, max: number, precision = 0): number => {
  const randomValue = min + (Math.random() * (max - min));
  return +randomValue.toFixed(precision);
};

export const getRandomItems = <T>(items: T[]): T[] => {
  const max = items.length - 1;
  const start = getRandomValue(0, max);
  const step = getRandomValue(start, max);
  const end = start + step;

  return items.slice(start, end);
};

export const getRandomItem = <T>(items:T[]) : T => {
  const max = items.length - 1;
  const randomValue = getRandomValue(0, max);
  return items[randomValue];
};
