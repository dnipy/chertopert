import { femaleNames, maleNames, neutralNames, lastNames } from "../data"
import { I_First_Name_Generator, I_Last_Name_Generator } from "../types"

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

export { FirstNameGenerator, LastNameGenerator };