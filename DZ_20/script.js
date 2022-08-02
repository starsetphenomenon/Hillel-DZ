let storageItems = [];

function renderItems() {

    function getData() {
        return fetch('data.json').then(res => res.json());
    }
    let storageCards = getStorage('todoItems');
    let myElements = new Elem('div', {
        class: 'card'
    }, '.elements');

    if (!storageCards) {
        getData().then(res => {
            myElements.renderElems(res);
            storageItems = res;
            putInStorage('todoItems', storageItems);
            return res;
        }).then((res) => {
            setOption('priority', res);
            setOption('status', res);
        });
    } else {
        storageItems = storageCards;
        myElements.renderElems(storageCards);
        setOption('priority', storageCards);
        setOption('status', storageCards);
        return storageCards;
    }
}

renderItems();

function setOption(name, data) {
    let elem = document.querySelectorAll(`.${name}`);
    elem.forEach(el => {
        let id = el.getAttribute('id');
        let item = data.find(el => el.id == id);
        el.value = item[name].toLowerCase();
    });
}

function putInStorage(name, data) {
    localStorage.setItem(`${name}`, JSON.stringify(data));
}

function getStorage(name) {
    let storage = localStorage.getItem(`${name}`);
    return JSON.parse(storage);
}

const generateManually = function () {
    let elemID = document.querySelector('.elements').children.length;
    if (addTodoTitle.value.trim() === '' || addTodoDesc.value.trim() === '') {
        alert('Error: there is empty fields!');
        addTodoTitle.value = '';
        addTodoDesc.value = '';
        return;
    }
    let data = {
        "id": elemID,
        "title": addTodoTitle.value,
        "desc": addTodoDesc.value,
        "priority": "Low",
        "status": "Open"
    };
    let newElem = new Elem('div', {
        class: 'card'
    }, '.elements');
    newElem.renderElem(data);
    storageItems.push(data);
    putInStorage('todoItems', storageItems);
    addTodoTitle.value = '';
    addTodoDesc.value = '';
};

const deleteItem = function (e) {
    if (!e.target.classList.contains('elemDelete')) {
        return;
    }
    e.target.parentNode.parentNode.remove();
    let elemID = e.target.getAttribute('id');
    storageItems = storageItems.filter(el => el.id != elemID);
    putInStorage('todoItems', storageItems);
};

const optionOnChange = function (e) {
    if (!e.target.classList.contains('status') && !e.target.classList.contains('priority')) {
        return;
    }
    let elemID = e.target.getAttribute('id');
    let elem = storageItems.find(el => el.id == elemID);

    if (e.target.classList.contains('status')) {
        elem.status = e.target.value;
    }
    if (e.target.classList.contains('priority')) {
        elem.priority = e.target.value;
    }
    putInStorage('todoItems', storageItems);
};

const textOnChange = function (e) {
    if (!e.target.classList.contains('title') && !e.target.classList.contains('desc')) {
        return;
    }
    let elemID = e.target.parentNode.parentNode.getAttribute('id');
    let elem = storageItems.find(el => el.id == elemID);

    if (e.target.classList.contains('title')) {
        elem.title = e.target.innerText;
    }
    if (e.target.classList.contains('desc')) {
        elem.desc = e.target.innerText;
    }
    putInStorage('todoItems', storageItems);
};

const cards = document.querySelector('.elements');
const addTodoTitle = document.querySelector('.addTitle');
const addTodoDesc = document.querySelector('.addDesc');
const addTodoItem = document.getElementById('addTodoItem');

addTodoItem.addEventListener('click', generateManually);
cards.addEventListener('change', optionOnChange);
cards.addEventListener('input', textOnChange);
cards.addEventListener('click', deleteItem);