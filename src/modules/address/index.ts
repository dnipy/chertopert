import { randomItem, randomNumberString } from '../../utils';
import { AlleyGenerator, PlaceGenerator, ProvinceGenerator, SquareGenerator } from './lib';
import { I_ADDRESS_MODULE_CONFIG } from './type';

export const address = (config?: I_ADDRESS_MODULE_CONFIG) => {
  const province = () => randomItem(ProvinceGenerator());
  const place = () => randomItem(PlaceGenerator(config));
  const alley = () => randomItem(AlleyGenerator(config));
  const square = () => randomItem(SquareGenerator(config));
  const fullAddress = () => {
    const addressParts = [`${province()} `];

    const optionalParts = [`میدان ${square()} `, `جنب ${place()} `, `کوچه ${alley()} `].filter(
      () => Math.random() > 0.5
    );

    addressParts.push(...optionalParts, `پلاک ${randomNumberString(2)}`);

    return addressParts.join(', ');
  };

  return {
    province,
    place,
    alley,
    square,
    fullAddress,
  };
};
