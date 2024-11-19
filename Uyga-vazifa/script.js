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

function optimisition() {
    if (seriesDB.count <= 5) {
        console.log("Kam serial ko'ribsiz")
    } else if (seriesDB.count > 5 && seriesDB.count < 10) {
        console.log("Siz klassic tomoshabin ekansiz")
    } else {
        console.log("Siz serialchi zvezda ekansiz")
    }
}
optimisition()

for (let i = 0; i < 2; i++) {
    let a = prompt("Oxirgi ko'rgan serailingiz?"),
    b = +prompt("Necha baho berasiz?");
    
    if (a != null && b != null & a != '' && b != '') {
        seriesDB.series[a] = b // biza qachonki object ga hususiyat berarkanmiza unga . bilan emas [] kavs bilan beramiz agarda string yozmoqchi bo'lsak "" lar bilan yozamiz 
        console.log('Done')
    } else {
        console.log('Error')
        i--;
    }
}
console.log(seriesDB)