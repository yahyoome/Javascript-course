'use strict'

// incr, decr
// incr: ++ = bu bizni sonimizni 1 taga oshiradi
// decr: -- = bu bizni sonimizni 1 taga kamaytiradi

let incr = 10
let decr = 10

// incr++
// decr--

console.log(incr++) // ++ ni o'zgaruchidan keyin qoysak yozgan kodimiz ishlaydi lekin korinmaydi
console.log(decr--) // -- ni o'zgaruchidan keyin qoysak yozgan kodimiz ishlaydi lekin korinmaydi

console.log(++incr) // ++ ni o'zgaruchidan oldin qoysak yozgan kodimiz ishlaydi ham korinadiham
console.log(--decr) // -- ni o'zgaruchidan oldin qoysak yozgan kodimiz ishlaydi ham korinadiham

// =====================================================================================================================

// == : bu tenglashtirish operatori
// == va === : larning farqi nimada bularning farqi === qilsak bu type gacha tekshiradi ya'ni number yoki string ligiga qarab, == bunga esa qizi'gi yoq type ni tekshirmaydi va yana faqatgina qiymatiga qarab hisoblaydi

console.log(5 * 5 === '25')

// =====================================================================================================================

// && = va
// || = yoki
// ! = teskari
// !== = teng emasmi ?

// && va || yoki ni farqi nimada
// && va da hamma narsa true bo'lishi kerak agar 1 dona false bo'lsa ham bizga false qaytaradi
// || yoki da hamma narsa false bo'lib 1 dona true bo'lsa ham bizga true qaytaradi

const isAge = true
const isClose = false
const isCheked = false

console.log(isAge || isClose && isCheked)
console.log(!isAge)