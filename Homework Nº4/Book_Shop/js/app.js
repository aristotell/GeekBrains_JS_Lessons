'use strict';

// Создаём наши масивы.

var AUTHORS = ['А. С. Пушкин', 'Г. Ф. Лафкрафт', 'С. Кинг', 'Френк Герберт', 'Дарья Донцова', 'Х. Муракамьевич', 'Л. Н. Толстой', 'К. Маркс', 'С. Лукьяненко'];
var TITLES = ['Мастер и Маргарита', '1000 и одна ночь', 'Сказки', 'Сборник стихов №100500', 'Евлампия Романова и Соловей Разбойник', 'Капитал', 'Мцыри', 'Некрономикон', 'Басни', 'Еще какие-то стихи', 'Супер интересный детектив', 'Еще какое-то название', 'Допустим, книга', 'Дюна', 'Дети Дюны', 'Ну, погоди', 'Крылья, ноги и хвосты', 'Приключения Солнышкина', 'Психо', 'Рыбак с соколинного мыса', 'Как стать программистом за 6 дней', 'Что-то там еще', 'Нужно больше золота', 'Нужно построить зиккурат', 'Еще книга', 'Куда исчезли двемеры', 'Евгений Онегин', 'Преступление и наказание', 'Война и мир'];
var GENRE = ["Бизнес", "Фантастика", "Фэнтези", "Детектив", "Приключения", "Боевик", "Классика", "Любовный роман", "Публицистика", "Религия", "Юмор", "Поэзия", "Драматургия", "Искусство", "Наука", "Образование", "Справочники", "Компьютеры", "Повести", "рассказы"];
var COVER = ['Внакидку', 'Обыкновенная', 'Вроспуск', 'Окантовка корешка'];


var getBooks = function() {  // Создаем функциюЗаполняем массив рандомными числами
    let pages = [];          // Создаем локальный массив

    for (let i = 0; i < 100; i++) {         
        pages.push(Math.floor(Math.random() * 1000) + ' стр.');  // Заполняем массив рандомными числами
    }

    let books = [];          // Создаем локальный массив

    for (let i = 0; i < 100; i++) { //Создаем локальный объект и заполнить 100 объектов рандомными значениями из нашых масивов
        let newBook = {           
            title: TITLES[Math.floor(Math.random() * TITLES.length)],
            author: AUTHORS[Math.floor(Math.random() * AUTHORS.length)],
            genre: GENRE[Math.floor(Math.random() * GENRE.length)],
            cover: COVER[Math.floor(Math.random() * COVER.length)],
            pages: pages[Math.floor(Math.random() * pages.length)]
        };
        books.push(newBook);  // При каждом цикле вставляем в массив один объект с рандомными значениями
    }

    return books;   // Возврат значения
};

var loadBooks = function() { //Создаем переменную с функцией
    let loadedContent = getBooks(); //Создаем переменную с результатом функции getBooks

    let fragment = document.createDocumentFragment(); //Создаем пустой объект который является

    for (let i = 0; i < 100; i++) {
        let newParagraph = document.createElement('p'); //создает новый элемент для HTML

        // Создаем структуру внутри елемента (<p> тут </p>)
        newParagraph.innerHTML = i + 1 + '. <b>' + loadedContent[i].title + '</b> / ' + loadedContent[i].author + ' / ' + loadedContent[i].genre + ' / ' + loadedContent[i].cover + ' / ' + loadedContent[i].pages;
        fragment.appendChild(newParagraph);
    }

    document.querySelector('.list').appendChild(fragment); // Добавляем созданный фрагмент после тега с классом '.list'
};


window.addEventListener('load', loadBooks); // Добавляем результат функции loadBooks(); после тега с классом '.load'