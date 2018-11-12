    var doc = document;
    var myImg;
    var  myContiner = function () {
        let fragment = doc.createDocumentFragment();
        let myDiv = doc.createElement('div');
        myDiv.className = 'actual_img';
        myDiv.id = 'myImg';
        doc.body.appendChild(myDiv);
    }

    var gen_Galery = function() {
        let fragment = doc.createDocumentFragment();

        let myDiv = doc.createElement('div');
        myDiv.id = 'img_continer'

        let myButt_Scrol_Left = doc.createElement('button');
        myButt_Scrol_Left.id = 'scroll_Left';
        let myLeftArrow = doc.createElement('img')
        myLeftArrow.src = ('html img/Left_Arrow.png')
        myButt_Scrol_Left.appendChild(myLeftArrow);

        myDiv.appendChild(myButt_Scrol_Left);

        let myFigure = doc.createElement('figure');
        myFigure.className = 'scrolling';
        myFigure.id = 'scrolling';

        for (let i = 1; i <= 22; i++) {
            myImg = doc.createElement('img');
            myImg.src = ('img/' + i + '.jpg');
            myFigure.appendChild(myImg);
        }
        myDiv.appendChild(myFigure);
        let myButt_Scrol_Right = doc.createElement('button');
        myButt_Scrol_Right.id = 'scroll_Right';
        let myRightArrow = doc.createElement('img')
        myRightArrow.src = ('html img/Right_Arrow.png')
        myButt_Scrol_Right.appendChild(myRightArrow);


        myDiv.appendChild(myButt_Scrol_Right);

        doc.body.appendChild(myDiv);
    }

    function eventos(evt) {
        console.log(evt);
        let fragment = doc.createDocumentFragment();
        let temp_buffer = evt.toElement.outerHTML;
        if (evt.target.parentElement.id == "scrolling") {
            doc.getElementById('myImg').innerHTML = temp_buffer;
        }

    }

    doc.getElementById('myImg').innerHTML = '<img src="img/1.jpg">';

    gen_Galery();

    ;

    var scroll_Left = function(evt) {
        if (evt.toElement.parentNode.id == 'scroll_Left') {
            let xScrollWidth = doc.getElementById('scrolling').scrollWidth;
            console.log(xScrollWidth);
            let scrol_position = doc.getElementById('scrolling').scrollLeft;
            let move_scrol_to;
            if (scrol_position >= 100) {
                move_scrol_to = scrol_position - 100;
            } else {
                move_scrol_to = 0;
            }
            doc.getElementById('scrolling').scrollLeft = move_scrol_to;
        }
    }


    var scroll_Right = function (evt) {
        if (evt.toElement.parentNode.id == 'scroll_Right') {
            let xScrollWidth = doc.getElementById('scrolling').scrollWidth;
            console.log(xScrollWidth);
            let scrol_position = doc.getElementById('scrolling').scrollLeft;
            let move_scrol_to;
            if (scrol_position + 100 <= xScrollWidth) {
                move_scrol_to = scrol_position + 100;
            } else {
                move_scrol_to = xScrollWidth;
            }
            doc.getElementById('scrolling').scrollLeft = move_scrol_to;
        }
    }

    // Наложение функции через нажатие кнопки мыши
    myContiner();
    doc.addEventListener('click', eventos);
    doc.addEventListener('click', scroll_Left);
    doc.addEventListener('click', scroll_Right);