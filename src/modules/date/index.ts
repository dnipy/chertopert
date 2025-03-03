import { numberByRange, randomItem } from '../../utils';
import { I_DATE_MODULE_CONFIG, I_SELECT_RANGE } from './type';
import { persianDays, persianMonths } from './data';

export const date = (config?: I_DATE_MODULE_CONFIG) => {
  const day = () => randomItem(persianDays);

  const month = () => randomItem(persianMonths);

  const year = (props?: I_SELECT_RANGE) => numberByRange(props?.from || 1320, props?.to || 1420);

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
