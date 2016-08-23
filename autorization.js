// Авторизация: заполнение массива логинами и поиск соответствия
var arrLogins = [];
if (arrLogins.length >= 0) {
  for (var i = 1; i < 6; i++) {
  var login = prompt('Создайте логин: ');
  arrLogins.push(login);
  // console.log(arrLogins.length); // Датчик
  }
} 
// console.log(arrLogins); // Датчик

var yourLogin;
yourLogin = prompt('Введите свой логин: ');

if (yourLogin == '' || yourLogin == null) {
  alert('Erorr: invalid simbols!');
}

var myVarLogins;
if (true) {
for (var i = 0; i < arrLogins.length; i++) {
  arrLogins[i];
  if (yourLogin == arrLogins[i]) {
    // console.log(true); // Датчик
	myVarLogins = yourLogin;
	} 
}
if (myVarLogins == yourLogin && yourLogin != '' && yourLogin != null) {
	alert(yourLogin + ', вы успешно вошли')
}
if (myVarLogins != yourLogin) {
  // console.log(false); // Датчик
  myVarLogins = 'Your login invalid';
  alert(myVarLogins);
}
}

// console.log(myVarLogins); // Датчик  
