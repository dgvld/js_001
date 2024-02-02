//

// Sort

// numbers = [1, 2, 3, 4, 10, 12, 23];  
// numbers.sort(); // [1, 10, 12, 2, 23,  3,  4];
// numbers.sort((a, b) => b - a); //  [23, 12, 10, 4, 3,  2,  1];

// //numbers.reverse(); [1,  2,  3, 4, 10, 12, 23];

// console.log(numbers);


// Find in collection

// const players = [
//     {
//         id: 1,
//         name: 'Andres',
//         surname: 'Iniesta',
//         club: 'Vissel Cobe',
//     },
//     {
//         id: 2,
//         name: 'Eden',
//         surname: 'Hazard',
//         club: 'Real Madrid',
//     },
//     {
//         id: 3,
//         name: 'Mo',
//         surname: 'Salah',
//         club: 'Liverpool',
//     },
//     {
//         id: 4,
//         name: 'Lionel',
//         surname: 'Messi',
//         club: 'Barcelona',
//     },
// ];

// //const messi = players.find(item => item.surname === 'Messi');
// //const messi = players.find(item => item.surname.includes('Messi'));
// console.log(messi);



// const developers = [
//     {
//         id: 1,
//         fullName: 'Ivan Ivanov',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         area: 'frontend',
//     },
//     {
//         id: 2,
//         fullName: 'John Doe',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//         area: 'frontend',
//     },
//     {
//         id: 3,
//         fullName: 'Adam Smith',
//         skills: ['HTML', 'PHP', 'Laravel'],
//         area: 'backend',
//     },
//     {
//         id: 4,
//         fullName: 'Sam Wilson',
//         skills: ['HTML', 'CSS', 'JavaScript', 'PHP'],
//         area: 'fullstack',
//     },
// ];

// console.log(developers.find(item => item.area === 'frontend'));
// console.log(developers.find(item => item.area === '_frontend'));
// console.log(developers.findIndex(item => item.skills.includes('PHP')));
// console.log(developers.find(item => item.skills.includes('PHP')));
// console.log(developers.find(item => item.skills.includes('Simfony')));

//  const cities = ['London', 'Paris', 'Madrid', 'Lisboa'];
// console.log(cities.includes('Madrid')); // true
//  console.log(cities.indexOf('Paris'));
// console.log(cities);

// // // Reduce

// const order = [
//     {
//         id: 1,
//         name: 'Лопата',
//         price: 1000,
//         quantity: 1,
//     },
//     {
//         id: 2,
//         name: 'Удочка',
//         price: 1200,
//         quantity: 2,
//     },
//     {
//         id: 3,
//         name: 'Ведро',
//         price: 500,
//         quantity: 3,
//     },
//     {
//         id: 4,
//         name: 'Мороженое',
//         price: 100,
//         quantity: 8,
//     },
// ];

// const totalPrice = order.reduce((acc, user) => {
//     return acc + user.price * user.quantity; 
// }, 0);

// console.log(totalPrice);

// const staff = [
//     {
//         id: 1,
//         name: 'John Doe',
//         salary: 1000,
//     },
//     {
//         id: 2,
//         name: 'Sara Smith',
//         salary: 900,
//     },
//     {
//         id: 3,
//         name: 'Elton John',
//         salary: 1100,
//     },
//     {
//         id: 4,
//         name: 'Mo Williams',
//         salary: 1000,
//     },
// ]; 

// const budget = staff.reduce((acc, user) => {
//     return acc + user.salary;
// }, 0);

// console.log(budget);

// const budgetForSmallPersonal = staff.reduce((acc, user) => {
//     if(user.salary < 1000) {
//         return acc + user.salary;
//     }
//     return acc;
// }, 0);

// console.log(budgetForSmallPersonal);

// const salaries = staff.reduce((acc, user) => {
//     return [...acc, user.salary];
// }, []);

// console.log(salaries);

// Filter

// const names = ['Mikhail', 'Ivan', 'Albert', 'John', 'Ian', 'Petr', 'Alexandr', 'Oleg', 'Jaroslav', 'Vsevolod'];

// const shortNames = names.filter(user => user.length < 6);

// console.log(shortNames);

// const products = [
//     {
//         id: 1,
//         name: 'Intro to JavaScript',
//         category: 'books',
//         price: 150,
//     },
//     {
//         id: 2,
//         name: 'Intro to CSS',
//         category: 'books',
//         price: 120,
//     },
//     {
//         id: 3,
//         name: 'Deep dive into JavaScript',
//         category: 'books',
//         price: 350,
//     },
//     {
//         id: 4,
//         name: 'Intro to PHP',
//         category: 'books',
//         price: 250,
//     },
//     {
//         id: 5,
//         name: 'Deep dive into PHP',
//         category: 'books',
//         price: 350,
//     },
// ];

// const cheapProducts = products.filter(user => user.price < 300);
// console.log(cheapProducts);

