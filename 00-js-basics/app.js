
// Логические выражения

// console.log(`Hello from app.js`);
// console.log('is 5 > 2', 5 > 2);
// console.log('is equal: 5 and 5', 5 == 5);
// console.log('is equal: 5 and "5"', 5 === "5");
// console.log('is not equal: 10 and 8', 10 != 8);
// console.log('is not equal: 10 and "10"', 10 !== "10");
// console.log('is "" and "', "" === "");
// console.log('is 0 and -0', 0 === -0);
// console.log('is', true || 2 > 5 || 4 === '4');
// console.log('is', 2 == '2' && 2 === '2');
// console.log('is', 108 >= 110 || 1000 < 2000 && 3 !== 2 || 18 === '18');

//Сочетание И, ИЛИ
//console.log(1 === 2 || (2 === 3 && 4 === 4)); // false
//console.log(2 === 2 || 2 === 3 && 4 === 4); // true
 

// console.log(0 == false); //true
// console.log("" == false); //true
// console.log(+0 == false); //true
// console.log(null == false); //false
// console.log(null == true); //false
// console.log(undefined == false); //false
// console.log(undefined == true);  //false
// console.log(NaN == false);
// console.log(NaN == true);
// console.log(1 == true); //true
// console.log("gf_$" == true); //false

// Условный оператор

// }
//if (salary > 1500) console.log('I need imrove')
// let x = 7;
// if(x % 2 === 0) {
//     console.log(10)
// }
// else{
//     console.log(false)
// }
// function yourCodeInside(x){
// let isOdd;
//console.log(Boolean(x % 2 === 1));
// if(x % 2 === 1) {
//     isOdd = false 
// } else {
//     isOdd = true
// }    
//return isOdd;
//}
// alert(yourCodeInside(13));
//alert(isOdd);



// var secretNum = Math.ceil(Math.random() * 10);
// var secretNum = 3;
// var tries = 0;

// function guessNum(num) {
//     if (tries >= 5) {
//         return alert('Игра окончена!'),
//         alert('Чтобы заново начать игру, перезагрузите страницу!');
//     } 
    
//     if (num === secretNum) {
//         alert('Вы угадали!');
//         alert('Чтобы заново начать игру, перезагрузите страницу!');
//         tries = 5;
//     } else {
//         num > secretNum ? alert('Num is less!') : alert('Num is more!');
//         if(num > secretNum) {
//             alert('Загаданное число меньше!');
//         } else {
//             alert('Загаданное число больше!');  
//         }    
//         tries++;
//     }
// }

// function guessNum(num) {
//     if(num === secretNum) {
//         tries = 0;
//         alert('Угадал!');
//         alert('Начнем!');
//     } else if(tries < 5) {
//         alert('Повтори ввод!');
//     } else if (tries == 5) {
//         tries = 0;
//         alert('Попытки закончились!');
//         alert('Начнем!');
//     } else {
//         alert('Error');
//     }
//     tries++;
// }

    









//Math
// Math.PI;
// Math.random();
// Math.floor(1.9);
// Math.ceil(1.1);
//console.log(Math.round(1.5));
// Math.round(Math.random()*10);
// const multiply = (...args) => args.reduce((a, b) => a * b);
// console.log(multiply(1, 2, 2, 2));
//const euroToRub = (euro) => euro * 90;
//console.log(euroToRub(2));
// Оператор switch
// let status = 'idle';

// switch (status) {
//     case 'idle': {
//         console.log('Nothing is happening');
//         //break;
//     }
//     case 'loading':
//         console.log('Data is loading');
//         break;
//     case 'respond':
//         console.log('We have data');
//         break;
//     case 'error':
//         console.log('Something went wrong');
//         break;
//     default:
//         console.log('Error');




//Тернарный оператор
// const age = 18;

// age >= 18 ? console.log('Access granted') : console.log('Access denied');
// console.log('Access', age >= 18 ? 'granted' : 'denied');

// let isAdult = age >= 18 ? true : false;
// console.log({isAdult});

// let status = 'idle';
// let statusNumber = status === 'idle' ? 0 : 1;
// console.log({statusNumber});

// let isOdd;
// let x = 11;
// if(x % 2 === 1) {
//     isOdd = false 
// } else {
//     isOdd = true
// }    
// console.log({isOdd});

//Оператор switch. Замена if..else

// switch (x % 2) {
//     case 0:
//         isOdd = false;
//         break;
//     case 1:
//         isOdd = true;
//         break;
//     default:
//         console.log('Error');        
// }
// console.log({isOdd});

//Тернарный оператор. Замена if..else
// isOdd = (x % 2) == 0 ? false : (x % 2) == 1 ? true : 'error';
// console.log({isOdd});

