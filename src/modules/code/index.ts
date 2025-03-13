import { randomItem, randomNumberString } from '../../utils';
import { I_CODE_MODULE_CONFIG } from './type';
import { personPrefix } from './data';

/**
 * Generates various types of random codes, including national codes for individuals and companies.
 * @param {I_CODE_MODULE_CONFIG} [config] - Optional configuration object (not currently used).
 * @returns {Object} Code generation functions.
 */
export const code = (config?: I_CODE_MODULE_CONFIG) => {
  
  /**
   * Generates a random Iranian personal national code.
   * @returns {string} A valid 10-digit national code.
   * @example
   * personNationalCode(); // "0034567891"
   */
  const personNationalCode = () => `${randomItem(personPrefix)}${randomNumberString(7)}`;

  /**
   * Generates a random 11-digit company national code.
   * @returns {string} An 11-digit national code for companies.
   * @example
   * companyNationalCode(); // "12345678901"
   */
  const companyNationalCode = () => randomNumberString(11);

  /**
   * Generates a random numeric string of a given length.
   * @param {number} length - The desired length of the generated number.
   * @returns {string} A string containing only digits.
   * @example
   * random(8); // "38472691"
   */
  const random = (length: number) => randomNumberString(length);

  return {
    companyNationalCode,
    personNationalCode,
    random,
  };
};
