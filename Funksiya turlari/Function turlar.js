'use strict'

// Funktsiya bu bizni yozgan code larimizni qayta takrorlanishini oldidi oladi

// #1 function decloration
// function decloration haqida: Function ishga tushishdan oldin chaqiradi va uni yuqorisida ham ishlatish huquqini beradi
function showHelloWorld() {
    console.log('Hello World')
}

showHelloWorld()

// Tafsif funktsiya 4 ga bo'linadi
// 1: function = bu kalit so'z
// 2: showHelloWorld = bu funktsiya nomi
// 3: () = argument da biz o'zimizni dinamik ma'lumotlarimizni berishimiz mumkin
// 4: {} = buning ichiga biz qiladigan ishlarimizni yozishimiz kerak bo'ladi

// Eslatma: funktsiya yozganimizdan keyin uni doyimo chaqirishimiz kerak bo'ladi

// =================================================================================================

const age = 20 // bu Global o'zgaruvchi
// Global o'zgaruvchi haqida: Global o'zgaruvchi Local o'zgaruvchidan farq qiladi o'zgaruvchi Global bo'lishi uchun nima qilish kerak shunchaki u o'zgaruvchini funktsiyadan tashqariga yozsak kifoya!

function showHelloToUser(name) {
    const age = 18 // bu Local o'zgaruvchi 
    // Local o'zgaruvchi haqida: Local o'zgaruvchi faqatgina funktsiyani ichida ishlatiladi ya'ni jingalak kavsning ichida
    console.log(`Hello ${name}! He is ${age} years old`)
}

showHelloToUser('Yahyoo')
console.log(age)

// =================================================================================================

function calculate(a, b) {
    return a + b // return haqida: return bu bizaga yozgan code larimizni qaytarib beradi lekin return dan keyin umuman code yozib bo'lmaydi chunki return dan keyin code yozsak barcha code larimiz blocklanadi shuning uchun code larimizni return dan oldin yozishimiz kerak "return" bizga ko'proq narsalarni taklif qiladi
}

const calcAdd18 = calculate(1,3)
const calcAdd20 = calculate(1,3)

console.log(calcAdd18 + 5)
console.log(calcAdd20 + 10)

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// #2 function expression
// function expression haqida: code ketma ketligi kelganda function yaratiladi, va faqat undan keyin ishlatish mumkin
const showHelloWorld2 = function() {
    console.log('Hello JS')
}
showHelloWorld2()

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// #3 arorow function 
// arrow function haqida: contects this ga ega emas ya'ni qanday
// this.name this.age
const closeHelloWorld = (name) => {
    console.log(`Hello ${name}`)
}

closeHelloWorld('Yahyobek')