// 1) С помощью цикла while вывести все простые числа в промежутке от 0 до 100

function homework_1() {
var sn = 2;
var isitSimple = true;
var arr_Simple = [];

    while (sn < 100) {
        for (var i = 2; i < sn; i++) {
            if (sn % i == 0) {
                isitSimple = false;
                break;
            }
        }
        if (isitSimple == true) {
            console.log(sn);
            arr_Simple.push(' ' + sn);

        }

        isitSimple = true;
        sn++;
    }
    document.getElementById("result").innerHTML = (arr_Simple);
}



/*
nextPrime:
  for (var x = 2; x <= 100; x++) {

    for (var y = 2; y < x; y++) {
      if (x % y == 0) continue nextPrime;
    }

   console.log(y + '\n'); // простое
  }
*/


// 2) С помощью цикла do…while написать функцию для вывода чисел от 0 до 10.

function homework_2() {

    let i = 0;
    var num_even = [];
    var num_odd = [];
    do {
        if (i == 0) {
            console.log(i + ' - это ноль');
            i++;
        } else {
            if (i % 2 == 1) {
                num_even.push(i + ' - нечетное число');
                console.log(i + ' - нечетное число');
                i++;
            } else {
                num_odd.push(i + ' - четное число');
                console.log(i + ' - четное число');
                i++;
            }
        }
    } while (i <= 10);
document.getElementById("result").innerHTML = (num_even + ' </br> ' + num_odd)
}


// 3) * Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно вот так: for(…){// здесь пусто}

function homework_3() {
    let arr_i = [];
    for (let i = 0; i < 10; console.log(i++)) {
        arr_i.push(' ' + i);
    }
    document.getElementById("result").innerHTML = (arr_i)
}


// 4) * Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5.

function homework_4() {

    var pyramid_str = [];

    for (let i = 1; i <= 20; i++) {
        let regex = /,/gi; //Указано какой символ надо заменить в html.
        let x = '\u25b2'; // Симфол для заполнения пирамиды.
        let str = ('<p align="center">' + pyramid_str + '</p>'); // Генерация текста для передачи в html.
        pyramid_str.push(x);
        document.write(str.replace(regex, '')); // Удаляет все комы со строки перед тем как передать строку в html.
        console.log(pyramid_str);
    }
}

/*
Корзина 

2. Начиная с этого урока, мы начинаем работать с функционалом интернет-магазина.
Предположим, что у нас есть сущность корзины. Нужно реализовать функционал подсчета
стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в
массиве.

2.1. Организуйте такой массив для хранения товаров в корзине

2.2. Организуйте функцию countBasketPrice, которая будет считать стоимость корзины.

*/



// Чтото с корзиной я так и не розобрасля :(


function homework_5() {

    var arr_products = ['product_1', 'product_2', 'product_3', 'product_4', 'product_5', 'product_6', 'product_7', 'product_8'];
    var arr_product_names = ['Alpine Pro', 'name2', 'name3', 'name4', 'name5', 'name6', 'name7', 'name8'];
    var arr_price = ["150 Euro", 222, 333, 444, 555, 666, 777, 888];

    var cart = [];
    var str = '';
    cart.push(arr_products[0], arr_product_names[0], arr_price[0]);

    str = cart.toString();
    count_ = 0;

    var getElementsById = function() {
        console.log(str);
    }
    console.log(getElementsById());
}

function homework_8() {
    console.clear();
}