import { FirstNameGenerator, LastNameGenerator } from "./lib"
import { I_NAME_MODULE_CONFIG } from "./types"



export const Name = (config?: I_NAME_MODULE_CONFIG) => {

    const first_names = FirstNameGenerator(config);
    const last_names = LastNameGenerator(config)


    const randomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

    const FirstName = () => randomItem(first_names);
    const LastName = () => randomItem(last_names);
    const FullName = () => `${FirstName()} ${LastName()}`;


    return ({
        FirstName,
        LastName,
        FullName,
    })
}
