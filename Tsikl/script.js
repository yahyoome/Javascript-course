'use strict'

let startNum = 0

// First Tsikl

while (startNum <= 10) {
    console.log('First Tsikl', startNum)
    startNum++
}

// Second Tsikl

do {
    console.log('Second Tsikl', startNum)
    startNum++
} while (startNum <= 20)

// Third Tsikl

for (let i = 0; i <= 30; i++) {
    console.log('Third Tsikl', i)
}

// practice =================================================================

for (let i = 0; i <= 10; i++) {
    if (i === 8) {
        // break // sindirib beradi ya'ni 8 ga yetib bormidi
        continue // 8 tashlab otib yo'lida davom etadi
    }
    console.log('Practce', i)
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const vaqtlar = 1

switch(vaqtlar) {
    case 'Dushanba': 1
        break;
    case 'Seshanba': 2
        break;
    default: vaqtlar        
}

console.log(vaqtlar);