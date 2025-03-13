import { numberByRange, randomItem } from '../../utils';
import { femaleEngNames, maleEngNames } from './data';
import { FirstNameGenerator, LastNameGenerator, UserNameGenerator } from './lib';
import { I_NAME_MODULE_CONFIG } from './types';

/**
 * Generates random personal information including names, usernames, and ages.
 * @param {I_NAME_MODULE_CONFIG} [config] - Optional configuration for name generation.
 * @returns {Object} Personal information generation functions.
 */
export const person = (config?: I_NAME_MODULE_CONFIG) => {
  const first_names = FirstNameGenerator(config);
  const last_names = LastNameGenerator(config);

  /**
   * Selects a random first name from the generated list.
   * @returns {string} A randomly chosen first name.
   * @example
   * firstName(); // "دانیال"
   */
  const firstName = () => randomItem(first_names);

  /**
   * Selects a random last name from the generated list.
   * @returns {string} A randomly chosen last name.
   * @example
   * lastName(); // "رحمانی"
   */
  const lastName = () => randomItem(last_names);

  /**
   * Generates a full name by combining a random first name and last name.
   * @returns {string} A randomly generated full name.
   * @example
   * fullName(); // "علی عابدی"
   */
  const fullName = () => `${firstName()} ${lastName()}`;

  /**
   * Generates a random age within the given range.
   * @param {number} [min=1] - The minimum age (default: 1).
   * @param {number} [max=100] - The maximum age (default: 100).
   * @returns {number} A randomly generated age.
   * @example
   * age(18, 40); // 27
   */
  const age = (min?: number, max?: number) => numberByRange(min || 1, max || 100);

  /**
   * Generates a random username using a provided list of names or default English names.
   * @param {string[]} [usernames] - An optional array of usernames to include.
   * @param {number} [length] - Optional length constraint for the username.
   * @returns {string} A randomly generated username.
   * @example
   * userName(); // "Roya_2"
   */
  const userName = (usernames?: string[], length?: number) =>
    `${UserNameGenerator([...(usernames || []), ...maleEngNames, ...femaleEngNames], length)}`;

  return {
    firstName,
    lastName,
    fullName,
    userName,
    age,
  };
};
