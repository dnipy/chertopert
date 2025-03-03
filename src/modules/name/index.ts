import { numberByRange, randomItem } from '../../utils';
import { femaleEngNames, maleEngNames } from './data';
import { FirstNameGenerator, LastNameGenerator, UserNameGenerator } from './lib';
import { I_NAME_MODULE_CONFIG } from './types';

export const person = (config?: I_NAME_MODULE_CONFIG) => {
  const first_names = FirstNameGenerator(config);
  const last_names = LastNameGenerator(config);

  const firstName = () => randomItem(first_names);
  const lastName = () => randomItem(last_names);
  const fullName = () => `${firstName()} ${lastName()}`;
  const age = (min?: number, max?: number) => numberByRange(min || 1, max || 100);
  const userName = (usernames?: string[], length?: number) =>
    `${UserNameGenerator([...(usernames || []), ...maleEngNames, ...femaleEngNames], length)}`;

  return {
    firstName,
    lastName,
    fullName,
    userName,
    age,
  };
};
