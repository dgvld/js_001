// // Project Censor

// function censor() {
//     const censoredArr = []; // [ ['asv', 'sds'], ['aaa', 'bbb'] ]
//         return function(str1, str2 = '') {
//             if(str2) {
//                 censoredArr.push([str1, str2]);
//             } else {
//                 for (let pair of censoredArr) {
//                     str1 = str1.replace(new RegExp(pair[0], 'gi'), pair[1])
//                 }   
//                 return str1; 
//             }
//         }
// }

// const changeScene = censor();

// changeScene('php', 'JS');

// changeScene('backend', 'frontend');

// console.log(changeScene('PHP is the most popular programming language for backend web-development')); // должно распечатать 'JS is the most popular programming language for frontend web-development'


// function censor() {
//     let newArray = [];
//         const newFunc = (lang, dev = 0) => {
//             if(dev !== 0) {
//                 newArray.push(lang, dev);
//             } else {
//                 let str = lang;
// //                console.log(str.replace(newArray[0], newArray[1]));
// //                console.log(str.replace(newArray[2], newArray[3]));
//                 str = str.replace(newArray[0], newArray[1])
//                 str = str.replace(newArray[2], newArray[3])
//  //               console.log(str);
//                 return str;
//             }
//         }
//         return newFunc;
// }

// const changeScene = censor();

// changeScene('PHP', 'JS');

// changeScene('backend', 'frontend');

// console.log(changeScene('PHP is the most popular programming language for backend web-development')); // должно распечатать 'JS is the most popular programming language for frontend web-development'



// This

// const supporter1 = {
//     club: 'Milan',
    
//     chant() {
//         const func = () => console.log('Forza ' + this.club);
//         setTimeout(func, 1000);
//     }
// }
// supporter1.chant();

// const supporter2 = {
//     club: 'Inter'
// }
// supporter2.chant = supporter1.chant.bind(supporter2);

// supporter2.chant();

const developer = {
    name: 'Mikhail',
    salary: 2500,

    getBonus(sum) {
        console.log(this.name, 'has a salary this month', this.salary + sum);
    }
}
// // developer.getBonus();

const manager = {
    name: 'Anna',
    salary: 1800,
}
// developer.getBonus.bind(manager, 300)(); // сразу вызываем
//  developer.getBonus.call(manager, 150); // 150, 200 ... значения передаются через запятую, тоже вызываем
// developer.getBonus.apply(manager, [150]); // [150, 200 ...] значения передаются в массиве, тоже вызываем

//developer.getBonus(160);

manager.getBonus = developer.getBonus.bind(manager);
manager.getBonus(150);

for (let prop in manager) {
    console.log(prop, manager[prop]);
}




// const cat = {
//     name: 'Murka',
//     say() {
//         const greeting = () => console.log(this.name);
//         setTimeout(greeting, 1000);
//     }
// }
// cat.say(); // Murka

// const cat2 = {
//     name: 'Murka',
//     say() {
// //        const greeting = () => console.log(this.name);
//         function greeting () {console.log(this.name)};
//         setTimeout(greeting, 1000);
//     }
// }
// cat2.say(); // empty string

// const cat3 = {
//     name: 'Murka',
//     say() {
// //        const greeting = () => console.log(this.name);
//         function greeting () {console.log(this)};
//         setTimeout(greeting, 1000);
//     }
// }
// cat3.say(); // Window file

// Closure

// Функции, которые возвращаются из других функций.
// Возвращаемая функция запоминает scope.

// function addByX(num1) {
//   const addSum = (num2) => console.log(num1 + num2);
//   return addSum;
// }
// const addByXY = addByX(4);
// addByXY(3);
// console.log(addByXY.__proto__);

// function hello(name){
//     const helloName = () => console.log('hello', name);
//     return helloName;
// }
// const helloWorld = hello('world');
// helloWorld();

// 2 example
// function outer() {
//     let counter = 0;
//     function incrementCounter() {
//         console.log(++counter);
//     }
//     return incrementCounter;
// }
// const myCounter1 = outer();
// myCounter1();
// myCounter1();
// myCounter1();

// const myCounter2 = outer();
// myCounter2();
// myCounter2();
// myCounter2();

// Recursion - функция вызывает саму себя
// task

// let count = 1;
// function getLength(array) {

//     if (array == false){
//       return count;
//     } else {
        
//       array.pop();
//       count ++;
//       return getLength(array);
//     } 
//   }

// let lengthArr = 0
// function getLength(arr){
//     lengthArr++
//   return arr.pop() ? getLength(arr) : lengthArr;
// }

// function getLength(array) {
//     return (array[0]) ? 1 + getLength(array.slice(1)) : 0;
// }

// console.log(getLength([1, 2, 3, 4, 5]));


// 1. Базовое условие (терминальное);
// 2. Правило движения по рекурсии;

