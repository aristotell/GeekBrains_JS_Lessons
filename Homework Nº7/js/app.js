var doc = document;


var size = doc.getElementById('sizeSelect');
var newColor = doc.getElementById('color');
var canvas = doc.getElementById('canv');
var ctx = canvas.getContext('2d');
var xCoord = doc.getElementById('xCoord');
var yCoord = doc.getElementById('yCoord');
var tools = ['brush', 'rectangle'];
var activeTool = '';


var system = {
    width: canvas.getAttribute('width'),
    height: canvas.getAttribute('height'),
    currentColor: newColor.value,
    currentTool: '',
    brushSize: size.value
};

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
        return 'brush';
    } else if (button.id == 'notbrush') {
        return 'Draft';
    } else if (button.id == 'notbrush2') {
        return 'Rectangle';
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



var startDraw = function(evt) {

    system.currentColor = doc.getElementById('color').value; // Обновляет цвет.

    if (system.currentTool == 'brush') {
        drawLines(evt);
    } else if (system.currentTool == 'Draft') {
        drawClear(evt);
    } else if (system.currentTool == 'Rectangle') {
        drawRect(evt);
    }
};


var drawLines = function(evt) {
    canvas.onmousemove = function(evt) {
        ctx.beginPath();
        ctx.fillStyle = system.currentColor;
        //ctx.fillRect (xCoord.innerText , yCoord.innerText, system.brushSize, system.brushSize);
        ctx.arc(xCoord.innerText, yCoord.innerText, system.brushSize, 0, Math.PI * 2, false);
        ctx.fill();
        //ctx.stroke();
    }
};


var drawClear = function(evt) {
    canvas.onmousemove = function(evt) {
        ctx.beginPath();
        ctx.fillStyle = system.currentColor;
        ctx.clearRect(xCoord.innerText, yCoord.innerText, system.brushSize, system.brushSize);
        ctx.stroke();
    }
};

var drawRect = function(evt) {
    var myclientX_1 = evt.offsetX; //Берём координаты при нажатии кнопки мыши
    var myclientY_1 = evt.offsetY;

    canvas.onmouseup = function(evt) {
        var myclientX_2 = evt.offsetX; // Берём координаты при отпускании кнопки мыши
        var myclientY_2 = evt.offsetY;

        ctx.beginPath();
        ctx.strokeStyle = system.currentColor;
        ctx.strokeRect(myclientX_1, myclientY_1, myclientX_2 - myclientX_1, myclientY_2 - myclientY_1);
        ctx.fill();
        ctx.stroke();

    }
};

var endDraw = function(evt) {
    canvas.onmousemove = null;
    doc.getElementById('currentTool').innerText = system.currentTool;
    //console.log(doc.getElementById('currentTool'));

};

// Генерирую ссылку на картинку для скачивания

function downloadImage() {

    var image = canvas.toDataURL();
    var aLink = document.createElement('a');
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("click");
    aLink.download = 'image.png';
    aLink.href = image;
    aLink.innerText = 'Download'
    aLink.dispatchEvent(evt);
    //console.log(aLink);
    doc.getElementById('myLink').appendChild(aLink);
};

canvas.addEventListener('mousemove', getCoordinates);
doc.addEventListener('click', mouseActions);
canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mouseup', endDraw);