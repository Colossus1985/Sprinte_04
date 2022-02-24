let exo1 = false;
let exo2 = true;
let exo3 = false;

const countriesAPI = "https://restcountries.com/v3.1/all";

//###---Exercises: Level 1---######################################################
//  1. A l'aide de la fonction fetch(), récupérez l'ensemble des pays depuis l'adresse countriesAPI. Pour chaque pays, affichez :
if (exo1 == true) {
  let array_countries = [];

  let name_countrie;
  let capital;
  let languages;
  let population;
  let region;

  fetch(countriesAPI)
    .then((res) => {
      console.log(res);
      console.dir(res);
      const countries = res.json();
      console.log(countries);

      //if "promise" utiliser ".then"
      countries.then((res2) => {
        for (let i = 0; i < res2.length; i++) {
          capital = res2[i].capital;
          region = res2[i].region;
          name_countrie = res2[i].name;
          languages = res2[i].languages;
          population = res2[i].population;

          addCountrie(capital, region, name_countrie, languages, population);
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });

  function addCountrie(capital, region, name_countrie, languages, population) {
    let countrie = new Countrie(name_countrie, capital, languages, population, region);

    function Countrie(name_countrie, capital, languages, population, region) {
      this.name_countrie = name_countrie;
      this.capital = capital;
      this.languages = languages;
      this.population = population;
      this.region = region;
    }
    array_countries.push(countrie);
    console.log(array_countries);
  }
} else if (exo2 == true) {
  //###---Exercises: Level 2---######################################################
  //  1. A l'aide de la fonction fetch(), récupérez l'ensemble des pays depuis l'adresse countriesAPI. Affichez les 10 pays les plus peuplés.
  let array_countries2 = [];

  let array_countris_highest = [];

  let name_countrie2;
  let population2;

  fetch(countriesAPI)
    .then((res) => {
      console.log(res);
      console.dir(res);
      const countries = res.json();
      console.log(countries);

      //if "promise" utiliser ".then"
      countries.then((res2) => {
        for (let i = 0; i < res2.length; i++) {
          name_countrie2 = res2[i].name;
          population2 = res2[i].population;
          addCountrie(name_countrie2, population2);
        }
        if (array_countries2.length >= 10) {
          for (let i = 0; i < 10; i++) {
            array_countris_highest.push(array_countries2[i].name_countrie2.common);
          }
        }
        console.log(array_countris_highest);
      });
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(array_countries2);

  function addCountrie(name_countrie2, population2) {
    let countrie = new Countrie(name_countrie2, population2);

    function Countrie(name_countrie2, population2) {
      this.name_countrie2 = name_countrie2;
      this.population2 = population2;
    }
    array_countries2.push(countrie);

    array_countries2.sort((a, b) => {
      if (a.population2 < b.population2) {
        return 1;
      } else {
        return -1;
      }
    });
    //array_countries2.sort((a, b) => a.population2 < b.population2) ? 1 : -1;
    //console.log(array_countries2);
  }
} else if (exo3 == true) {
  //  2. (Facultatif) A l'aide de la fonction fetch(), récupérez l'ensemble des pays depuis l'adresse countriesAPI. Comptez le nombre total de langues officielles utilisées dans le monde.
  let array_countries3 = [];

  let array_languages = [];
  let array_languages_unique = [];

  let languages;

  fetch(countriesAPI)
    .then((res) => {
      console.log(res);
      console.dir(res);
      const countries = res.json();
      console.log(countries);

      //if "promise" utiliser ".then"
      countries.then((res2) => {
        for (let i = 0; i < res2.length; i++) {
          for (let key in res2[i].languages) {
            languages = res2[i].languages[key];
            array_languages.push(languages);
          }
        }
        array_languages_unique = uniquLanguages(array_languages).sort();
        console.log(array_languages_unique);
      });
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(array_languages);

  function uniquLanguages(array_languages) {
    var array_languages_unique = [];
    array_languages.forEach(function (item) {
      if (array_languages_unique.indexOf(item) < 0) {
        array_languages_unique.push(item);
      }
    });
    return array_languages_unique;
  }
}
