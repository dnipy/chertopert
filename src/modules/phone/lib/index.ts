import {
  landlinePrefix,
  mciCellphonePrefix,
  mtnCellphonePrefix,
  rightelCellphonePrefix,
} from '../data';

import { T_OPERATOR, T_PROVINCE } from '../types';

/**
 * Generates a list of possible cellphone number prefixes based on the specified operator.
 * @param {T_OPERATOR} [operator] - The mobile operator for which prefixes should be returned.
 * @returns {string[]} An array of possible prefixes for the given operator.
 * @example
 * CellphoneGenerator("MCI"); // Returns MCI prefixes (e.g., ["0912", "0913", ...])
 * CellphoneGenerator(); // Returns all available prefixes from all operators
 */
const CellphoneGenerator = (operator?: T_OPERATOR) => {
  switch (operator) {
    case 'MCI':
      return mciCellphonePrefix;
    case 'MTN':
      return mtnCellphonePrefix;
    case 'RIGHTEL':
      return rightelCellphonePrefix;
    default:
      return [...mciCellphonePrefix, ...mtnCellphonePrefix, ...rightelCellphonePrefix];
  }
};

/**
 * Generates landline prefixes based on the specified province.
 * @param {T_PROVINCE} [province] - The province for which the landline prefixes should be returned.
 * @returns {Array<{ code: string; province: T_PROVINCE }>} A list of objects containing landline prefixes and their associated provinces.
 * @example
 * LandLineGenerator("Tehran"); // Returns landline prefixes for Tehran
 * LandLineGenerator(); // Returns all available landline prefixes
 */
const LandLineGenerator = (province?: T_PROVINCE) => {
  return province ? landlinePrefix.filter((e) => e.province === province) : landlinePrefix;
};

export { CellphoneGenerator, LandLineGenerator };