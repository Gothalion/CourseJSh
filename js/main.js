/*
1). Переменная lang может принимать 2 значения: 'ru' 'en'.
Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. 
Решите задачу.
a) через if,
b) через switch-case
c) через многомерный массив без ифов и switch. 
*/

let lang = 'en';

// Метод с конструкцией if else

if (lang === 'ru') {
  console.log('понедельник \n вторник \n среда \n четверг \n пятница \n суббота \n воскресенье');
} else if (lang === 'en') {
  console.log('monday \n tuesday \n wednesday \n thursday \n friday \n saturday \n sunday');
} else {
  console.log('Введите значение ru или en');
}

// Метод с конструкцией switch

switch (lang) {
  case 'ru':
    console.log('понедельник \n вторник \n среда \n четверг \n пятница \n суббота \n воскресенье');
    break;
  case 'en':
    console.log('monday \n tuesday \n wednesday \n thursday \n friday \n saturday \n sunday');
    break;
  default:
    console.log('Введите значение ru или en');
}

// Метод с многоменрным массивом

const langArray = (number, lang) =>
  ({
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  }[lang][number % 7]);

console.log(langArray(5, 'en'));
console.log(langArray(3, 'ru'));

/* У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, 
если значение “Александр” то вывести в консоль “преподаватель”
с любым другим значением вывести в консоль “студент”
 Решить задачу с помощью нескольких тернарных операторов, без использования if или switch 
*/

let namePerson = 'Артем';
const person =
  namePerson === 'Артем'
    ? console.log('директор')
    : namePerson === 'Александр'
    ? console.log('преподаватель')
    : console.log('студент');
