/*
1) Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/
var doc = document;

function homework_1() {
    doc.getElementById("content1").innerHTML = ('<div class="form"><input type="text" id="in_number"></br><label for="in_number">Введите номер от 0 до 999</label></br><input type="button" name="ok" id="in_number" value="Подтвердить" onClick="conf()"></div></br>');
}
let i = 0;
let arr_numberObj = [];

function conf() {

    let fragment = doc.createDocumentFragment();
    let sp1 = doc.createElement("span");
    let sp2 = doc.getElementById("childElement");
    let parentDiv = sp2.parentNode;

    let in_number = doc.getElementById('in_number').value;
    let test = (((in_number * 2) / 2));
    if (((typeof test) == 'number') && (in_number.length < 4) && ((in_number % 1) == 0)) {
        
        if ((in_number[0] === undefined) || (in_number[1] === undefined) || (in_number[2] === undefined)) {
            in_number = '000';
        }

        let temp_num = (in_number + '');
        let numberObj = {
            units: temp_num[2],
            tens: temp_num[1],
            hundreds: temp_num[0]
        };

        arr_numberObj.push(numberObj);
        console.log(arr_numberObj);

        //------------------------------------------------

        sp1.innerHTML = ('<p><div class="homework_1"><ul><li>Eдиницы: ' + numberObj.units + '</li><li>Десятки: ' + numberObj.tens + '</li><li>Сотни: ' + numberObj.hundreds + '</li></ul></div></p></br>');
        console.log(sp1);

        //------------------------------------------------
    } else {
        sp1.innerHTML = ('<p>Что то пошло не так. Введите номер от 0 до 999!!! </p></br>');
    }
    parentDiv.insertBefore(sp1, sp2.nextSibling);

    i++;
}