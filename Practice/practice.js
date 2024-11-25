'use strict'

const person = {
    name: 'Yahyobek',
    year: 2008,
    job: 'Frontend web developer',
    hobbies: {
        sport: 'Football',
        game: 'Minecraft',
    },
}

for (let key in person) {
    if(typeof person[key] === 'object') {
        for (let hobbiesKey in person[key]) {
            console.log(`Property: ${hobbiesKey}, Value: ${person[key][hobbiesKey]}`)
        }
    } else {
        console.log(`Property: ${key}, Value: ${person[key]}`)
    }
}

// distruktizatsiya

const { name, year, job, hobbies: { sport, game } } = person
console.log(sport)