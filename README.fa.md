<p dir="ltr">
    <a href="https://github.com/dnipy/chertoperter/blob/main/README.md">English</a> | 
</p>

# چرت‌وپرت 📦

<!-- <img src="https://github.com/dnipy/chertoperter/data/logo.png" alt="chertoperter.js" width="300"> -->

**چرت‌وپرت** یک جایگزین مدرن و فارسی‌پسند برای Faker.js است. این ابزار مجموعه‌ای از قابلیت‌ها را برای تولید داده‌های تصادفی اما معنادار فارسی فراهم می‌کند؛ شامل نام‌ها، شماره‌های تلفن، تاریخ‌ها، آدرس‌ها، کدها و حتی فحش‌ها! مناسب برای تست اپلیکیشن‌ها و ایجاد داده‌های آزمایشی در پایگاه داده‌ها 🚀

## ویژگی‌ها ✨

- ✅ **نام‌های تصادفی فارسی** (نام، نام خانوادگی، نام کامل، نام کاربری)
- 📞 **شماره تلفن‌های جعلی** (تلفن ثابت و موبایل)
- 📅 **تولید تاریخ‌های شمسی** (روز، ماه، سال، تاریخ کامل)
- 📍 **آدرس‌های واقعی‌گرایانه** (استان، مکان، کوچه، میدان، آدرس کامل)
- 🔢 **کدهای تصادفی** (کد ملی شخص و شرکت)
- 🤬 **تولید فحش‌های فارسی** (مودبانه و غیرمودبانه)
- ⚡ **سبک و سریع** (ابزارهای بهینه‌شده برای تولید داده با سرعت بالا)

## نصب ⬇️

برای نصب چرت‌وپرت از npm استفاده کنید:

```bash
npm install chertoperter
```

یا با yarn:

```bash
yarn add chertoperter
```

## استفاده 🚀

ماژول‌های مورد نیاز را ایمپورت کنید و شروع به تولید داده‌های فارسی جعلی کنید:

```ts
import { person, phone, date, address, code, swear } from "chertoperter";

// تولید یک نام کامل فارسی تصادفی
const fullName = person().fullName();
console.log(fullName); // "امیر علی محمدی"

// تولید یک شماره موبایل ایرانی جعلی
const mobile = phone().Cellphone();
console.log(mobile); // "09121234567"

// تولید یک تاریخ شمسی تصادفی
const randomDate = date().fullDate("TITLE");
console.log(randomDate); // "شنبه 25 بهمن 1402"

// تولید یک آدرس تصادفی
const fakeAddress = address().fullAddress();
console.log(fakeAddress); // "تهران، میدان آزادی، جنب دانشگاه تهران، پلاک 42"

// تولید یک کد ملی
const nationalCode = code().personNationalCode();
console.log(nationalCode); // "0012345678"

// تولید یک فحش تصادفی فارسی
const badWord = swear().impolite();
console.log(badWord); // "فلان فلان شده"
```

## مستندات API 📚

### `person()`

تولید نام‌های تصادفی فارسی و سن.

```ts
const name = person();
name.firstName();  // "حسین"
name.lastName();   // "احمدی"
name.fullName();   // "حسین احمدی"
name.userName();   // "h.ahmadi"
name.age(18, 60);  // 42
```

### `phone()`

تولید شماره‌های تصادفی تلفن همراه و ثابت ایرانی.

```ts
const phoneNumber = phone();
phoneNumber.Cellphone(); // "09123456789"
phoneNumber.Landline();  // "02112345678"
```

### `date()`

تولید تاریخ‌های تصادفی در تقویم شمسی.

```ts
const randomDate = date();
randomDate.day();      // "یکشنبه"
randomDate.month();    // "فروردین"
randomDate.year();     // 1402
randomDate.fullDate(); // "1402/01/25"
```

### `address()`

تولید آدرس‌های تصادفی فارسی.

```ts
const fakeAddress = address();
fakeAddress.province();   // "تهران"
fakeAddress.place();      // "دانشگاه تهران"
fakeAddress.alley();      // "شهید بهشتی"
fakeAddress.fullAddress(); // "تهران، میدان انقلاب، کوچه شهید بهشتی، پلاک 18"
```

### `code()`

تولید کد ملی و کدهای تصادفی.

```ts
const codes = code();
codes.personNationalCode();   // "0065432987"
codes.companyNationalCode();  // "12345678901"
codes.random(8);              // "83467291"
```

### `swear()`

تولید فحش‌های تصادفی فارسی.

```ts
const badWords = swear();
badWords.polite();   // "ای بابا"
badWords.impolite(); // "فلان فلان شده"
```

## مشارکت در توسعه 🛠

ما از مشارکت‌های شما استقبال می‌کنیم! لطفاً مراحل زیر را دنبال کنید:

1. **فورک کنید** ریپازیتوری را.
2. **یک برنچ جدید بسازید**: `git checkout -b feature-branch`.
3. **تغییرات خود را کامیت کنید**: `git commit -m "افزودن ویژگی جدید"`.
4. **به برنچ خود پوش کنید**: `git push origin feature-branch`.
5. **یک Pull Request ایجاد کنید**.

## مجوز 📄

چرت‌وپرت تحت مجوز **MIT License** منتشر شده است.

---

با ❤️ برای جامعه‌ی برنامه‌نویسان فارسی‌زبان 🚀