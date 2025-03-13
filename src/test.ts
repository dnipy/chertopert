import Cherto from '.';

const chertoperter = Cherto();

console.log({
  swear: chertoperter.swear().impolite(),
  name: chertoperter.person().firstName(),
  username: chertoperter.person().userName(),
  age: chertoperter.code().random(2),
  otp: chertoperter.code().random(5),
  join_date: chertoperter.date().fullDate(),
  address: chertoperter.address().fullAddress(),
  province: chertoperter.address().province(),
});
