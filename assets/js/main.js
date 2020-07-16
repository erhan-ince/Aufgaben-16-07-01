//Lev1_4_js-vertiefung_arrays_split()---------
let meinText1 = 'Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.';
let meinText2 = 'Wie geht es dir heute?';
let meinText3 = 'Heute ist ein großer Tag für uns.';
let split1 = meinText1.split();
let split2 = meinText1.split('');
let split3 = meinText1.split(' ');
console.log(split1);
console.log(split2);
console.log(split3);
let split4 = meinText2.split();
let split5 = meinText2.split('');
let split6 = meinText2.split(' ');
console.log(split4);
console.log(split5);
console.log(split6);
let split7 = meinText3.split();
let split8 = meinText3.split('');
let split9 = meinText3.split(' ');
console.log(split7);
console.log(split8);
console.log(split9);

//Lev1_1_js-vertiefung_array-sort_sort()

var languages = [
   'JavaScript',
   'Python',
   'Java',
   'Ruby',
   'PHP',
   'C++',
   'CSS',
   'C#',
   'Go',
   'C',
   'TypeScript',
   'Swift',
];
languages.sort();
console.log(languages);
languages.reverse();
console.log(languages);

//Lev1_3_js-vertiefung_array-sort_number-sort()

var numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
numArray1.sort((a, b) => a - b);
console.log(numArray1);

//Lev2_1_js-vertiefung_array-sort_reverse-name

let str11 = ['Sergio', 'Hannah', 'Regallager', 'Reliefpfeiler', 'Rentner'];
let string_reverse = str11.reverse((elt) => {
   return;
});
console.log(string_reverse);

let string1 = 'Ella mag alle Bohnen';
let newString1 = string1.split('').reverse().join('');

console.log(newString1);

//Lev2_2_js-vertiefung_array-sort_bigger-numbers
var numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
// function sortierung3(a, b) {
//    return a - b;
// }

numArray2.sort((a, b) => a - b);
console.log(numArray2);

//Lev1_1_js-vertiefung_array-interation_forEach()

let drinks = [
   'Coca-Cola',
   'Apfelsaft',
   'Pepsi',
   'Traubensaft',
   'Sprite',
   'Orangensaft',
   'Red Bull Energy Drink',
   'Fanta',
];
drinks.sort();
drinks.forEach((elt) => {
   document.getElementById('list').innerHTML += `<ol>${elt}</ol>`;
});

//Lev1_2_js-vertiefung_array-interation_map()
let drinksCapitalize = drinks.map((elt) => {
   return elt.toLocaleUpperCase();
});
console.log(drinksCapitalize);
// console.log(deutschlandUpperCase);
// let deuschlandCapitalize = deutschlandLowerCase.map((elt) => {
//    return elt.charAt(0).toUpperCase() + elt.slice(1);
// });

// Lev1_3_js-vertiefung_array-interation_map()_sort_math-random

let array = [
   18,
   16,
   80,
   51,
   47,
   38,
   95,
   42,
   68,
   61,
   34,
   51,
   20,
   17,
   56,
   31,
   100,
   6,
   5,
   30,
   74,
   97,
   28,
   99,
   91,
   27,
   73,
   12,
   92,
   6,
   27,
   71,
   26,
   15,
   78,
];

array.sort((a, b) => a - b);
let newArray = array.map((elt) => {
   return elt * 2;
});
console.log(newArray);
console.log(array);

//Lev1_4_js-vertiefung_array-interation_map()_math.round

var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
let celsius = fahrenheit.map((elt) => {
   console.log(elt);
   return console.log(Math.round((elt - 32) / 1.8));
});
// console.log(Math.round((elt - 32) / 1.8));

//Lev1_5_js-vertiefung_array-interation_forEach()

var test = [
   18,
   16,
   80,
   51,
   47,
   38,
   95,
   42,
   68,
   61,
   34,
   51,
   20,
   17,
   56,
   31,
   100,
   6,
   5,
   30,
   74,
   97,
   28,
   99,
   91,
   27,
   73,
   12,
   92,
   6,
   27,
   71,
   26,
   15,
   78,
];

let test22 = test.forEach((elt) => {
   test.sort((a, b) => a - b);
   console.log(elt);
   if (elt) {
      elt = elt / 3 == true;
      return elt + 100;
   } else {
      return elt;
   }
});
console.log(elt);
