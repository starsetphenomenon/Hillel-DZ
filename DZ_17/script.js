const items = document.getElementById('items');
const basket = document.getElementById('basket');
const total = document.getElementById('total');
const makeOrder = document.getElementById('makeOrder');
const myOrders = document.getElementById('myOrders');

myOrders.innerHTML = localStorage.getItem(`ordersHistory`);

function BasketItem(name, count, price) {
    this.name = name;
    this.count = count;
    this.price = price;
    let item = document.createElement('li');
    item.classList.add(`${name}`);
    item.innerHTML = `<div class="basketName">${name}</div>
    <div class="basketCount">${count}</div>
    <div class="basketTotalPrice">$${price}</div>`;
    return item;
}

const onItemsBuy = function (e) {
    if (e.target.classList.contains('buy')) {
        let name = e.target.parentNode.querySelector('.name').innerText;
        let price = e.target.parentNode.querySelector('.price').getAttribute('value');
        let count = 0;
        let totalPrice = 0;
        count++;
        let selector = '.' + name;
        name = new BasketItem(name, count, price);
        if (basket.querySelector(`${selector}`) != null) {
            let currentCount = Number(basket.querySelector(`${selector} > .basketCount`).innerText);
            currentCount++;
            basket.querySelector(`${selector} > .basketTotalPrice`).innerText = `$${currentCount*price}`;
            basket.querySelector(`${selector} > .basketCount`).innerText = `${currentCount}`;
        } else {
            basket.appendChild(name);
        }

        let prices = Array.from(basket.querySelectorAll('.basketTotalPrice')).map(elem => +elem.innerText.replace(/[^0-9]/g, ''));
        totalPrice = prices.reduce((a, b) => a + b, 0);
        total.innerText = `Total is: $${totalPrice}`;
    }
};

const onMakeOrder = function () {
    let date = new Date();
    let identifier = `${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}`;
    let orderHistoryElem = document.createElement('div');
    let deleteOrder = document.createElement('button');
    deleteOrder.innerText = 'Удалить';
    deleteOrder.classList.add('deleteOrder');
    let orderDate = document.createElement('span');
    orderDate.innerHTML = `${date.getDate()}.${date.getMonth()}`;
    orderHistoryElem.innerHTML = basket.innerHTML;
    orderHistoryElem.appendChild(orderDate);
    orderHistoryElem.appendChild(deleteOrder);
    basket.innerHTML = '';
    total.innerText = '';
    orderHistoryElem.classList.add('orderHistoryElem');
    myOrders.appendChild(orderHistoryElem);
    localStorage.setItem(`ordersHistory`, myOrders.innerHTML);
};


const onOrderDelete = function (e) {
    if (e.target.classList.contains('deleteOrder')) {
        e.target.parentNode.remove();
        localStorage.setItem(`ordersHistory`, myOrders.innerHTML);
    }
};

myOrders.addEventListener('click', onOrderDelete);
items.addEventListener('click', onItemsBuy);
makeOrder.addEventListener('click', onMakeOrder);