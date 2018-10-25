/*
Homework Nº2 (1)

1. Дан код:
	var a = 1, b = 1, c, d;
	c = ++a; alert(c); // 2 
	d = b++; alert(d); // 1 ()
	c = (2+ ++a); alert(c); // 5 () 
	d = (2+ b++); alert(d); // 4 ()
	alert(a); // 3 (Финальное значение переменной в даний момент)
	alert(b); // 3 (Финальное значение переменной в даний момент)
Почему код даёт именно такие результаты?

a. Операция префикс-инкремента (++a) возвращает значение уже измененной переменной "a" в переменной "с".
b. Операция пост-инкремента (b++) возвращает значение переменной "d" до выполнения инкремента "b".
c. К "2" добавляем уже увеличеное на единицу значение "а" которое с 2 изменилось на 3.
d. К "2" добавляем актуальное значение "b" а потом увеличеваем его на единицу.
e. (Финальные значения переменних в даний момент)


Homework Nº2 (2)

2. Чему будет равен x в примере ниже?
	var a = 2;
	var x = 1 + (a *= 2);

Значение х равен 5.
А происходит следущее: 1 + (2 * 2)
*/

function Homework_3() {
    //----------------------------------------------------------------------------------------------------------------------
    // Homework Nº2 (3)
    // 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные
    // значения. Затем написать скрипт, который работает по следующему принципу:
    // - если a и b положительные, вывести их разность;
    // - если а и b отрицательные, вывести их произведение;
    // - если а и b разных знаков, вывести их сумму;
    // ноль можно считать положительным числом.

    // генератор рандомных чисел
    const min = -999;
    const max = 999;

    var getRndInteger = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var number_a = (getRndInteger(min, max));
    var number_b = (getRndInteger(min, max));
    var result;

    var calc_ab = function() {
        if (isNaN(number_a && number_b)) {
            alert('Вас просили ввести число');
            alert(':(')
        } else {
            if ((number_a >= 0) && (number_b >= 0)) {
                result = number_a - number_b;
                alert('Случайное число "а" = ' + number_a + '\nСлучайное число "b" = ' + number_b + '\nЧисла положительные, вывести их разность: ' + result);
            } else if ((number_a < 0) && (number_b < 0)) {
                result = number_a * number_b;
                alert('Случайное число "а" = ' + number_a + '\nСлучайное число "b" = ' + number_b + '\nЧисла отрицательные, вывести их произведение: ' + result);
            } else {
                result = number_a + number_b;
                alert('Случайное число "а" = ' + number_a + '\nСлучайное число "b" = ' + number_b + '\nЧисла разных знаков, вывести их сумму: ' + result);
            }

        }
    }
    console.log(calc_ab());

}

function Homework_4() {
    //----------------------------------------------------------------------------------------------------------------------

    // Homework Nº2 (4)
    // 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

    var randomize = function() {
        let randomNum = Math.round(Math.random() * 15);
        return randomNum;
    };
    var num = randomize();
    switch (num) {
        case 0:
            console.log(num++);
        case 1:
            console.log(num++);
        case 2:
            console.log(num++);
        case 3:
            console.log(num++);
        case 4:
            console.log(num++);
        case 5:
            console.log(num++);
        case 6:
            console.log(num++);
        case 7:
            console.log(num++);
        case 8:
            console.log(num++);
        case 9:
            console.log(num++);
        case 10:
            console.log(num++);
        case 11:
            console.log(num++);
        case 12:
            console.log(num++);
        case 13:
            console.log(num++);
        case 14:
            console.log(num++);
        case 15:
            console.log(num++);
            break;
        default:
            alert('Вас попросили ввести чисело от 0 до 15');
            window.location.reload();
            break;
    }
}

// mathFunctions
var divide = function(x_, y_) {
    if (y_ != 0) {
        let rezult = x_ / y_;
        return rezult;
    } else {
        alert('Делитель не должен быть равен нулю.');
        window.location.reload();
    }
};

