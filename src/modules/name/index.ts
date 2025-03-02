import { randomItem } from '../../utils';
import { femaleEngNames, maleEngNames } from './data';
import { FirstNameGenerator, LastNameGenerator, UserNameGenerator } from './lib';
import { I_NAME_MODULE_CONFIG } from './types';

export const Name = (config?: I_NAME_MODULE_CONFIG) => {
  const first_names = FirstNameGenerator(config);
  const last_names = LastNameGenerator(config);

  const FirstName = () => randomItem(first_names);
  const LastName = () => randomItem(last_names);
  const FullName = () => `${FirstName()} ${LastName()}`;
  const UserName = (usernames?: string[], length?: number) =>
    `${UserNameGenerator([...(usernames || []), ...maleEngNames, ...femaleEngNames], length)}`;

  return {
    FirstName,
    LastName,
    FullName,
    UserName,
  };
};
