var doc = document;

////var eternalTemp = myTemp.cloneNode(true);

//var q_black = eternalTemp.getElementById('square_black');
//var q_white = eternalTemp.getElementById('square_white');



var arr_leters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

// Создаю оcновную таблицу

function chessTable() {

    let fragment = doc.createDocumentFragment();
    let myTable = doc.createElement('table');

    for (let i = 0; i < 8; i++) {
        let myRow = doc.createElement('tr');
        for (let j = 0; j < 8; j++) {
            let myCell = doc.createElement('td');
            if (((myCell.innerText = i + j) % 2) == 0) {
                myCell.innerHTML = '<div class="square_white" id="square' + (8 - i) + '.' + arr_leters[7 - j] + '"></div>';
            } else {
                myCell.innerHTML = '<div class="square_black" id="square' + (8 - i) + '.' + arr_leters[7 - j] + '"></div>';
            }
            myRow.appendChild(myCell);
        }
        fragment.appendChild(myRow);
    }

    myTable.appendChild(fragment);
    doc.getElementById('myChessTable').appendChild(myTable);
}

function letersUp() {

    let fragment = doc.createDocumentFragment();
    let myTable = doc.createElement('table');

    for (let i = 0; i < 8; i++) {
        let myRow = doc.createElement('td');
        myRow.innerHTML = '<div class="square_white" id="letersUp">' + arr_leters[i] + '</div>';
        fragment.appendChild(myRow);
    }

    myTable.appendChild(fragment);
    doc.getElementById('letersUp').appendChild(myTable);
}

function letersDown() {

    let fragment = doc.createDocumentFragment();
    let myTable = doc.createElement('table');

    for (let i = 0; i < 8; i++) {
        let myRow = doc.createElement('td');
        myRow.innerHTML = '<div class="square_white" id="letersDown">' + arr_leters[i] + '</div>';
        fragment.appendChild(myRow);
    }

    myTable.appendChild(fragment);
    doc.getElementById('letersDown').appendChild(myTable);
}

function numbersLeft() {

    let fragment = doc.createDocumentFragment();
    let myTable = doc.createElement('table');

    for (let i = 0; i < 8; i++) {
        let myRow = doc.createElement('tr');
        myRow.innerHTML = '<div class="square_white" id="numbersLeft">' + (8 - i) + '</div>';
        fragment.appendChild(myRow);
    }

    myTable.appendChild(fragment);
    doc.getElementById('numbersLeft').appendChild(myTable);
}

function numbersRight() {

    let fragment = doc.createDocumentFragment();
    let myTable = doc.createElement('table');

    for (let i = 0; i < 8; i++) {
        let myRow = doc.createElement('tr');
        myRow.innerHTML = '<div class="square_white" id="numbersRight">' + (8 - i) + '</div>';
        fragment.appendChild(myRow);
    }

    myTable.appendChild(fragment);
    doc.getElementById('numbersRight').appendChild(myTable);
}

chessTable();
letersUp();
letersDown();
numbersLeft();
numbersRight();


doc.getElementById('square8.H').innerHTML = ('<img src="img/rook.png" alt="">');
doc.getElementById('square8.G').innerHTML = ('<img src="img/knight.png" alt="">');
doc.getElementById('square8.F').innerHTML = ('<img src="img/bishop.png" alt="">');
doc.getElementById('square8.E').innerHTML = ('<img src="img/queen.png" alt="">');
doc.getElementById('square8.D').innerHTML = ('<img src="img/king.png" alt="">');
doc.getElementById('square8.C').innerHTML = ('<img src="img/bishop.png" alt="">');
doc.getElementById('square8.B').innerHTML = ('<img src="img/knight.png" alt="">');
doc.getElementById('square8.A').innerHTML = ('<img src="img/rook.png" alt="">');
for (let i = 0; i < 8; i++) {
    doc.getElementById('square7.' + arr_leters[7 - i]).innerHTML = ('<img src="img/pown.png" alt="">');
}

doc.getElementById('square1.H').innerHTML = ('<img src="img/rook_w.png" alt="">');
doc.getElementById('square1.G').innerHTML = ('<img src="img/knight_w.png" alt="">');
doc.getElementById('square1.F').innerHTML = ('<img src="img/bishop_w.png" alt="">');
doc.getElementById('square1.E').innerHTML = ('<img src="img/queen_w.png" alt="">');
doc.getElementById('square1.D').innerHTML = ('<img src="img/king_w.png" alt="">');
doc.getElementById('square1.C').innerHTML = ('<img src="img/bishop_w.png" alt="">');
doc.getElementById('square1.B').innerHTML = ('<img src="img/knight_w.png" alt="">');
doc.getElementById('square1.A').innerHTML = ('<img src="img/rook_w.png" alt="">');
for (let i = 0; i < 8; i++) {
    doc.getElementById('square2.' + arr_leters[7 - i]).innerHTML = ('<img src="img/pown_w.png" alt="">');
}


//('<img src="../Homework Nº4/Shop/img/1.jpg" alt="">')