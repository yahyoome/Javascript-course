'use strict'

// const age = +prompt(" How old are you?", "")
const age = 26

if (age > 25) {
    console.log('Horror films')
} else {
    console.log("Carton")
}

age ? console.log('Horror') : console.log('Cartoon')

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
