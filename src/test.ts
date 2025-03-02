import ChertoPert, { Name, Phone, Date } from '.';

console.log({
  username: Name().UserName(),
  name: Name().FullName(),
  Phone: Phone().Cellphone(),
  date: Date().FullDate(),
});
