const items = document.getElementById('items');
const basket = document.getElementById('basket');
const total = document.getElementById('total');
const makeOrder = document.getElementById('makeOrder');
const myOrders = document.getElementById('myOrders');

myOrders.innerHTML = localStorage.getItem(`ordersHistory`);

const renderItems = function () {
    itemsList.forEach(el => {
        items.innerHTML += `
        <div class="item">
            <div class="name">${el.itemName}</div>
            <div class="price">$${el.price}</div>
            <button id="${el.id}" class="buy">Buy</button>
        </div>`;
    });
};

renderItems();

const basketList = [];

const onItemsBuy = function (e) {
    if (!e.target.classList.contains('buy')) {
        return;
    }
    let id = +e.target.getAttribute('id');
    let item = itemsList.find((el) => el.id === id);
    if (basketList.some(el => el.id === id)) {
        basketList.find((el) => {
            if (el.id === id)
                el.count++;
        });
    } else {
        basketList.push({
            ...item,
            count: 1,
        });
    }
    renderTotalPrice();
    renderBasket();
};

const renderTotalPrice = function () {
    let sum = 0;
    basketList.forEach(el => {
        sum += el.price * el.count;
    });
    total.innerText = `$${sum}`;
};

const renderBasket = function () {
    basket.innerHTML = '';
    basketList.forEach(el => {
        basket.innerHTML += `<li class="basketItem">
        <div class="basketName">${el.itemName}</div>
        <div class="basketCount">${el.count}</div>
        <div class="basketTotalPrice">$${+el.price*el.count}</div>
        </li>`;
    });
};

renderBasket();

const setStorage = function () {
    localStorage.setItem(`myOrders`, JSON.stringify(myOrdersList));
};

const getStorage = function () {
    return JSON.parse(localStorage.getItem(`myOrders`));
};

let basketListStorage = getStorage();

const renderOrderStory = function () {
    if (basketListStorage != null) {
        basketListStorage.forEach(el => {
            myOrders.innerHTML += `
          <li class="orderHistoryElem">
              <div class="date">${el.date}</div>
              <div class="name">${el.itemName}</div>            
              <div class="count">${el.count}</div>    
              <div class="price">$${el.price * el.count}</div>       
              <button ID="${el.deleteID}" class="deleteOrder">Удалить</button>
          </li>`;
        });
    }
};

renderOrderStory();

let myOrdersList = [];

let myStorage = getStorage();
if (myStorage != null) {
    myStorage.forEach(e => myOrdersList.push(e));
};

const onMakeOrder = function () {
    let date = new Date();
    basketList.forEach(elem => {
        myOrdersList.push({
            ...elem,
            date: date.getDate() + '.' + date.getMonth(),
            deleteID: date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds(),
        });
    });

    if (myOrdersList != null) {
        myOrders.innerHTML = '';
        myOrdersList.forEach((el, id) => {
            el.deleteID += id;
            myOrders.innerHTML += `
          <li class="orderHistoryElem">
              <div class="date">${el.date}</div>
              <div class="name">${el.itemName}</div>            
              <div class="count">${el.count}</div>    
              <div class="price">$${el.price * el.count}</div>       
              <button ID="${el.deleteID}" class="deleteOrder">Удалить</button>
          </li>`;
        });
    }
    setStorage();
};


const onOrderDelete = function (e) {
    if (!e.target.classList.contains('deleteOrder')) {
        return;
    }
    e.target.parentNode.remove();
    console.log(myOrdersList);
    myOrdersList.forEach((elem, i) => {
        if (elem.deleteID === e.target.getAttribute('ID')) {
            return myOrdersList.splice(i, 1);
        }
    });
    setStorage();
};

myOrders.addEventListener('click', onOrderDelete);
items.addEventListener('click', onItemsBuy);
makeOrder.addEventListener('click', onMakeOrder);