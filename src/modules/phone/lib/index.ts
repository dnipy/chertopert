import {
    landlinePrefix,
    mciCellphonePrefix,
    mtnCellphonePrefix,
    rightelCellphonePrefix
} from '../data'

import {
    T_OPERATOR,
    T_PROVINCE
} from '../types'


const CellphoneGenerator = (operator?: T_OPERATOR) => {
    switch (operator) {
        case 'MCI':
            return mciCellphonePrefix;
        case "MTN":
            return mtnCellphonePrefix;
        case 'RIGHTEL':
            return rightelCellphonePrefix;
        default:
            return [
                ...mciCellphonePrefix,
                ...mtnCellphonePrefix,
                ...rightelCellphonePrefix
            ]
    }
}


const LandLineGenerator = (province?: T_PROVINCE) => {
    return (
        province
            ?
            landlinePrefix.filter(e => e.province === province)
            :
            landlinePrefix
    )
}


export {
    CellphoneGenerator,
    LandLineGenerator
}