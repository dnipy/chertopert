import { randomItem } from '../../utils';
import { nonSexualCurses, sexualCurses } from './data';

/**
 * Generates polite or impolite swear words.
 */
export const swear = () => {
  /**
   * Returns a polite swear word (non-sexual).
   * @param {string[]} [extra=[]] - Additional words to include.
   * @returns {string} A randomly selected polite swear word.
   * @example
   * polite(); //  "بی‌عرضه" 
   * polite(["نفهم"]); // maybe return 'نفهم'
   */
  const polite = (extra: string[] = []) => {
    const allPoliteCurses = [...nonSexualCurses, ...extra];
    return allPoliteCurses.length ? randomItem(allPoliteCurses) : '...';
  };

  /**
   * Returns an impolite swear word (sexual).
   * @param {string[]} [extra=[]] - Additional words to include.
   * @returns {string} A randomly selected impolite swear word.
   * @example
   * impolite(); // 🔞
   * impolite(["🔞","🔞","🔞","🔞"]); //  "فحش 🔞" 
   */
  const impolite = (extra: string[] = []) => {
    const allImpoliteCurses = [...sexualCurses, ...extra];
    return allImpoliteCurses.length ? randomItem(allImpoliteCurses) : '...';
  };

  return {
    polite,
    impolite,
  };
};
