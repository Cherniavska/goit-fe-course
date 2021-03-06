"use strict";

// 1. Задача 1

// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, за6писать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.

// __________________________________________________________________________________________________________________________________________________

const ADMIN_PASSWORD = "m4ng0h4ckz";
let message;

const input = prompt("Вы вошли, как администратор. Пожалуйста, введите пароль");

if (input === null) {
  message = "Отменено пользователем!";
} else if (input === "m4ng0h4ckz") {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);

// ===============================================================================================================================================

// Задача 2
// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой).
// Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку.
// Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов,
// на счету осталось [число] кредитов.'.

// __________________________________________________________________________________________________________________________________________________

// let credits = 23580;

// pricePerDroid = 3000;

// let totalPrice;

// let message;

// const order = prompt ( "Укажите количество дроидов в Вашем заказе" );

// if ( order === null ) {

//   message = 'Отменено пользователем!';

// }
// else {
//   totalPrice = order * pricePerDroid;

//      if ( totalPrice > credits) {

//     alert ( 'Недостаточно средств на счету!') ;
//     }

//      else {

//     let balance = credits - totalPrice;

//     message = ` Вы купили ${order} дроидов, на счету осталось ${balance} кредитов. `;
//     }
// }

// alert(message);

// ==================================================================================================================================================

// Задача 3
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
// Учти, что пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
// Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в консоль сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// китай - 100 кредитов
// южная америка - 250 кредитов
// австралия - 170 кредитов
// индия - 80 кредитов
// ямайка - 120 кредитов
// PS: используй switch

// ______________________________________________________________________________________________________________________________________________________________________________________

// let deliveryCountry = prompt ( 'Укажите страну доставки');

// let deliveryCost;

// let message;

// if ( deliveryCountry === null )  {

// message = ' Отменено пользователем'
// }

// else {

//   switch (deliveryCountry.toLowerCase()) {
//   case 'китай':
//   deliveryCost = 100;
//   message = ` Доставка в ${deliveryCountry}  будет стоить ${deliveryCost} кредитов.  `
//   break;

//   case  'южная америка':
//   deliveryCost = 100;
//   message = ` Доставка в ${deliveryCountry}  будет стоить ${deliveryCost} кредитов.  `
//   break;

//   case  'австралия':
//   deliveryCost = 170;
//   message = ` Доставка в ${deliveryCountry}  будет стоить ${deliveryCost} кредитов.  `
//   break;

//   case  'индия':
//   deliveryCost = 80;
//   message = ` Доставка в ${deliveryCountry}  будет стоить ${deliveryCost} кредитов.  `
//   break;

//   case  'ямайка':
//   deliveryCost = 120;
//   message = ` Доставка в ${deliveryCountry}  будет стоить ${deliveryCost} кредитов.  `
//   break;

//   default :

//   message =  'В вашей стране доставка не доступна'

//   }

// }

// alert ( message )
