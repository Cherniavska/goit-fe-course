"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};

const isLoginUnique = function(allLogins, login) {
  allLogins = logins;
  if (allLogins.includes(login) === true) {
    return false;
  }
  return true;
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) === false) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }

  if (isLoginUnique(allLogins, login) === false) {
    return "Такой логин уже используется!";
  }

  allLogins = allLogins.push(login);
  return "Логин успешно добавлен!";
};

// Вызовы функции для проверки
console.log("Ajax :", addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log("robotGoogles :", addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log("zod :", addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(
  "jqueryisextremelyfast :",
  addLogin(logins, "jqueryisextremelyfast")
); // 'Ошибка! Логин должен быть от 4 до 16 символов'