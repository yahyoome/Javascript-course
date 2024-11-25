'use strict'

// Object va Distruktizatsiya

const person = {
    name: 'Yahyo',
    year: 2008,
    job: 'Frontend developer',
    hobbies: {
        sport: "Football",
        games: "Minecraft"
    }
}

// biza endi objectni uzunligini bilishim kerak lekin length faqat array massiv uchu ishlaydi
// kekin bizada boshqacha usul ham bor Object uchun

console.log(Object.keys(person).length)

// bu yerda hozir nima bo'ldi desangiz bu yerda bizga GLOBAL Object kerak bo'ldi

// for in - faqat object uchun
// for of - faqat massiv ya'ni array uchun

for (let key in person) {
    if (typeof person[key] === 'object') {
        for (let hobbiesKey in person[key]) {
            console.log(`Property: ${hobbiesKey}, Valu: ${person[key][hobbiesKey]}`)
        }
    } else {
        console.log(`Property: ${key}, Valu: ${person[key]}`)
    }
}

// itaratsiya haqida qisqacha tushuncha

// key bu person object ni ichidagi kalit so'zlar ya'ni
// name = key
// year = key

// darslik 15:00 dan davom ettir