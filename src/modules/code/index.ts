import { randomItem, randomNumberString } from '../../utils';
import { I_CODE_MODULE_CONFIG } from './type';
import { personPrefix } from './data';

export const code = (config?: I_CODE_MODULE_CONFIG) => {
  const personNationalCode = () => `${randomItem(personPrefix)}${randomNumberString(7)}`;
  const companyNationalCode = () => randomNumberString(11);
  const random = (length: number) => randomNumberString(length);

  return {
    companyNationalCode,
    personNationalCode,
    random,
  };
};
