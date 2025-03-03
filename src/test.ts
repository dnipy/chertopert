import Cherto from '.';

const chertopert = Cherto();

console.log({
  swear: chertopert.swear().impolite(),
  name: chertopert.person().firstName(),
  username: chertopert.person().userName(),
  age: chertopert.code().random(2),
  otp: chertopert.code().random(5),
  join_date: chertopert.date().fullDate(),
  address: chertopert.address().fullAddress(),
  province: chertopert.address().province(),
});
