import { cities } from '../../consts/russianCities';

export const conversionCities = (value: string) => {
  const data = cities
    .filter(item => item.name === value)
    .map(item => ({
      id: `${item.name}${item.population}`,
      title: item.name,
    }));
  return data;
};
