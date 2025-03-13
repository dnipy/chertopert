import { randomItem, randomNumberString } from '../../utils';
import { AlleyGenerator, PlaceGenerator, ProvinceGenerator, SquareGenerator } from './lib';
import { I_ADDRESS_MODULE_CONFIG } from './type';

/**
 * Generates random Persian addresses, including provinces, places, alleys, and squares.
 * @param {I_ADDRESS_MODULE_CONFIG} [config] - Optional configuration for address generation.
 * @returns {Object} Address utilities for generating random address components.
 */
export const address = (config?: I_ADDRESS_MODULE_CONFIG) => {
  
  /**
   * Returns a random Persian province.
   * @returns {string} A randomly selected province name.
   */
  const province = () => randomItem(ProvinceGenerator());

  /**
   * Returns a random place (e.g., university, mall, hospital).
   * @returns {string} A randomly selected place name.
   */
  const place = () => randomItem(PlaceGenerator(config));

  /**
   * Returns a random alley name.
   * @returns {string} A randomly selected alley name.
   */
  const alley = () => randomItem(AlleyGenerator(config));

  /**
   * Returns a random square name.
   * @returns {string} A randomly selected square name.
   */
  const square = () => randomItem(SquareGenerator(config));

  /**
   * Generates a full, realistic Persian address by combining different address components.
   * The format varies dynamically to create realistic randomness.
   * 
   * @returns {string} A randomly generated Persian address.
   * @example
   * "تهران, میدان آزادی, جنب دانشگاه تهران, کوچه شهید بهشتی, پلاک 42"
   */
  const fullAddress = () => {
    const addressParts = [`${province()} `];

    const optionalParts = [`میدان ${square()} `, `جنب ${place()} `, `کوچه ${alley()} `].filter(
      () => Math.random() > 0.5
    );

    addressParts.push(...optionalParts, `پلاک ${randomNumberString(2)}`);

    return addressParts.join(', ');
  };

  return {
    province,
    place,
    alley,
    square,
    fullAddress,
  };
};
