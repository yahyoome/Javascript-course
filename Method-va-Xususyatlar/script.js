'use strict'

// String methods

const password = '    salom_12   '

// 1) length = ichidagi valyusi nechtaligini aniqlab beradi
// eslatma = length string property hisoblanadi
let myName = 'Yahyobek'
console.log(myName.length)

// 2) Method ni doyim chaqirishimiz kerak bo'ladi: toUpperCase = toUpperCase()
const myLove = 'Mubina'
console.log(myLove.toUpperCase())

// 3) charAt() = Bizga kerakli bo'lgan harfni topib beradi
const chartAt = 'charts'
console.log("Bizga kerakli bo'lgan harfni topish uchun", chartAt.charAt(2))
console.log("charAt() ni ikkinchi usuli", chartAt[2])

// 4) slice() = Bizga yozgan text timizni hohlagan joyidan kesib olish imkonini beradi
const slicedText = 'Hello World'
console.log(slicedText.slice(0, -3));

// 5) trim() = Bizga ortiqcha prabellarimizni tozalab beradi
console.log(password.trim()) 
console.log(password.trimStart()) // boshidan space olib tashlash
console.log(password.trimEnd()) // ohiridan space olib tashlash

// ===============================================================================================================

// Number methods

const number = 12
const width = '240.42px'
    
console.log("Eng yaqin sonni oladi", Math.round(number))
console.log("Sonni butun songa aylantirib beradi", Math.floor(number))
console.log("Stringdagi malumotni butun number son ga aylantirib beradi", parseInt(width))
console.log("Stringdagi malumotni number son ga aylantirib beradi", parseFloat(width))