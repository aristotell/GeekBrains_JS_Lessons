var doc = document;

var size = doc.getElementById('sizeSelect');
var newColor = doc.getElementById('color');
var canvas = doc.getElementById('canv');
var divTools = doc.getElementById('tools');

var ctx = canvas.getContext('2d');
var xCoord = doc.getElementById('xCoord');
var yCoord = doc.getElementById('yCoord');
//var tools = ['brush', 'rectangle'];
var activeTool = '';


var system = {
    width: canvas.getAttribute('width'),
    height: canvas.getAttribute('height'),
    currentColor: newColor.value,
    currentTool: '',
    brushSize: size.value
};

var myEvt = function(evt) {
    console.log(evt);
}
myEvt();

var getCoordinates = function(evt) {

    let xyMas = [];
    let x = evt.offsetX;
    let y = evt.offsetY;

    xyMas = {
        x: x,
        y: y,
        draw: true
    };

    xCoord.innerText = x;
    yCoord.innerText = y;
    //ctx.fillRect(x, y, 10, 10);
    //console.log(evt);
    return xyMas;
};

var renderSystem = function(obj, elem, action) {
    obj[elem] = action;
    console.log('done!');
    console.log(obj);
    doc.getElementById('currentTool').innerText = system.currentTool;
};


var switchTool = function(button) {
    if (button.id == 'brush') {
        canvas.style.cursor = "url('tools_icon/tool_1.png') 0 125, auto";
        lineArrX = [xCoord];
        lineArrY = [yCoord];
        return 'brush';
    } else if (button.id == 'notbrush') {
        canvas.style.cursor = "url('tools_icon/tool_3.png') 0 100, auto";
        lineArrX = [xCoord];
        lineArrY = [yCoord];
        return 'Eraser';
        console.log('Eraser');
    } else if (button.id == 'notbrush2') {
        canvas.style.cursor = "url('tools_icon/tool_1.png') 0 125, auto";
        lineArrX = [xCoord];
        lineArrY = [yCoord];
        return 'Rectangle';
    } else if (button.id == 'line') {
        canvas.style.cursor = "url('tools_icon/tool_1.png') 0 125, auto";
        return 'line';
    }

};


var switchSize = function(list) {
    return list.value;
};

var switchColor = function(colorInput) {
    let a = newColor.value;
    return a;
};


var mouseActions = function(evt) {

    if (evt.target.classList.contains('toolButton') == true) {
        //console.log(system);
        renderSystem(system, 'currentTool', switchTool(evt.target));
    } else if (evt.target.id == 'sizeSelect') {
        renderSystem(system, 'brushSize', switchSize(evt.target));
    } else if (evt.target.id == 'color') {
        renderSystem(system, 'currentColor', switchColor(evt.target));
        //console.log(evt);
    } else if (evt.target.id == 'downloadImage') {
        downloadImage();
    };

};

var drawLines = function(evt) {
    canvas.onmousemove = function(evt) {
        ctx.beginPath();
        ctx.fillStyle = system.currentColor;
        ctx.arc(xCoord.innerText, yCoord.innerText, system.brushSize, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
    }
};

var drawClear = function(evt) {
    canvas.onmousemove = function(evt) {
        ctx.beginPath();
        ctx.fillStyle = system.currentColor;
        ctx.clearRect(xCoord.innerText - (system.brushSize / 2), yCoord.innerText - (system.brushSize / 2), system.brushSize, system.brushSize);
        ctx.stroke();
        ctx.closePath();
    }
};

var drawRect = function(evt) {

    let myclientX_1 = evt.offsetX; //Берём координаты при нажатии кнопки мыши
    let myclientY_1 = evt.offsetY;

    canvas.onmouseup = function(evt) {

        let myclientX_2 = evt.offsetX; // Берём координаты при отпускании кнопки мыши
        let myclientY_2 = evt.offsetY;

        ctx.beginPath();
        ctx.lineWidth = system.brushSize;
        ctx.strokeStyle = system.currentColor;
        ctx.strokeRect(myclientX_1, myclientY_1, myclientX_2 - myclientX_1, myclientY_2 - myclientY_1);
        ctx.stroke();
        ctx.closePath();
        canvas.onmouseup = null; // Заканчиваем событие.
    }
};

var drawLine = function(evt) {

    let myclientX_1 = evt.offsetX; //Берём координаты при нажатии кнопки мыши
    let myclientY_1 = evt.offsetY;

    canvas.onmouseup = function(evt) {

        let myclientX_2 = evt.offsetX; // Берём координаты при отпускании кнопки мыши
        let myclientY_2 = evt.offsetY;

        ctx.beginPath();
        ctx.lineWidth = system.brushSize;
        ctx.strokeStyle = system.currentColor;
        ctx.lineCap = "round";
        ctx.moveTo(myclientX_1, myclientY_1);
        ctx.lineTo(myclientX_2, myclientY_2);
        ctx.stroke();
        canvas.onmouseup = null; // Заканчиваем событие.
    }
}

var endDraw = function(evt) {
    canvas.onmousemove = null;
    doc.getElementById('currentTool').innerText = system.currentTool;
};

// Генерирую ссылку на картинку для скачивания

var startDraw = function(evt) {

    system.currentColor = doc.getElementById('color').value; // Обновляет цвет.
    console.log(system.currentTool + ' 1');
    if (system.currentTool == 'brush') {
        drawLines(evt);
    } else if (system.currentTool == 'Eraser') {

        drawClear(evt);
    } else if (system.currentTool == 'Rectangle') {
        drawRect(evt);
    } else if (system.currentTool == 'line') {
        drawLine(evt);
    }
};

var downloadImage = function() {

    let mylink1 = document.getElementById('myLink');
    let aLink = document.createElement('a');
    let image = canvas.toDataURL();
    aLink.id = 'aLink';
    aLink.download = 'image.png';
    aLink.href = image;
    aLink.innerText = 'Download';

    if (typeof myLink.childNodes[0] == 'undefined') {
        doc.getElementById('myLink').appendChild(aLink);
    } else {
        let el = doc.getElementById('aLink');
        el.remove();
        doc.getElementById('myLink').appendChild(aLink);
    }

};

canvas.addEventListener('mousemove', getCoordinates);
doc.addEventListener('click', mouseActions);
canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mouseup', endDraw);