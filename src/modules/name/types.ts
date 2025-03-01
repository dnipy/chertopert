export type T_GENDER = 'male' | 'female'

export interface I_NAME_MODULE_CONFIG {
    gender?: T_GENDER
    first_names?: string[]
    last_names?: string[]
    name?: string[]
}

export interface I_First_Name_Generator {
    gender?: T_GENDER,
    first_names?: string[]
}

export interface I_Last_Name_Generator {
    last_names?: string[]
}