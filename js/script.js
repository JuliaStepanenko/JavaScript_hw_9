"use strict"
// Домашка #9 — Функции (дополнительные задания)
// Каждое задание из этого списка должно быть отдельной функцией, и выводить результат своего выполнения в консоль
// Каждое задание из этого списка нужно выполнять в отдельном файле, если эти задания не связаны друг с другом



// Задания:

// 1. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
// что оно больше нуля и меньше 10. Если это так — пусть функция возвращает true, если не так — false.
console.log('Задание 1');

function isNumberInRange(number){
    if (number>0 && number<10 )return true;
    return false;
}
console.log(isNumberInRange(5));//   5 true
console.log(isNumberInRange(-20));//    -20 false
console.log('');





// 2. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.
//     Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
console.log('Задание 2');

const arr = [10, 1, -1, -10, 1192, 321, 312, 16, 6, -9, 33, -34, -1, 0, -0, 8, 8, 8, 9, 4, -2, -5, 2];

let newArr = [];
for (let i = 0; i <= arr.length; i++ ){
    if (isNumberInRange(arr[i])) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);  //[1, 6, 8, 8, 8, 9, 4, 2]
console.log('');





// 3. Сделайте функцию getDigitsSum (digit — это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
console.log('Задание 3');

function getDigitsSum(digit){
    let digitLenght = String(digit).split(''); //разбираем число на массив отдельных чисел
    let sumNumb = 0;

    for(let i = 0; i < digitLenght.length; i++) {            // перебираем элементы массива
        sumNumb+= Number(digitLenght[i]);                   // Number преобразовать в число из строки
    }
    return sumNumb;
}

console.log(getDigitsSum(123))  //6
console.log('');





// 4. Найдите все года от 1 до 2021, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
console.log('Задание 4');

let newArr2=[];
for (let i = 0; i < 2021; i++ ){
    if(getDigitsSum(i)===13)  newArr2.push(i);
}
console.log(newArr2);     // (148)[49, 58, 67, 76, 85, 94, 139, 148, 157, 166, 175, 184.....
console.log('');





// 5. Сделайте функцию isEven() (even — это четный), которая параметром принимает целое число и проверяет:
//     четное оно или нет. Если четное — пусть функция возвращает true, если нечетное — false.
//     Для проверки числа на четность нужно использовать оператор остаток от деления  ( % ) ,
//     в данной задаче нужно проверять число % 2 чтобы узнать четное оно или нет,
//     если четное то данная операция вернет 0 если не четное то будет число отличное от 0
console.log('Задание 5');

function isEven(even){
    if(even % 2 === 0) return true;
    return false;
}
console.log(isEven(4));   // true
console.log(isEven(5));     //false
console.log('');





// 6. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
//     Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
console.log('Задание 6');

const arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let newArr3 = [];
for (let item of arr3){
    if (isEven(item)===true)  newArr3.push(item);
}
console.log(newArr3);     //(9)[0, 2, 4, 6, 8, 10, 12, 14, 16]
console.log('');





// 7. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
console.log('Задание 7');

function getDivisors(number){
    let arr4 = [];
    for (let i = 0; i <= number; i++){
        if (Number.isInteger(number / i)) arr4.push(i);
    }
    return arr4;
}
console.log(getDivisors(50));   // (6)[1, 2, 5, 10, 25, 50]

















