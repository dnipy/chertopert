import { femaleNames, maleNames, neutralNames, lastNames } from '../data';
import { I_First_Name_Generator, I_Last_Name_Generator } from '../types';

const FirstNameGenerator = (config?: I_First_Name_Generator) => {
  const included_first_names = config?.first_names || [];

  return config?.gender
    ? [...included_first_names, ...(config.gender === 'male' ? maleNames : femaleNames)]
    : [...included_first_names, ...femaleNames, ...maleNames, ...neutralNames];
};

const LastNameGenerator = (config?: I_Last_Name_Generator) => {
  const included_last_names = config?.last_names || [];
  return [...included_last_names, ...lastNames];
};

function UserNameGenerator(names: string[], length = 8): string {
  if (names.length === 0) throw new Error('Names array cannot be empty');

  const randomName = names[Math.floor(Math.random() * names.length)];
  const addNumber = Math.random() > 0.1;
  const addUnderscore = Math.random() > 0.1;

  let username = randomName;

  if (addNumber) {
    username += Math.floor(Math.random() * 1000);
  }

  if (addUnderscore) {
    username = username.replace(/ /g, '_');
  }

  return username.slice(0, length);
}

export { FirstNameGenerator, LastNameGenerator, UserNameGenerator };
