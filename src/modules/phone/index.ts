import { randomItem, randomNumberString } from '../../utils';
import { CellphoneGenerator, LandLineGenerator } from './lib';
import { T_OPERATOR, T_PROVINCE } from './types';

export const phone = () => {
  const Landline = (province?: T_PROVINCE) =>
    `${randomItem(LandLineGenerator(province))?.code}${randomNumberString(6)}`;
  const Cellphone = (operator?: T_OPERATOR) =>
    `${randomItem(CellphoneGenerator(operator))}${randomNumberString(7)}`;

  return {
    Cellphone,
    Landline,
  };
};
