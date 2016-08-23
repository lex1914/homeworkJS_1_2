// Функция по возведению целого положительного числа в степень

var number = prompt("Введите число, которое хотите возвести в степень: ");
var exponent = prompt("Введите число, указывающее в какую степень возвести: ");
		
function pow(numr, expo) {
	var result = numr;
	for (var i = 1; i < expo; i++) {
      result *= numr;
  		}
    return result;
}

if (number == 0 && exponent == 0) {
	alert('Значение равно: 0');
} else if (number < 0 || exponent < 0) {
	alert(false);
		} else {
 console.log(number + ' в ' + exponent + '-й степени: ', pow(number, exponent) );
}