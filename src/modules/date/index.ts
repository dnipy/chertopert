import { numberByRange, randomItem } from '../../utils';
import { I_DATE_MODULE_CONFIG, I_SELECT_RANGE } from './type';
import { persianDays, persianMonths } from './data';

export const Date = (config?: I_DATE_MODULE_CONFIG) => {
  const Day = () => randomItem(persianDays);

  const Month = () => randomItem(persianMonths);

  const Year = (props?: I_SELECT_RANGE) => numberByRange(props?.from || 1320, props?.to || 1420);

  const FullDate = (format?: 'TITLE' | 'NUMBER') =>
    format === 'TITLE'
      ? `${Day().title} ${Month().title} سال ${Year()}`
      : `${Year()}/${Month().number}/${Day().number}`;

  return {
    Day,
    Month,
    Year,
    FullDate,
  };
};
