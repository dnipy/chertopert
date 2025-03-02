import { randomItem, randomNumberString } from '../../utils';
import { I_CODE_MODULE_CONFIG } from './type';
import { personPrefix } from './data';

export const Code = (config?: I_CODE_MODULE_CONFIG) => {
  const PersonNationalCode = () => `${randomItem(personPrefix)}${randomNumberString(7)}`;
  const CompanyNationalCode = () => randomNumberString(11);
  const Random = (length: number) => randomNumberString(length);

  return {
    CompanyNationalCode,
    PersonNationalCode,
    Random,
  };
};
