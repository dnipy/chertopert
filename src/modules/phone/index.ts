import { randomItem, randomNumberString } from '../../utils';
import { CellphoneGenerator, LandLineGenerator } from './lib';
import { T_OPERATOR, T_PROVINCE } from './types';

/**
 * Generates phone numbers, including landline and cellphone numbers.
 * @returns {object} An object containing methods for generating phone numbers.
 */
export const phone = () => {
  /**
   * Generates a random landline number based on the provided province.
   * @param {T_PROVINCE} [province] - The province for which the landline number should be generated.
   * @returns {string} A randomly generated landline number.
   * @example
   * Landline("Tehran"); // "021123456"
   */
  const Landline = (province?: T_PROVINCE) =>
    `${randomItem(LandLineGenerator(province))?.code}${randomNumberString(6)}`;

  /**
   * Generates a random cellphone number based on the provided operator.
   * @param {T_OPERATOR} [operator] - The mobile operator for which the number should be generated.
   * @returns {string} A randomly generated cellphone number.
   * @example
   * Cellphone("MTN"); // "09035095691"
   */
  const Cellphone = (operator?: T_OPERATOR) =>
    `${randomItem(CellphoneGenerator(operator))}${randomNumberString(7)}`;

  return {
    Cellphone,
    Landline,
  };
};
