"use strict";

// let btnClick = document.querySelector(".click");
// let body = document.querySelector("body");


// let color = new webkitSpeechRecognition();
// color.lang = "EN-en";

// color.onresult = function (e) {
//     let transcript = e.results[0][0].transcript.trim().toLowerCase();
//     if (transcript === "red") {
//         document.body.style.backgroundColor = "red";
//         console.log("Fon rangi qizilga o'zgartirildi");
//     } else if (transcript === "green") {
//         document.body.style.backgroundColor = "green";
//         console.log("Fon yashilga  o'zgartirildi");
//     } else if (transcript === "blue") {
//         document.body.style.backgroundColor = "blue";
//         console.log("Fon ko'kga  o'zgartirildi");
//     } else if (transcript === "yellow") {
//         document.body.style.backgroundColor = "yellow";
//         console.log("Fon sariqga  o'zgartirildi");
//     } else if (transcript === "violet") {
//         document.body.style.backgroundColor = "violet";
//         console.log("Fon binafshaga  o'zgartirildi");
//     } else if (transcript === "aqua") {
//         document.body.style.backgroundColor = "aqua"
//         console.log("Fon aqua ga o'zgartirildi");
//         if (document.body.style.backgroundColor === "aqua") {
//             btnClick.style.backgroundColor = "blue";
//             console.log("Fon rangi aqua bo'lsa, tugma rangi blue ga o'zgartirildi");
//         }
//     } else {
//         console.log("Bunday ranglarni bilmas ekanman");
//     }



// };

// function clickBtn() {
//     color.start();
// }




//-----------------------2-misol---------------------

// const arr1 = [5, 6, true, null, 8];
// const arr2 = [0, 2, 5, false, 6];

// const combinedArr = arr1.concat(arr2);
// const sum = combinedArr.reduce((acc, val) => {
//     if (typeof val === 'number') return acc + val;
//     return acc;
// }, 0);

// console.log("yig'indi:", sum);

//-----------------------3-misol---------------------

// let arr = [34, 12, 5, 76, 22];
// let minIndex = arr.indexOf(Math.min(...arr));

// console.log("eng kichik son indeksi:", minIndex);

//-----------------------5-misol---------------------

// let arr1 = [5, 4, 3, 6, 3, 7, 1];
// let arr2 = [22, 1, 42, 34, 55, 67, 11, 32];

// let mergedArr = arr1.concat(arr2);
// mergedArr.sort((a, b) => a - b);

// console.log(mergedArr);

//-----------------------6-misol---------------------

// let carsArr = [
//     { 
//         name: "Lasetti", 
//         price: 9000 
//     },
//     { 
//         name: "Damas", 
//         price: 7800 
//     },
//     { 
//         name: "Cobalt", 
//         price: 12500 
//     },
//     { 
//         name: "Gentra", 
//         price: 14000 
//     },
//     { 
//         name: "Onix", 
//         price: 1700 
//     }
// ];

// carsArr.sort((a, b) => a.name.localeCompare(b.name));
// console.log("name si bo'yicha:", carsArr);

// carsArr.sort((a, b) => a.price - b.price);
// console.log("price si boyicha:", carsArr);

//-----------------------7-misol---------------------

// let arr = ["Salom", "Raxmat"];
// arr.splice(1, 0, "Yaxshi", "Yomon");

// arr.forEach(word => console.log(word));

//-----------------------8-misol---------------------

// let i = prompt("So'z kiriting:")
// let a = prompt("Raqam kiriting:")

// function reverseString(input) {
//     if (typeof input === 'string') {
//         return input.split('').reverse().join('');
//     } else if (typeof input === 'number') {
//         return parseInt(input.toString().split('').reverse().join(''), 10);
//     } else {
//         return "Invalid input";
//     }
// }

// console.log(reverseString(i)); 
// console.log(reverseString(a)); 