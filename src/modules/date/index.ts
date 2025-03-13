import { numberByRange, randomItem } from '../../utils';
import { I_DATE_MODULE_CONFIG, I_SELECT_RANGE } from './type';
import { persianDays, persianMonths } from './data';

/**
 * Generates random Persian (Jalali) dates.
 * @param {I_DATE_MODULE_CONFIG} [config] - Optional configuration object (not currently used).
 * @returns {Object} Date generation functions.
 */
export const date = (config?: I_DATE_MODULE_CONFIG) => {
  
  /**
   * Selects a random Persian day of the month.
   * @returns {{ title: string, number: number }} An object containing the Persian day name and its numerical value.
   * @example
   * day(); // { title: "شنبه", number: 1 }
   */
  const day = () => randomItem(persianDays);

  /**
   * Selects a random Persian month.
   * @returns {{ title: string, number: number }} An object containing the Persian month name and its numerical value.
   * @example
   * month(); // { title: "فروردین", number: 1 }
   */
  const month = () => randomItem(persianMonths);

  /**
   * Generates a random Persian year within a given range.
   * @param {I_SELECT_RANGE} [props] - Optional range selection.
   * @param {number} [props.from=1320] - Start year (default: 1320).
   * @param {number} [props.to=1420] - End year (default: 1420).
   * @returns {number} A random Persian year within the given range.
   * @example
   * year({ from: 1400, to: 1410 }); // 1405
   */
  const year = (props?: I_SELECT_RANGE) => numberByRange(props?.from || 1320, props?.to || 1420);

  /**
   * Generates a full Persian date in either title format (day and month name) or numeric format.
   * @param {'TITLE' | 'NUMBER'} [format='NUMBER'] - The format of the date.
   * @returns {string} The formatted date string.
   * @example
   * fullDate('TITLE'); // "دوشنبه اردیبهشت سال 1402"
   * fullDate('NUMBER'); // "1402/2/15"
   */
  const fullDate = (format?: 'TITLE' | 'NUMBER') =>
    format === 'TITLE'
      ? `${day().title} ${month().title} سال ${year()}`
      : `${year()}/${month().number}/${day().number}`;

  return {
    day,
    month,
    year,
    fullDate,
  };
};