// function recurse() {
//     return recurse();
// }
// recurse();

// function factorial(n) {
//   if(n === 0) return 1;
//   return n * factorial(n -1);
// }

// console.log(factorial(5)) // 5 * 4 * 3  * 2 * 1

// //example2
// let counter = 0;
// // принимает символ и возвращает этот символ в 5 экземплярах
// function repeater(char) {
//     counter++;

//     if(counter === 5) {
// //        counter = 0;
//         return char;
//     }
//     return char + repeater(char);
// }

// console.log(repeater('a'))

// // Higher order functions
// Callback functions

// Task

// function filterArray(array, callback) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i += 1) {
//       if (callback(array[i])) newArray.push(array[i]);
//     }
//     return newArray;
//   }
  
//   function isOdd(num) {
//     return num%2;
//   }
//   function isEven(num) {
//     return !(num%2)
  
//   }
//   const isOdd = (num) => num % 2 != 0;
//   const isEven = (num) => num % 2 === 0;


// const result = filterArray([1, 2, 3, 4, 5], isOdd);
// const result2 = filterArray([1, 2, 3, 4, 5], isEven);

// console.log(result);
// console.log(result2);

// function twoSquared() {
//     return 2 * 2;
// }
// twoSquared();

// function threeSquared() {
//     return 3 * 3;
// }

// function numSquared(num) {
//     return num * num;
// }

// function copyArrayAndSquareNums(arr) {
//     const output = [];

//     for (let i = 0; i < arr.length; i++) {
//         output.push(arr[i] ** 2);
//     }
//     return output;
// }

// function copyArrayAndDivideByTwo(arr) {
//     const output = [];

//     for (let i = 0; i < arr.length; i++) {
//         output.push(arr[i] / 2);
//     }
//     return output;
// }

// function copyArrayAndDoSmth(arr, instructions) {
//     const output = [];

//     for (let i = 0; i < arr.length; i++) {
//         output.push(instructions(arr[i]));
//     }
//     return output;
// }

// function numSquared(num) {
//     return num * num;
// }

// function divideBy2(num) {
//     return num / 2;
// }

// const result = copyArrayAndDoSmth([1, 2, 3], numSquared);
// const result2 = copyArrayAndDoSmth([10, 20, 30], divideBy2);


// console.log(result);
// console.log(result2);

// const nums = [1, 2, 3, 4];
// const res = copyArrayAndSquareNums(nums);
// console.log(res);






// // Scope - область видимости;

// let isValid = false;
// const str = 'Hello';

// function isString(str) {
//     const isValid = typeof str === "string";

//     return isValid;
// }

// const res = isString('123');
// console.log(res);
// console.log(isValid);

// let message = '12';
//  const age = 15;

// if (age >= 18) {
//     let message = 'Hello'
// } else {
//     let message = 'Adios'
// }
// console.log(message);

// {
//     let myName = 'Mikhail';
// }

// for (let prop in obj) {}

// console.log(prop);

// // Arrow Function
// let checkAge = age => age >= 18 ? 'welcome' : 'access denied';
// console.log(checkAge(19));


// // Multiply Arrow Function
// let multiply = (c, t) => c * t;
// console.log(multiply(3, 5));

// // Square Arrow Function
// let square = x => x ** 2;
// console.log(square(5));

// Average Function Expression

// let average = function(a, b, c, d) {
//     return (a + b + c + d) / 4;
//   };
// let a = average(2, 4, 4, 2);
// console.log(a);

// // Варианты записи функций

// // 1. Function Declaration
// sum(1, 4); // Все Function Declaration можно вызвать в любой момент
// function sum(a, b) {
//     return console.log(a + b);
// }

// // 2. Function Expression
// const sub = function (a, b) { // for example: const e = sub
//     return a - b;
// }
// sub(5, 4);


// // 3. IIFE (Immediately-invoked function expression) // Немедленно-вызванная функция
// (function(a, b) {
//     console.log(a * b);
// })(5, 34)



// // 4. Arrow function // Стрелочные функции
// const divide = (a, b) => {
//     return a / b;
// }
// // or

// const division = (a, b) => a + b; // Если тело функции состоит из одной строчки, неявный return
// // or
// const add1 = x => x + 1; // Если в функцию передается один параметр, то скобки можно не писать, но
// // с учетом стайл-гайда принятого в компании приходится писать скобки:
// const add2 = (x) => x + 1; 


// // execution context контекстный вызов функции
// // function sum(a, b) {
// //     return a + b;
// // }

// const result1 = sum(4, 6);
// const result2 = sum(5, 8);

// // Функции vs процедуры
// // function sum(a, b) {
// //     return a + b;
// // }

// // const result = sum(4, 6);
// // console.log(result);

// // function sum2(a, b) {
// //     console.log(a + b);
// // }