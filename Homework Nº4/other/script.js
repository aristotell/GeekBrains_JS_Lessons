/*
1) Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function homework_1() {
    let in_number = (+prompt('Введите номер от 0 до 999'));

    if (((typeof in_number) == 'number') && (in_number < 999) && ((in_number % 1) == 0)) {
        let temp_num = (in_number + '');
        let numberObj = {
            units: temp_num[2],
            tens: temp_num[1],
            hundreds: temp_num[0]
        };
        console.log(numberObj);
        document.getElementById("result").innerHTML = ('Eдиницы: ' + numberObj.units + '</br>' + 'Десятки: ' + numberObj.tens + '</br>' + 'Сотни: ' + numberObj.hundreds + '</br>');
    } else {
        document.getElementById("result").innerHTML = ('Что то пошло не так. Введите номер от 0 до 999!!!');
    }
}









/*
2) В примере, рассмотренном на уроке, дополнить объект следующими полями: "Жанр", "Переплет", создав для этого соответствующие массивы, имитирующие "загружаемый контент"
*/


'use strict';

var AUTHORS = ['А. С. Пушкин', 'Г. Ф. Лафкрафт', 'С. Кинг', 'Френк Герберт', 'Дарья Донцова', 'Х. Муракамьевич', 'Л. Н. Толстой', 'К. Маркс', 'С. Лукьяненко'];
var TITLES = ['Мастер и Маргарита', '1000 и одна ночь', 'Сказки', 'Сборник стихов №100500', 'Евлампия Романова и Соловей Разбойник', 'Капитал', 'Мцыри', 'Некрономикон', 'Басни', 'Еще какие-то стихи', 'Супер интересный детектив', 'Еще какое-то название', 'Допустим, книга', 'Дюна', 'Дети Дюны', 'Ну, погоди', 'Крылья, ноги и хвосты', 'Приключения Солнышкина', 'Психо', 'Рыбак с соколинного мыса', 'Как стать программистом за 6 дней', 'Что-то там еще', 'Нужно больше золота', 'Нужно построить зиккурат', 'Еще книга', 'Куда исчезли двемеры', 'Евгений Онегин', 'Преступление и наказание', 'Война и мир'];
var GENRE = ["Бизнес", "Фантастика", "Фэнтези", "Детектив", "Приключения", "Боевик", "Классика", "Любовный роман", "Публицистика", "Религия", "Юмор", "Поэзия", "Драматургия", "Искусство", "Наука", "Образование", "Справочники", "Компьютеры", "Повести", "рассказы"];
var COVER = ['Внакидку','Обыкновенная','Вроспуск','Окантовка корешка'];


var getBooks = function() {
    let pages = [];

    for (let i = 0; i < 100; i++) {
        pages.push(Math.floor(Math.random() * 1000) + ' стр.');
    }

    let books = [];
    for (let i = 0; i < 100; i++) {
        let newBook = {
            title: TITLES[Math.floor(Math.random() * TITLES.length)],
            author: AUTHORS[Math.floor(Math.random() * AUTHORS.length)],
            genre: GENRE[Math.floor(Math.random() * GENRE.length)],
            cover: COVER[Math.floor(Math.random() * COVER.length)],
            pages: pages[Math.floor(Math.random() * pages.length)]
        };
        books.push(newBook);
    }

    return books;
};

var loadBooks = function() {
    let loadedContent = getBooks();
    console.log(loadedContent[3].author);
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < 100; i++) {
        let newParagraph = document.createElement('p');

        newParagraph.innerHTML = i + 1 + '. <b>' + loadedContent[i].title + '</b> / ' + loadedContent[i].author + ' / ' + loadedContent[i].genre + ' / ' +loadedContent[i].cover + ' / ' +loadedContent[i].pages;
        fragment.appendChild(newParagraph);
    }

    document.querySelector('.list').appendChild(fragment);
};


window.addEventListener('load', loadBooks);




/*
3) * На базе примера из урока, воссоздать личный проект "магазина" (см. методичку)
*/