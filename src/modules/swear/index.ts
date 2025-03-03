import { randomItem } from '../../utils';
import { nonSexualCurses, sexualCurses } from './data';

export const swear = () => {
  const polite = (exrea?: string[]) => randomItem([...nonSexualCurses, ...(exrea || [])]);
  const impolite = (exrea?: string[]) => randomItem([...sexualCurses, ...(exrea || [])]);

  return {
    polite,
    impolite,
  };
};
