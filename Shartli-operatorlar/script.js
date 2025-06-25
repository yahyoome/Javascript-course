'use strict'

// const age = +prompt(" How old are you?", "")
const age = 26

if (age > 25) {
    console.log('Horror films')
} else {
    console.log("Carton")
}

age ? console.log('Horror') : console.log('Cartoon') // Bu shartli operatorda doyimo birinchisi true ya'ni to'gri bo'ladi

const date = 2

switch(date) {
    case 1:
        console.log('Dushanba')
        break
    case 2:
        console.log('Seshanba')
        break
    default: date        
}

console.log(date);

// Shartli operatorlar haqida qisqacha

// Shartli operatorlar o'zi bizaga nega kerak?
// Shartli opearotlar bizaga turli xil buyruq larni berish uchun kerak boladi buni tepadagi misollarda korib olishingiz mumkin