'use strict'

// alert()
alert('Hello Javascript') // eslatma: alert() bu qandaydir ogohlantirish
// alert() bizaga doyim true & false qiymat qaytaradi

// ==========================================================================

// confrim()
const place = confirm('San 18 yoshmisan?')
console.log(place)

if(place === true) {
    console.log('Bu saytga kirishing mumkin')
} else {
    console.log('Bu saytga kirish man etiladi')
}

// ==========================================================================

let favouriteColor = []

favouriteColor[0] = prompt('What is your favourite color #1')
favouriteColor[1] = prompt('What is your favourite color #2')
favouriteColor[2] = prompt('What is your favourite color #3')

console.log(favouriteColor)