// const developers = [
//     {
//         id: 1,
//         fullName: 'Ivan Ivanov',
//         skills: ['HTML', 'CSS', 'Git', 'Gulp', 'Pug']
//     },
//     {
//         id: 2,
//         fullName: 'Petr Petrov',
//         skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'npm']
//     },
//     {
//         id: 3,
//         fullName: 'Ian Melnikov',
//         skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript']
//     },
//     {
//         id: 4,
//         fullName: 'Antonio Banderas',
//         skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript', 'React']
//     },
// ];

// const tsDevelopers = developers.filter(user => user.skills.includes('TypeScript'));
// console.log(tsDevelopers);

// const users = [
//     {
//         id: 1,
//         name: 'Anton Petrov',
//         movies: ['Snatch', 'Inglorious Basterdes'],
//         isMarried: true,
//     },
//     {
//         id: 2,
//         name: 'Ivan Ivanov',
//         movies: ['Inglorious Basterdes'],
//         isMarried: false,
//     },
//     {
//         id: 3,
//         name: 'Albert Sidorov',
//         movies: ['Inglorious Basterdes'],
//         isMarried: true,
//     },
// ];

// const marriedUsers = users.filter(user => user.isMarried)
//const snatchUsers = users.filter(snatch => snatch.movies.includes('Snatch'));
//console.log(snatchUsers);
//console.log(marriedUsers);
//console.log(users);

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const oddNumbers = numbers.filter(num => num % 2 !== 0);
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(oddNumbers);
// console.log(evenNumbers);
// console.log(numbers);


// const developers = [
//     {
//         id: 1,
//         fullName: 'Anton Petrov',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'React'],
//         salary: 1000,
//     },
//     {
//         id: 2,
//         fullName: 'Ivan Ivanov',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Vue'],
//         salary: 950,
//     },
//     {
//         id: 3,
//         fullName: 'Albert Sidorov',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'jQuery'],
//         salary: 850,
//     },
// ];


// function changeDevelopers(dev) {
//     return (
//         {
//             ...dev,
//             skills: dev.skills.concat('TypeScript'),
//             salary: dev.salary + 500,
//         }
//     )    
// };

// const middleDevelopers = developers.map(changeDevelopers);
// console.log(middleDevelopers);

// function mainCode(numbers) {
//     const doubledNumbers = numbers.map((num => num * 2));

    
//     return doubledNumbers;
// }

// ///mainCode([1, 2, 3]);
// const doubledNumbers = mainCode([1, 2, 3]);
// console.log(doubledNumbers);


//Mapping - отбражение, ход массива, перебор всех его значений;
//map, forEach

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const arr = []; // Для forEach новый массив, но мы так не делаем, мы используем map
// function doubleNum(num) {
//     arr.push(num * 2);
// }

// let i = '';
// function print1(el, index, array) {
//      i = i + array[index];
//     console.log(i * 2);  
// }



// const result = numbers.map((n, index, array)=> array);

// console.log(result);


// const result = numbers.forEach(print1);
// console.log(result); // undefind, т.к. forEach только перебирает массив, но не создает нового
// console.log(numbers); // Иммутабельный

// function doubleNum(num) {
//     return num * 2;
// }

//const result = numbers.map(doubleNum); // [ 2, 4, 6 ...] // в map консоль лог можно не использовать, т.к. map возващает новый массив
//const result = numbers.map(num => num * 2); // [ 2, 4, 6 ...]
//const result = numbers.map((num, index, array) => num * 2); // [ 2, 4, 6 ...]

// console.log(result);
// console.log(numbers);

// function print2(el) {
//     console.log(el)  
// }

// numbers.forEach(print3 = (el, index, array) => {
//     i = i + array[index];
//     console.log(i); 
// });
// numbers.forEach(print3 => console.log(print3)); 

// numbers.forEach(print1);
// numbers.forEach(print2);

// // Immutable
// const arr = [1, 2, 3, 4, 5]; // Неизменнный


// // don't use pop, push, shift, unshift(добавляет элемент в начало массива), sort, reverse etc. - мутируют наш массив

// const newArr = arr.slice(0, 4); // [1, 2, 3, 4] - оригинальный массив никак не сломается
// const newArr2 = [0, ...arr]; // [0, 1, 2, 3, 4, 5]

// // console.log(arr);
// // console.log(newArr);
// console.log(newArr2);
// console.log(arr);

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// }
// // obj.d = 4; // mutation
// // obj.a = 10 // mutation
// console.log(obj);

// const obj2 = {
//     ...obj,
//     a: 11,
//     d: 5,
// }; // { a: 11, b: 2, c: 3, d: 5 }

// console.log(obj2);
// console.log(obj);

// FIFO, FILO

// Queue first in, first out - очередь
// push/shift
// const arr = []; // FIFO
// arr.push(4); // Добавляет элемент в конец массива
// arr.push(7);
// arr.push(9);

// // console.log(arr);

// arr.shift(); // Удаляет элемент в начале массива, антоним pop.
// //console.log(arr);

// // Stack - first in, last out - FILO
// // push/pop
// const arr2 = [];
// arr2.push(1);
// arr2.push(2);
// arr2.push(3);
// arr2.push(5);

// console.log(arr2);

// arr2.pop();
// arr2.pop();

// console.log(arr2);