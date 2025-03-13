import { alley, place, province, square, street } from '../data';

/**
 * Returns the list of available provinces.
 * @returns {string[]} An array of province names.
 */
const ProvinceGenerator = () => province;

/**
 * Returns a list of places, optionally including user-defined places.
 * @param {Object} [config] - Optional configuration for custom places.
 * @param {string[]} [config.place] - Additional custom places to include.
 * @returns {string[]} An array of place names.
 */
const PlaceGenerator = (config?: { place?: string[] }) => {
  const included_places = config?.place || [];
  return [...included_places, ...place];
};

/**
 * Returns a list of alleys, optionally including user-defined alleys.
 * @param {Object} [config] - Optional configuration for custom alleys.
 * @param {string[]} [config.alley] - Additional custom alleys to include.
 * @returns {string[]} An array of alley names.
 */
const AlleyGenerator = (config?: { alley?: string[] }) => {
  const included_alley = config?.alley || [];
  return [...included_alley, ...alley];
};

/**
 * Returns a list of squares, optionally including user-defined squares.
 * @param {Object} [config] - Optional configuration for custom squares.
 * @param {string[]} [config.square] - Additional custom squares to include.
 * @returns {string[]} An array of square names.
 */
const SquareGenerator = (config?: { square?: string[] }) => {
  const included_square = config?.square || [];
  return [...included_square, ...square];
};

/**
 * Returns a list of streets, optionally including user-defined streets.
 * @param {Object} [config] - Optional configuration for custom streets.
 * @param {string[]} [config.street] - Additional custom streets to include.
 * @returns {string[]} An array of street names.
 */
const StreetGenerator = (config?: { street?: string[] }) => {
  const included_street = config?.street || [];
  return [...included_street, ...street];
};

export { ProvinceGenerator, AlleyGenerator, PlaceGenerator, SquareGenerator, StreetGenerator };