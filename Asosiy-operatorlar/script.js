'use strict'

// Javascript dasturlash tilida odatda quyidagi operatorlar turlari mavjud:

// 1. Arifmetik (arifmetic) operatorlar
// 2. Solishtirish (comparison) operatorlar
// 3. Tayinlash (assignment) operatorlar

// =====================================================================================================================

// 1. Arifmetik (arifmetic) operatorlar
let a = 5, b = 10;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a++); // o'z qiymatini saqlab turadi lekin console.log() da ko'rsatilmaydi shuning uchun ham biz a o'zgaruvchini keyingi qatorda chaqirishimiz kerak bo'ladi
console.log(a);
console.log(b--); // o'z qiymatini saqlab turadi lekin console.log() da ko'rsatilmaydi shuning uchun ham biz a o'zgaruvchini keyingi qatorda chaqirishimiz kerak bo'ladi
console.log(b);

// =====================================================================================================================
// =====================================================================================================================

// 2. Solishtirish (comparison) operatorlar
// tafsif: solistirish operatorlarida bizga ko'pincha BOOLEAN qiymatni qaytaradi
let c = 10, d = 20, e = '10';
console.log(c == d); // ma'lumot turini xisobga olmagan xolda 2 qiymatni solishtirish
console.log(c === d); // ma'lumot turini xam xisobga olgan xolda 2 qiymatni solishtirish
console.log(c != d); // bu yerda biz c d ga teng emasligini tekshiryabmiz to'gri ular teng emas "true"
console.log(c != e); // bu yerda biz c e ga teng emasligini tekshiryabmiz lekin ular teng shuning uchun "false"

// =====================================================================================================================
// =====================================================================================================================

// 3. Tayinlash (assignment) operatorlar
let f = 5, g = 10, h =  15;
console.log(f); // 5
f = g
console.log(f); // 10
console.log(f);
f += g
console.log(f);

let m = 10, n = 5
m *= n
console.log(m);


// =====================================================================================================================
//                                                  PRACTICE PRACTICE PRACTICE
// =====================================================================================================================

let y = 15, z = 4;
console.log(y + z) // javob: 19
console.log(y - z) // javob: 11
console.log(y * z) // javob: 60
console.log(y / z) // javob: 3.75
console.log(y % z) // javob: 3
console.log(y ** z) // javob: 50625