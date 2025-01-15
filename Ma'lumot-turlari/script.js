'use strict'

// Number
let number = 12; // Data Type = Number
console.log(-8 / 0) // Infinity && -Infinity
console.log('yahyo' * 12) // NaN = Not a Number: Son emas degan manoni bildiradi

// <====================================================================================>

// String
let myName = 'Yahyobek' // string ni faqat qo'shtirnoq yoki birtirnoq yoki baksic ni ichiga yozishimiz kerak boladi

// <====================================================================================>

// Boolean
let isMarried = false // yo'q || noto'g'ri
let isCircleEarth = true // ha || to'g'ri   
console.log(isMarried, isCircleEarth)

// <====================================================================================>

// Null
// eslatma: null = bu yoq o'zgaruvchini ishlatsak bu null ga teng bo'ladi
// console.log(loveName)

// <====================================================================================>

// Undefined
// eslatma: qachonki biza o'zgaruvchi ochib lekin unga value ya'ni qiymat bermasak u o'zgaruvchi Undefined ga teng bo'ladi
let whoIs;
console.log(whoIs)    

// <====================================================================================>

// null va undefined farqi
// undefined da o'zgaruvchi bor lekin valu ya'niy qiymati yo'q
// null da esa yo'q o'zgaruvchini chaqirsak null qaytaradi    

// <====================================================================================>

// Object
let thief = {
    age: 30,
    jacket: 'blue',
    isLong: false,
}    

console.log(thief.age)
console.log(thief['age']) // Ko'rib turganingizdak biza objectni ichidagi ma'lumotni 4-burchak kavs bilan olsak ham bo'ladi

// <====================================================================================>

// Array and massiv
const colors = ['red', 'black', 'green']    
console.log(colors[2]) // Javascrptda sanoq sistemasi 0 dan boshlanadi shuning uchun hozir colors[2] = green ga teng bolyabdi

const fruits = ['apple', 'banana', 'cherry', { name: 'Yahyobek', age: 17 }]
console.log(fruits[3].name) // massiv ni ichidagi objectni olish usuli

const cars = []
cars[0] = 'BWM';
cars[1] = 'MERS';
cars[2] = 'MCLAREN'; // massiv ga yangi qiymat qo'shish usuli
console.log(cars);


// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================

// Mening qisqacha fikrim
// Javascriptda 7 ta ma'lumot turlari bor

// 1) String = ''
// 2) Number = 12
// 3) Null = ?
// 4) Undefined = isMarried
// 5) Boolean = false & true
// 6) Object = {}
// 7) Array = []