const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function (allLogins, login) {
  return !allLogins.includes(login);
};

const addLogin = function () {
  const loginInput = document.getElementById("loginInput").value;
  if (!isLoginValid(loginInput)) {
    alert("Помилка! Логін повинен бути від 4 до 16 символів");
    return;
  }

  if (!isLoginUnique(logins, loginInput)) {
    alert("Такий логін вже використовується!");
    return;
  }

  logins.push(loginInput);
  alert("Логін успішно доданий!");
};