var multiply = function(x_, y_) {
    if (y_ != 0) {
        let rezult = x_ * y_;
        return rezult;
    } else {
        window.location.reload();
    }
};
var add = function(x_, y_) {
    if (y_ != 0) {
        let rezult = x_ + y_;
        return rezult;
    } else {
        window.location.reload();
    }
};

var sub = function(x_, y_) {
    if (y_ != 0) {
        let rezult = x_ - y_;
        return rezult;
    } else {
        window.location.reload();
    }
};

function Homework_5() {
    //----------------------------------------------------------------------------------------------------------------------
    // Homework Nº2 (5)
    //5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
    //Обязательно использовать оператор return.

    var x = +prompt('Введите число "x"');
    var y = +prompt('Введите число "y"');
    if (isNaN(x && y)) {
        alert('Вас попросили ввести чисело!!! :(');
        window.location.reload();
    } else {
        console.log('Расчетный результат вычисления ' + '(' + x + ' / ' + y + ') ' + '= ' + divide(x, y));
        console.log('Расчетный результат вычисления ' + '(' + x + ' * ' + y + ') ' + '= ' + multiply(x, y));
        console.log('Расчетный результат вычисления ' + '(' + x + ' + ' + y + ') ' + '= ' + add(x, y));
        console.log('Расчетный результат вычисления ' + '(' + x + ' - ' + y + ') ' + '= ' + sub(x, y));
    }



}

function Homework_6() {
    //----------------------------------------------------------------------------------------------------------------------
    // Homework Nº2 (6)
    // 6) Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
    // где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
    // В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть 
    // полученное значение (использовать switch).

    var operation = +prompt('1 - сложение \n 2 - вычитание \n 3 - деление \n 4 - умножение');
    var num1 = +prompt('Первое число.')
    var num2 = +prompt('Второе число.')

    switch (operation) {
        case 1:
            console.log('Результат операции: ' + '(' + num1 + ' + ' + num2 + ')' + ' = ' + add(num1, num2));
            break;
        case 2:
            console.log('Результат операции: ' + '(' + num1 + ' - ' + num2 + ')' + ' = ' + sub(num1, num2));
            break;
        case 3:
            console.log('Результат операции: ' + '(' + num1 + ' / ' + num2 + ')' + ' = ' + divide(num1, num2));
            break;
        case 4:
            console.log('Результат операции: ' + '(' + num1 + ' * ' + num2 + ')' + ' = ' + multiply(num1, num2));
            break;
        default:
            console.log('default');
            break;
    }
}

function Homework_7() {
    //----------------------------------------------------------------------------------------------------------------------
    // Homework Nº2 (7)
    // 7) * Сравнить null и 0. Попробуйте объяснить результат.

    var test_0 = 0;
    var test_null = null;

    // выдаёт ложь так как "0" имеет тип "number" a "null" имеет тип "object" это "ничто" в номерном значении, также как NaN это "ничто" в алфавитном.
    console.log('Результат сровнения: ' + '(' + test_null + ' == ' + test_0 + ')' + ' = ' + (test_0 == test_null));
    console.log('Тип переменной test_0: ' + typeof(test_0));
    console.log('Тип переменной test_null: ' + typeof(test_null));

}

function Homework_8() {
    //----------------------------------------------------------------------------------------------------------------------
    // Homework Nº2 (8)
    //8) * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

    var power = function(val, pow) {
        if (isNaN(pow && val)) {
            alert('Вас попросили ввести чисело!!! :(');
            window.location.reload();
        } else if ((pow == '') || (val == '')) {

            alert('Не забыли ли вы ввести кое что!!! :(');
            window.location.reload();

        } else {
            var res = (Math.pow(val, pow));
            return (res);
        }
    }
    var val1 = prompt('Напишите число');
    var pow1 = prompt('Ввести степень');
    console.log(power(val1, pow1));
}