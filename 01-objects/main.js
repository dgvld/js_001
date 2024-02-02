//Riddles

let riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это несъедобное', 'это не фрукт'],
    tries: 3,
    checkAnswer(str) {
        // TODO: написать логику проверки правильного ответа
        // alert для пользователя, console.log()
        if(this.tries < 1) {
            console.log('Игра окончена');
            return alert('Игра окончена');
        };
        if(str.toLowerCase().includes(this.correctAnswer)) {
            alert('Правильный ответ');
            console.log('Правильный ответ');
//            this.tries = 0;
            return alert('Игра окончена');
        } else {
            alert('Неправильный ответ');
            console.log('Неправильный ответ');
            this.tries--;

            const hint = this.hints[this.tries === 2 ? 0 : 1];
            if(this.tries) {  // 0 is false;
                alert('Подсказка: ' + hint);
            } else {
                return alert('Игра окончена');
            }    
        }

    }
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {

    var input = document.getElementsByTagName('input')[0];

    var guessedAnswer = input.value;
 
    if (guessedAnswer) {

        riddle.checkAnswer(guessedAnswer);  

    }

}

// let s = 0;
// console.log('0 is false', s);
// if(s) {  // 0 is false;
//     alert('true');
// } else {
//     alert('false');
// }    

// RegExp

//  const regex1 = /\w+/;
//  const regex2 = new RegExp('\\w+');
// console.log(regex2);
//  const str = 'JavaScript is cool language. Everybody should learn JavaScript';
//  console.log(/JavaScript/.test(str)); // С учетом регистра
// console.log(/javascript/i.test(str)); //  Без учета регистра
// console.log(str.replace(/javascript/i, 'php')); // Ищет одно вхождение и осуществляет его замену без учета регистра
// console.log(str.replace(/javascript/gi, 'php')); // Осуществляет глобальный поиск всех вхождений
// //console.log(str.match(/javascript/i)); // Вернет информацию об одном вхождении
// console.log(str.match(/javascript/gi)); // Вернет массив с информацией
// console.log(str.match(/javascript/)); // Вернет null


// Method test

// // // errors

//  d = 'dfs';
// function sum(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number' || a !== a || b !== b) {
//        throw new Error('В функцию не переданы числа для сложения');
//     }
//     return a + b;
// }
// console.log(sum(2, NaN));
//console.log(sum(2, 2));

// try {
//     sum(1, d);
//     console.log('not seen'); //this console.log not work, if error
// } catch(err) {
//     console.error(err.message)
// }
// console.log('end');

// array methods

// // 1
// const fruits = ['apple', 'banana', 'melon', 'orange'];
// const hasOrange = fruits.includes('orange');
// console.log(hasOrange);

// //2
//slice создает новый массив, оставляя текущий
//splice  - меняет текущий массив
// const cars = ['BMW', 'Nissan', 'VW', 'Skoda', 'Audi', 'Kia'];
// const favoriteCars = cars.splice(0, 3); 
// const favoriteCars = cars.slice(0, 3); 
// console.log(favoriteCars);
// console.log(cars);

// // 3
// const otherCars = cars.slice(3, 5);
// console.log(otherCars);

// const numbers = [1, 2, 3, 4];
// console.log(numbers.join(', '));

// const numbers = [1, 2, 3, 4];
// numbers.push(5); 
// console.log(numbers); //[ 1, 2, 3, 4, 5 ]
// numbers.pop(); 
// console.log(numbers); //[ 1, 2, 3, 4 ]
// numbers.shift(); 
// console.log(numbers); //[ 2, 3, 4 ]
// numbers.unshift(1);
// console.log(numbers);
// pop, push
// shift, unshift

// console.log(numbers.includes(4)); // true
// numbers.indexOf(2) // 1
// numbers.splice(1, 2);

// console.log(numbers);
// numbers.indexOf(9) // -1

// let c = numbers.slice(0, 2);
// console.log(c) // [1, 2]
// console.log(numbers);

// const numbers = [1, 2, 3, 4];
// const nums2 = numbers.concat([6, 7, 8]);
// console.log(nums2); //Array(7) [ 1, 2, 3, 4, 6, 7, 8 ]
// console.log(numbers); //Array(4) [ 1, 2, 3, 4 ]

//numbers.push(321, 123);



//console.log(numbers, nums2);


//string methods

// const str = ' Hello world';
// console.log(str.__proto__);

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.includes('hello'));
// console.log(str.indexOf('orld'));
// console.log(str.toLowerCase().includes('hello'));
// console.log(str.slice(0, 5));
// console.log(str.slice(6));
// console.log(str.split(' ')); //Array [ "Hello", "world" ];
// console.log(str.split(' ').join(', ')); //chaining, fluid interface Hello | world;
// console.log(str.trim());

// //Task 1
// const correctAnswer = 'JavaScript';
// const userAnswer = 'javaScript!';
// const isCorrect = userAnswer.toLowerCase().includes(correctAnswer.toLowerCase());
// console.log(isCorrect);

//numbers methods
// const num = 1180000.15555;
// console.log(num.toFixed(2));
// console.log(num.toLocaleString('en-En'));
// console.log(num.toLocaleString('ru-Ru'));
// console.log(num.toLocaleString());

//Task 2
// const salary = 15000.2085;
// salaryFixed = salary.toFixed(2);
// console.log(salaryFixed);

//Objects

// const person = {
//     name: 'Anna',
//     surname: 'Dance',
//     age: 18,
//     greeting() {
//         console.log('Hello');
//     },
//     changeSurname(x) {
//         this.surname = x;
//     }
// };

// console.log(person.surname);
// person.changeSurname('Cinema');
// person.greeting();
// console.log(person.surname);

// const htmlDiv = {
//     className: 'column',
//     rel: 'main',
//     id: 'block',
// };
// for (let prop in htmlDiv) {
//     console.log(htmlDiv[prop]);
// }

// const numbers = [1, 2, 3, 4, 5];

// for (let number of numbers) {
//     console.log(number);
// }

// const developer = {
//     name: 'Vasiliy',
//     surname: 'Petrov',
//     age: 30,
//     skills: ['JavaScript', 'TypeScript', 'CSS'],
//     isMaried: false,
//     addAge() {
//         console.log(this);
//         this.age++;
//         console.log(this);
//         console.log(this.age);
//         developer.age++;
//         console.log(developer.age);
//         console.log(developer);
//     },
//     getMarried() {
//         this.isMarried = true;
//     },
//     getDivorced() {
//         this.isMarried = false;
//     }
    
// };

// // developer.addAge();

// for (let prop in developer) {
//     console.log(prp, developer[prop]);
// }
// console.log('name' in developer);
// //developer.isMaried = true;
// //delete developer.isMaried;
// //console.log(developer.isMaried);
// console.log(developer['age']);

// const dog = {
//     name: 'Miky',
//     age: 2,
//     color: 'black',
//     weight: 1.5,
// }
// dog.breed = false;
// console.log(dog);

