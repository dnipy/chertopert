import ChertoPert, { Name, Phone, Date, Code } from '.';

const cherto = ChertoPert();

cherto.Name().UserName();

console.log({
  username: Name().UserName(),
  name: Name().FullName(),
  Phone: Phone().Cellphone(),
  date: Date().FullDate(),
  national_code: Code().PersonNationalCode(),
  economic_code: Code().CompanyNationalCode(),
  otp: Code().Random(6),
});