//Решение задания
// const spainCapital = 'Madrid';
// let isCorrectAnswer;
// switch (spainCapital){
//     case 'Madrid':
//         isCorrectAnswer = true;
//         break;
//     case 'madrid':
//         isCorrectAnswer = true;
//         break;
//     case 'MADRID':
//         isCorrectAnswer = true;
//         break;
//     default:
//         isCorrectAnswer = false;
// }
// console.log({isCorrectAnswer});

// // Задание 2
// const a = 4;
// const b = 2;
// let result;

// result = (a + b < 4) ? 'Мало' : 'Много';
// console.log({result});

//Массивы
 //const numbers = [12, 13, 15, 21, 23];
 //console.log(numbers[0]);
 //numbers[0] = 18; // Изменение первого значения в массиве
 //console.log(numbers[0]);
 //console.log(numbers);
//numbers.push(1); // Добавление в конец массива 
 //console.log(numbers);
// numbers = [1, 2, 3];
// console.log(numbers);
// console.log(numbers.length); // Количество значений в массиве
// console.log(numbers[numbers.length - 1]); // Последнее число в массиве

//  const strs = ['abc', 'bcd'];
//  strs[4] = 'sd'; // Два пустых слота
//  console.log(strs);
//  strs.push('new item');
//  strs.push('new item 2'); // Добавление в конец массива, при это 2 пустых слота остаются
// console.log(strs);
//  console.log(strs.pop()); // Удаление последнего слота в массиве
//  console.log(strs);

//const numbers = [1, 2, 3];
// let luckyNumber = numbers[2];
// console.log({luckyNumber});
//console.log(numbers.pop());
//console.log(numbers);
//console.log(numbers.push(4, 5));
// numbers[3] = 7;
//console.log(numbers);

// //Loop
  // const numbers = [1, 2, 3, 4, 5, 6];
// let index = 0;
// while (index < numbers.length) {
//     numbers[index] *= 2;
//     console.log(numbers[index]);
//     index++;
// }
// console.log(numbers);
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// let index = 0;
// while (index < numbers.length) {
//     if(index % 2 === 1) {
//         numbers[index] *= 2;
//     }
//     index++;
// }
// console.log(numbers);

//for
// const numbers = [1, 2, 3, 4, 5, 6];
// for(let i = 0; i < numbers.length; i++){
//     numbers[i] *= 2;
//     console.log(numbers[i]);
// }
// console.log('end for loop');
// console.log(numbers[numbers.length - 1]);

// const numbers = [1, 2, 3, 4, 5, 6];
// for(let i = 0; i < numbers.length; i++){
//     numbers[i] % 2 == 1 ? numbers[i] += 3 : numbers[i];
// }
// console.log(numbers);

//Loop break

// let tries = 0; 

// // while (true) {
//     while(tries < 3) {    
//         const age = +prompt('Сколько Вам лет?');

//         if (age) {
//             alert('Welcome');
//             break;
//         }
        
//         tries++;
//         alert('Данные введены неккоректно.');
//     }    
// // }
// alert('End');

//Loop continue

// for (let i = 1; i < 10; i++) {
//     if (i % 2 === 0) continue;

//     console.log(i);
// }
// console.log('end');

//function
// function sum(a, b) {
//     if (typeof a !== 'number') {
//         return NaN;
//     }
//     console.log('a', a);
//     return a + b;
//     console.log('b', b);
// }
// sum('ff', 5);
// sum(3, 4);
//const x = sum('d', 3);
// const y = sum('d', 3);  
// console.log(x, y);
// console.log(x);

// function getNumberData(question) {
//     while(true) {
//         const res = +prompt(question);
//             if (res === 0 || res) {
//                 return res;
//             }
//     }
// }
// const age = getNumberData('Сколько тебе лет?');
// console.log(age);

// const salary = getNumberData('Какая у Вас зарплата?');

//Exercise 1

// function multiply(x, y, z) {
//     return x + y + z;
// }

// function multiply(x, y, z) {
//      while(true) {
//          const res = x * y * z;
//             if (typeof res === 'number') {
//                 return res;
//             }
//      }
// }
//console.log(multiply(1, 2, 4));
// console.log(multiply('b', 2, 3));

//alert('Hello');

// function milesToKm(x) {
//     return x*1.609;
// }
// console.log(milesToKm(1));

// const milesToKm = (miles) => miles * 1.609;
//  console.log(milesToKm(2));


//Math
// Math.PI;
// Math.random();
// Math.floor(1.9);
// Math.ceil(1.1);
// Math.ceil(Math.random()*10);
