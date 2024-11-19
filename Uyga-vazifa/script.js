'use strict'

let numbersOfSeries = prompt("Nechta serial ko'rdingiz?")

let seriesDB = {
    count: numbersOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false
}

seriesDB['age'] = '20'

let a = prompt("Oxirgi ko'rgan serailingiz?"),
b = prompt("Necha baho berasiz?"),
c = prompt("Oxirgi ko'rgan serailingiz?"),
d = prompt("Necha baho berasiz?");

seriesDB.series[a] = b // biza qachonki object ga hususiyat berarkanmiza unga . bilan emas [] kavs bilan beramiz agarda string yozmoqchi bo'lsak "" lar bilan yozamiz
seriesDB.series[c] = d // biza qachonki object ga hususiyat berarkanmiza unga . bilan emas [] kavs bilan beramiz agarda string yozmoqchi bo'lsak "" lar bilan yozamiz

console.log(seriesDB)