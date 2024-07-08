// "use strict";

// let ism = "Abbosbek";
// console.log(ism);

// let familya = "Omonov";
// console.log(familya);

// let yosh = "20";
// console.log(yosh);

// let org = prompt("harbiy bazga kirmoqchimisiz ?");

// if (org >= 15) {
//   console.log("Kirishingiz mumkin: " + org);
// } else if (org == 15) {
//   console.log("Kirishingiz mumkin");
// } else {
//   console.log("kirishingiz mumkin emas");
// }

// function checkThirdWord(text, inputWord) {

//     var words = text.split(" ");

//     if (words.length < 3) {
//         return "The text does not have 3 words.";
//     }

//     var thirdWord = words[2];

//     if (thirdWord.startsWith(inputWord)) {
//         return "Yes, the third word starts with the given letter or word.";
//     } else {
//         return "No, the third word does not start with the given letter or word.";
//     }
// }

// var text = "This new application is very useful";
// var inputWord = "ap";
// console.log(checkThirdWord(text, inputWord));

// let text1 = "Hello World news end to string";
//         let ball  = prompt("So/'z kiriting: ");
//         let ballSplit = ball.split(' ')[2];
//         let textBall = ballSplit.at(0);
//         if (!ball) {
//             location.reload();
//         }
//         if (
//

//             textSplited.slice(0, 1) == ball.toUpperCase();

//             textSplited.slice(0, 1) == ball.toLowerCase();
//             ) {
//             console.log(true);
//             if (ballSplited == ball.toUpperCase()) {
//                 console.log(ballSplited + ' - Katta harf bilan boshlangan');
//             } else {
//                 console.log(ballSplited + ' - Kichgina harf bilan boshlangan');
//             }
//         }

let app = prompt("Xush kelibsiz so/'z kiriting:");
let text = prompt("Topiladigan so/'z ? ");

let spliteWord = app.split("")[2];
let sliceWord = spliteWord.slice(0, 1);
let matchWord = text.match(new RegExp(sliceWord, "ig"));
let result = text.includes(matchWord);
console.log(result);

if (sliceWord == app.toUpperCase()) {
  console.log(sliceWord + "Katta harf bilan boshlansin so/'z");
} else {
  console.log(sliceWord + "Kichkina harf bilan boshlansin so/'z");
}

if (sliceWord == app.toLocaleLowerCase()) {
  console.log(sliceWord + "Kichkina harf bilan boshlansin so/'z");
} else {
  console.log(sliceWord + "Katta harf bilan boshlansin so/'z");
}
