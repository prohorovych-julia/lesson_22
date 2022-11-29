/*--------Завдання 1---------*/
'use strict';
console.log('Я вчу JavaScript');

 
for (let i = 0; i < 3; i++) {
     console.log (i);
}


/*--------Завдання 2---------/ 
1) Придумати ім'я змінної для зберігання кольору очей користувача сайту;
2) Об'явити дві змінні - user i userName;
    Присвоїти значення "Василь" змінній userName.
    Скопіювати знач. змінної userName в змінну user.
 3)  Який варіант не вірний?
    Вариант №1
    let user = 'Вася' let age = 36

    Вариант №2
    let myage = 36;

    Вариант №3
    const BLOCK_SIZE = 14 + 50;

    Вариант №4
    const BLOCK_HEIGHT = 100;

    Вариант №5
    if (true) {
    var size = 15;
    }
    console.log(size);
     */


 /* 1)*/ 
let userEyesColor;

/* 2)*/
let user;
let userName;

userName = "Василь";

user = userName;
console.log(user);

/* 3)
- Невірний варіант 1:  let user = "Василь" let age = 36
    Необхідно записати з нової строки використовуючи ;
    let user = "Василь"; 
    let age = 36;

- Невірний варіант 2: невірно нарисане ім'я змінної let myage = 36;
    Треба використовувати lowerCamelCase
    let myAge = 36;

- Невірний варіант 3: const BLOCK_SIZE = 14 + 50;
    неправильно записане ім'я змінної, треба так:
    сonst blockSize = 14 + 50;
*/


/*--------Завдання 3---------*/
/*
2. Який або які із варіантів не правильні:

Варіант №1
let userAge = 36;
let userInfo = "Фрилансер ${userAge}";

Неправильний варіант,так як потрібні зворотні лапки ``:*/
let userAge = 36;
let userInfo = `Фрилансер ${userAge}`;
console.log(userInfo);

/* Вариант №2
let userHeight = 145 / 0;
Вернется значение NaN
console.log(userHeight);

Невірно, повернеться значення Infinity */
let userHeight = 145 / 0;
console.log(userHeight);

/* Вариант №3
let userName;
Вернется тип данных Null
console.log(typeof userName);

Невірно, повернеться тип даних Undefined */






