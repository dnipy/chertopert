import { femaleNames, maleNames, neutralNames, lastNames } from '../data';
import { I_First_Name_Generator, I_Last_Name_Generator } from '../types';

/**
 * Generates a list of first names based on the provided configuration.
 * @param {I_First_Name_Generator} [config] - Optional configuration for first name generation.
 * @returns {string[]} An array of randomly selected first names.
 * @example
 * FirstNameGenerator({ gender: 'male' }); // ["دانیال", "ممد", ...]
 */
const FirstNameGenerator = (config?: I_First_Name_Generator) => {
  const included_first_names = config?.first_names || [];

  return config?.gender
    ? [...included_first_names, ...(config.gender === 'male' ? maleNames : femaleNames)]
    : [...included_first_names, ...femaleNames, ...maleNames, ...neutralNames];
};

/**
 * Generates a list of last names based on the provided configuration.
 * @param {I_Last_Name_Generator} [config] - Optional configuration for last name generation.
 * @returns {string[]} An array of randomly selected last names.
 * @example
 * LastNameGenerator(); // ["رحمانی", "کیانی", ...]
 */
const LastNameGenerator = (config?: I_Last_Name_Generator) => {
  const included_last_names = config?.last_names || [];
  return [...included_last_names, ...lastNames];
};

/**
 * Generates a random username based on the provided names.
 * @param {string[]} names - An array of names to use for username generation.
 * @param {number} [length=8] - The maximum length of the generated username.
 * @returns {string} A randomly generated username.
 * @throws {Error} If the names array is empty.
 * @example
 * UserNameGenerator(["aida", "mahtab"], 10); // "mahtab_2"
 */
function UserNameGenerator(names: string[], length = 8): string {
  if (names.length === 0) throw new Error('Names array cannot be empty');

  const randomName = names[Math.floor(Math.random() * names.length)];
  const addNumber = Math.random() > 0.1;
  const addUnderscore = Math.random() > 0.1;

  let username = randomName;

  if (addNumber) {
    username += Math.floor(Math.random() * 1000);
  }

  if (addUnderscore) {
    username = username.replace(/ /g, '_');
  }

  return username.slice(0, length);
}

export { FirstNameGenerator, LastNameGenerator, UserNameGenerator };
