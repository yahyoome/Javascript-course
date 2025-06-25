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

// biza endi objectni uzunligini bilishimiz kerak lekin length faqat array massiv uchu ishlaydi
// lekin bizada boshqacha usul ham bor Object uchun

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
 
// biza object ni ichida method() yaratishimiz ham mumkin

const love = {
    name: 'M',
    year: 2008,
    job: 'Tikuvchi',
    hobbies: {
        reading: 'Books',
        listening: 'Quran'
    },
    sayHello: function () {
        console.log(`Hello M`)
    }
}

console.log(love)

// biza hardoyim ham: love.name, love.year, qilib o'tirmasdan ham key larni chaqirishimiz mumkin

const { name, year, job, sayHello, hobbies: {reading, listening} } = love
console.log(reading)

sayHello()

// bu esa distruktizatsiya deb ataladi