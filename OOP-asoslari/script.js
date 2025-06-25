'use strict'

// oop - asoslari

const suvCars = {
    weight: 1000,
    length: 3,
    speed: function () {
        console.log('100km/h')
    }
}

// agar biza object ni ichiga function yozsak bu method() deb ataladi

const nexia = {
    weight: 800,
}

// vorislanishning eski usuli lekin foydali emas
nexia.__proto__ = suvCars

// vorislanishning yangi usuli
Object.setPrototypeOf(nexia, suvCars)
Object.setPrototypeOf('nimani vorislantirish', 'nimadan vorislantirish')

console.log(nexia);
