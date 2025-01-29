// Massivlar

const colors = ['green', 'red', 'blue', 'black']

console.log('Massiv uzubligi: ', colors.length)
console.log('Index yordamida element olish: ', colors[2])

// Pop va Push

// Pop() - bu massivni ohiridagi element ni o'chirib tashlatdi
console.log("Ohirigi elementni o'chirish: ", colors.pop())

// Push() - bu massivni ohiriga yangi element qo'shib beradi    
console.log('Ohiriga yangi element qoshish: ', colors.push('brown'))

// shift va unshift

// Shift() - bu massivni boshidagi elementni o'chirib tashlaydi
console.log('Boshidagi elementni ochirish:', colors.shift())

// Unshift() - bu massivni boshiga yangi element qo'shib beradi
console.log('Massivni boshiga element qoshish: ', colors.unshift('gray'))

console.log(colors);

// massiv ni ya'ni array iteratsiya qilish

const cars = ['mers', 'bmw', 'mclaren', 'porsche', 'dodge']

// bizada yana sort() degan method ham bor
// bu method() nima qila oladi bizni massivlarimizni tartiblab beradi alifbo bo'yicha
// sort() methodi faqatgina string ma'lumot turi bo'yicha tartiblab beradi
cars.sort()
console.log(cars)

// number bo'yicha tartiblash uchun
const numberss = [12, 2, 5, 21, 9]
numberss.sort(compire)
function compire(a, b) {
    return a - b
}
console.log(numberss)

// #1
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

// #2
for (let car of cars) {
    console.log(car)
}

// #3
colors.forEach((item, index, arr) => {
    console.log(`Har bitta element: ${item}, Har bitta elementni indeksi: ${index}, O'bshiy array: ${arr}`)
})

// Suhbatda so'raladigan savollar
// Ish beruvchi: array ga shunday qilib element qo'shish qanchalik to'gri

const numbers = [1,2,3,4,5]
numbers[99] = 100
// men: bu yo'li not'og'ri chunki biz yozgan massiz buzilib ketadi
console.log(numbers.length)
console.log(numbers)

// biza yana string ma'lumot turini array ya'ni massiv ga aylantibib olishimiz ham mumkin bo'ladi
const socialMedia = 'Telegram, Youtube, Instagram'
const myFavouriteScoialMedias = socialMedia.split(', ')
console.log(myFavouriteScoialMedias)

for (let myFavouriteScoialMedia of myFavouriteScoialMedias) {
    console.log(myFavouriteScoialMedia)
}
// biza split yordamida string ni array[] ga aylatirib oldik

// biza yana array ni ichidagi elemetlarni oldiga hohlagan narsamizni qo'shib qo'yishimiz mumkin bo'ladi
const newArr = myFavouriteScoialMedias.join('-')
console.log(newArr)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let fruits = ['banana', 'apple', 'grapes']
console.log(fruits[1])