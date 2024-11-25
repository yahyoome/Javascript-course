"use strict";

let numbersOfSeries = prompt("Nechta serial ko'rdingiz?");

let seriesDB = {
  count: numbersOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};

seriesDB["age"] = "20";

function optimisition() {
  if (seriesDB.count <= 5) {
    console.log("Kam serial ko'ribsiz");
  } else if (seriesDB.count > 5 && seriesDB.count < 10) {
    console.log("Siz klassic tomoshabin ekansiz");
  } else {
    console.log("Siz serialchi zvezda ekansiz");
  }
}
optimisition();

function twoQuestion() {
  for (let i = 0; i < 2; i++) {
    let a = prompt(`Oxirgi ko'rgan serailingiz # ${i + 1}`),
      b = +prompt(`Necha baho berasiz # ${i + 1}`);

    if (a != null && (b != null) & (a != "") && b != "") {
      seriesDB.series[a] = b; // biza qachonki object ga hususiyat berarkanmiza unga . bilan emas [] kavs bilan beramiz agarda string yozmoqchi bo'lsak "" lar bilan yozamiz
      console.log("Done");
    } else {
      console.log("Error");
      i--;
    }   
  }
}

twoQuestion();

function showDB(isPrivate) {
  if (!isPrivate) {
    console.log(seriesDB);
  } else {
    console.log("Siz ma'lumotlarni ko'ra olmaysiz");
  }
}

showDB();

function writeGenres() {
  for (let i = 0; i < 3; i++) {
    let likedGenres = prompt(`Yaxshi ko'rgan janringiz # ${i + 1}`);
    seriesDB.genres[i] = likedGenres;
  }
}

writeGenres();
