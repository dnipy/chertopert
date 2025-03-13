<p dir="ltr">
    <a href="https://github.com/dnipy/chertopert/blob/main/README.fa.md">فارسی</a> | 
</p>

# Chertopert 📦
<!-- <img src="https://github.com/dnipy/chertopert/data/logo.png" alt="chertopert.js" width="300"> -->

**Chertopert** is a modern, Persian-friendly alternative to Faker.js. It provides a collection of utilities for generating random yet meaningful Persian data, including names, phone numbers, dates, addresses, codes, and even swear words. Perfect for testing applications and seeding databases with Persian content. 🚀

## Features ✨

- ✅ **Random Persian Names** (First Name, Last Name, Full Name, Username)
- 📞 **Fake Phone Numbers** (Landline & Cellphone)
- 📅 **Persian Date Generator** (Day, Month, Year, Full Date)
- 📍 **Realistic Addresses** (Province, Place, Alley, Square, Full Address)
- 🔢 **Randomized Codes** (Person & Company National Codes)
- 🤬 **Swear Words Generator** (Polite & Impolite)
- ⚡ **Lightweight & Fast** (Optimized utilities for quick data generation)

## Installation ⬇️

Install Chertopert via npm:

```bash
npm install chertopert
```

or with yarn:

```bash
yarn add chertopert
```

## Usage 🚀

Import the desired modules and start generating fake Persian data:

```ts
import { person, phone, date, address, code, swear } from "chertopert";

// Generate a random Persian full name
const fullName = person().fullName();
console.log(fullName); // "امیر علی محمدی"

// Generate a fake Iranian cellphone number
const mobile = phone().Cellphone();
console.log(mobile); // "09121234567"

// Generate a random Persian date
const randomDate = date().fullDate("TITLE");
console.log(randomDate); // "شنبه 25 بهمن 1402"

// Generate a random Persian address
const fakeAddress = address().fullAddress();
console.log(fakeAddress); // "تهران، میدان آزادی، جنب دانشگاه تهران، پلاک 42"

// Generate a national code
const nationalCode = code().personNationalCode();
console.log(nationalCode); // "0012345678"

// Generate a random Persian curse word
const badWord = swear().impolite();
console.log(badWord); // "فلان فلان شده"
```

## API Reference 📚

### `person()`

Generate random Persian names and ages.

```ts
const name = person();
name.firstName();  // "حسین"
name.lastName();   // "احمدی"
name.fullName();   // "حسین احمدی"
name.userName();   // "h.ahmadi"
name.age(18, 60);  // 42
```

### `phone()`

Generate fake Persian phone numbers.

```ts
const phoneNumber = phone();
phoneNumber.Cellphone(); // "09123456789"
phoneNumber.Landline();  // "02112345678"
```

### `date()`

Generate random Persian calendar dates.

```ts
const randomDate = date();
randomDate.day();      // "یکشنبه"
randomDate.month();    // "فروردین"
randomDate.year();     // 1402
randomDate.fullDate(); // "1402/01/25"
```

### `address()`

Generate random Persian addresses.

```ts
const fakeAddress = address();
fakeAddress.province();   // "تهران"
fakeAddress.place();      // "دانشگاه تهران"
fakeAddress.alley();      // "شهید بهشتی"
fakeAddress.fullAddress(); // "تهران، میدان انقلاب، کوچه شهید بهشتی، پلاک 18"
```

### `code()`

Generate random national and company codes.

```ts
const codes = code();
codes.personNationalCode();   // "0065432987"
codes.companyNationalCode();  // "12345678901"
codes.random(8);              // "83467291"
```

### `swear()`

Generate random polite or impolite Persian swear words.

```ts
const badWords = swear();
badWords.polite();   // "ای بابا"
badWords.impolite(); // "فلان فلان شده"
```

## Contributing 🛠

We welcome contributions! Please follow these steps:

1. **Fork** the repository.
2. **Create a new branch**: `git checkout -b feature-branch`.
3. **Commit your changes**: `git commit -m "Added new feature"`.
4. **Push to the branch**: `git push origin feature-branch`.
5. **Open a Pull Request**.

## License 📄

Chertopert is open-source and licensed under the **MIT License**.

---

Made with ❤️ for the Persian developer community! 🚀

