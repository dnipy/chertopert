import { randomItem } from '../../../utils';
import { alley, place, province, square, street } from '../data';

const ProvinceGenerator = () => province;

const PlaceGenerator = (config?: { place?: string[] }) => {
  const included_places = config?.place || [];
  return [...included_places, ...place];
};

const AlleyGenerator = (config?: { alley?: string[] }) => {
  const included_alley = config?.alley || [];
  return [...included_alley, ...alley];
};

const SquareGenerator = (config?: { square?: string[] }) => {
  const included_square = config?.square || [];
  return [...included_square, ...square];
};

const StreetGenerator = (config?: { street?: string[] }) => {
  const included_street = config?.street || [];
  return [...included_street, ...street];
};

export { ProvinceGenerator, AlleyGenerator, PlaceGenerator, SquareGenerator, StreetGenerator };
