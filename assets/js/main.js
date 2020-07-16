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
