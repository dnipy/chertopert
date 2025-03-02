import { randomItem, randomNumberString } from '../../utils';
import { AlleyGenerator, PlaceGenerator, ProvinceGenerator, SquareGenerator } from './lib';
import { I_ADDRESS_MODULE_CONFIG } from './type';

export const Address = (config?: I_ADDRESS_MODULE_CONFIG) => {
  const Province = () => randomItem(ProvinceGenerator());
  const Place = () => randomItem(PlaceGenerator(config));
  const Alley = () => randomItem(AlleyGenerator(config));
  const Square = () => randomItem(SquareGenerator(config));
  const FullAddress = () => {
    const addressParts = [`${Province()} `];

    const optionalParts = [`میدان ${Square()} `, `جنب ${Place()} `, `کوچه ${Alley()} `].filter(
      () => Math.random() > 0.5
    );

    addressParts.push(...optionalParts, `پلاک ${randomNumberString(2)}`);

    return addressParts.join(', ');
  };

  return {
    Province,
    Place,
    Alley,
    Square,
    FullAddress,
  };
};
