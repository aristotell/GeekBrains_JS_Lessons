var title = ['Alpine Pro', 'Cappa', 'Dunlop', 'New Balance', 'Nike Air Max 270', 'Alpine Star', 'Wall', 'Sportiva'];
var img = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', ];
var info = ['some info', 'some info', 'some info', 'some info', 'some info', 'some info', 'some info', 'some info', 'some info', ];


var arr_products = [];

var arr_buffer = [];
var arr_cart = [];

var getProduct = function() {
    let price = [];

    for (let i = 0; i < title.length; i++) {
        price.push(Math.floor(Math.random() * 1000 + 1050));
    }

    var products = [];
    for (let i = 0; i < 100; i++) {

        var newPoroduct = {
            id: 'id',
            img: img[Math.floor(Math.random() * img.length)],
            title: title[Math.floor(Math.random() * title.length)],
            info: info[Math.floor(Math.random() * info.length)],
            price: price[Math.floor(Math.random() * price.length)]
        };
        products.push(newPoroduct);
    };


    return products;
};


var loadProduct = function() {
    let loadedContent = getProduct();
    arr_buffer = loadedContent;

    let fragment = document.createDocumentFragment();

    for (let i = 0; i < 100; i++) {
        let newParagraph = document.createElement('span');

        newParagraph.innerHTML = ('<div class="product_box"><div class="prod_img"><img src="' + loadedContent[i].img + '" alt=""></div><div class="prod_title">' + loadedContent[i].title + '</div><div class="prod_info">' + loadedContent[i].info + '</div><div class="price">' + loadedContent[i].price + ' p.' + '<div class="add_button"><span class="myButton" value="В Корзину" id="myButton_' + i + ' "onclick="put_tu_cart(this)">В Корзину</span></div></div>');
        fragment.appendChild(newParagraph);
    }

    document.querySelector('.content').appendChild(fragment);
};


window.addEventListener('load', loadProduct);



function put_tu_cart(button) {
    var total_price = 0;
    let myButton;
    myButton = (button.id);
    let prod_number = (myButton[9] + '' + myButton[10]);
    arr_cart.push(arr_buffer[prod_number]);
    var total_price = 0;
        for (let i = 0; i < arr_cart.length; i++) {
        total_price += (arr_cart[i].price * 1);

    }
    console.log(arr_cart);
    console.log(total_price); // Сделал через сонсоль потому что интерфейс ёще не сделан.
}

// Total price