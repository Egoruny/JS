// 1)

// let sentence = ''

// function wordCount (sent) {
// let a = sent.trim().replace(/[^a-zа-яё0-9\s]/gi, '').split(' ')
// for (let i = 0; i < a.length;i++){
// if (a[i] === '') {
// a.splice(i,1)
// }
// }
// return a.length
// }

// console.log(wordCount(sentence))

// 2)

// let str =  ''

// function cutString (str,n) {

// if (str.length > n) {
//     return str.substring(0,n)+'...'
// } else {
//     return str
// }

// }

// console.log(cutString(str,2))

// 3)

// let arr = [1, 2, 3, 4, 5];


// function returnsNextElement (arr1,el) {
// let ind = arr.findIndex((arrEl => {
// return arrEl === el
// }))

// return arr[ind + 1]
// }

// console.log(returnsNextElement(arr,4))


// 4)


// const arrayNumbers = [2, 4, 10, 6, 8, 14, 24, 50]

// let  isEven = arrayNumbers.every( el => el % 2 === 0)


// console.log(isEven)

//5)

// let str = "1234!_"

// function repeat (string) {
// let newString = ''
// for(let i = 0;i < string.length;i++) {
//     newString += string[i].repeat(2)
// }
// return newString 
// }

// с использованием методов массива 

// function repeat1 (string1) {
//     let arrString = string1.split('').map(el => el.repeat(2)).join('')

// return arrString
// }

// console.log(repeat1(str))

// 1) Написать функцию, которая считает количество слов в предложении.
// 2) Написать функцию сокращения строки. Функция принимает строку и ее 
// максимальную длину. Если длина строки больше, чем максимальная, то необходимо 
// отбросить лишние символы, добавив вместо них троеточие.
// Например: truncate(«Hello, world!», 8) должна вернуть «Hello...».
// 3) Сделайте функцию, которая параметром будет принимать массив и элемент и 
// возвращать следующий за ним элемент. Пример:
// let arr = [1, 2, 3, 4, 5];
// func(arr, 1); // 2
// func(arr, 4); // 5
// func(arr, 5); // 1
// 4) Дан массив чисел arrayNumbers. Необходимо создать переменную isEven, которая 
// будет true или false в зависимости от того, являются ли все числа массива четными
// const arrayNumbers = [2, 4, 10, 6, 8, 14, 24, 50];
// console.log(isEven); // => true
// 5) Напишите функцию, которая принимает строку и возвращает строку, в которой 
// каждый символ (с учетом регистра) повторяется.
// Примеры (ввод -> вывод):
// "String" -> "SSttrriinngg"
// "Hello World" -> "HHeelllloo WWoorrlldd"
// "1234!_" -> "11223344!!__"
// Используйте методы строк и методы массивов
// 6) Форма авторизации и регистрации - очень популярная и неотъемлемая часть многих 
// веб-сайтов. Сейчас вы разработаете ее на JavaScript.
// Представим, что на нашем сайте есть пользователь, у которого логин - это 
// «the_best_user», а пароль - «12345678». Сохраните эти значения в переменные и 
// назовите их existedUserLogin и existedUserPassword соответственно.
// Вам требуется с помощью функции prompt вывести 2 модальных окна на экран. 1-е 
// будет с надписью «Введите логин», 2-е - «Введите пароль». Сохраните введенные 
// пользователем значения в переменные userLogin и userPassword. Также учтите, что в 
// итоговых данных пользователя не должно быть лишних пробелов в начале и в конце 
// строки. Используйте метод trim, чтобы убрать лишние пробелы.
// Если введенные пользователем логин и пароль совпадают с уже существующими 
// данными в existedUserLogin и existedUserPassword, то выведите сообщение «Добро 
// пожаловать, userLogin!» (замените userLogin на логин пользователя). Иначе же 
// отобразите сообщение «Логин и (или) Пароль введены неверно!».
// 7) С помощью prompt запросить у пользователя его имя. Передайте в prompt строку 
// 'Как вас зовут? ' и введенный пользователем результат сохраните в переменную 
// userName. Какое бы значение пользователь не ввел, вам требуется отформатировать 
// строку userName по следующим условиям:
// 1. Все буквы должны быть строчными.
// 2. В начале и в конце строки не должно быть лишних пробелов.
// После выведите в модальное окно с помощью alert строку «Вас зовут userName»
// (замените userName на отформатированный текст, введенный пользователем).

// 8) Дана строка 'я учу javascript!'. Нужно вырезать из нее слово 'учу' и слово 'javascript' 
// (разными методами строк)

// 9) С помощью циклов for вам необходимо создать матрицу 3x5. В итоге она должна 
// выглядеть следующим образом: 
// Подсказка: как видите, в итоге получился массив из 3-х элементов, внутри которого 
// хранятся массивы, каждый из которых имеет по 5 элементов. Это можно реализовать с 
// помощью 2-х циклов for. Внутрь одного цикла for необходимо поместить еще один 
// цикл.

// 10) Когда мы проходим регистрацию, то в большинстве случаев у нас запрашивают 
// пароль. И всегда для него есть некоторые ограничения по длине либо по символам. 
// Сейчас вы напишете программу, которая будет проверять на валидность пароль, 
// введенный пользователем.
// Для начала вам необходимо запросить пароль у пользователя при помощи prompt.
// Отобразите сообщение “Введите пароль”.
// Пароль должен удовлетворять следующим условиям:
// 1. Длина пароля должна быть минимум 3 символа и не больше 20 символов (включая
// 20).

// 2. Пароль должен содержать минимум 1 прописную (большую) букву.
// 3. Пароль должен содержать минимум 1 цифру.
// Если все условия удовлетворены, то выведите при помощи alert сообщение 'Пароль
// валидный. Добро пожаловать в аккаунт! ’, иначе – 'Пароль не удовлетворяет условиям!
// Перезагрузите страницу и попробуйте ввести его еще раз