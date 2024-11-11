'use strict'

let numbersOfSeries = prompt("Nechta serial ko'rdingiz?")

let seriesDB = {
    count: numbersOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false
}

let a = prompt("Oxirgi ko'rgan serailingiz?"),
b = prompt("Necha baho berasiz?"),
c = prompt("Oxirgi ko'rgan serailingiz?"),
d = prompt("Necha baho berasiz?");

seriesDB.series[a] = b // biza qachonki object ga hususiyat berarkanmiza unga . bilan emas [] kavs bilan beramiz
seriesDB.series[c] = d // biza qachonki object ga hususiyat berarkanmiza unga . bilan emas [] kavs bilan beramiz

console.log(seriesDB)