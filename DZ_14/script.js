const inputText = document.getElementById('myText');
const getTextBtn = document.getElementById('myBtn');
const myForm = document.getElementById('myForm');
const myList = document.getElementById('myList');
const deleteItems = document.getElementById('deleteAll');
const checkItems = document.getElementById('checkAll');
const allDeleteBtn = document.getElementsByClassName('elemDelete');
const listElements = myList.childNodes;
const todoList = document.querySelector('.todoList');
const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const loginBtn = document.getElementById('loginBtn');
const loginInput = document.getElementById('login');
const passInput = document.getElementById('pass');
const errorMsg = document.getElementById('error');
const wrongMsg = document.getElementById('wrong');
const loginForm = document.querySelector('.loginForm');
let loginCheck = false;
let passCheck = false;
let mailCheck = false;
let login = 'test@test.te';
let pass = 'password';

loginBtn.disabled = true;

// LOGIN FORM
const onEmailCheck = function (e) {
    if (emailRegEx.test(loginInput.value)) {
        errorMsg.style.display = 'none';
        mailCheck = true;
    } else {
        errorMsg.style.display = 'block';
        mailCheck = false;
    }
};

const onLoginBtn = function (e) {
    if (mailCheck && loginInput.value === login && passInput.value === pass) {
        loginForm.style.display = 'none';
        todoList.style.display = 'block';
    } else {
        wrongMsg.style.display = 'block';
        passInput.value = '';
    }
};

const onLoginInput = function (e) {
    if (e.target.value != '') {
        loginCheck = true;
    } else {
        loginCheck = false;
    }
};

const onPassInput = function (e) {
    if (e.target.value != '') {
        passCheck = true;
    } else {
        passCheck = false;
    }
};

const onForm = function (e) {
    e.preventDefault();
    if (loginCheck === false || passCheck === false) {
        loginBtn.disabled = true;
    } else {
        loginBtn.disabled = false;
    }
};

loginBtn.addEventListener('click', onLoginBtn);
loginInput.addEventListener('blur', onEmailCheck);
loginInput.addEventListener('input', onLoginInput);
passInput.addEventListener('input', onPassInput);
myForm.addEventListener('input', onForm);
// LOGIN FOROM --- END

// TODO LIST
const onListAction = function (e) {
    if (e.target.classList.contains('elemDelete')) {
        e.target.parentNode.remove();
    }
    if (e.target.classList.contains('elemCheck')) {
        e.target.parentNode.firstChild.classList.toggle('checkedItem');
    }
};
const checkElem = function (e) {
    e.target.parentNode.firstChild.classList.toggle('checkedItem');
};
const createListElem = function () {
    if (inputText.value.trim() !== '') {
        let listElement = document.createElement('li');
        let elementDelete = document.createElement('button');
        let elementCheck = document.createElement('input');
        elementDelete.setAttribute('id', `elemDelete${listElements.length}`);
        elementDelete.setAttribute('class', 'elemDelete');
        elementDelete.innerHTML = 'Delete';
        elementCheck.type = "checkbox";
        elementCheck.innerHTML = 'Check';
        elementCheck.setAttribute('id', `elemCheck${listElements.length}`);
        elementCheck.setAttribute('class', 'elemCheck');
        listElement.innerHTML = `<span class='elemText'>${inputText.value}</span>`;
        listElement.appendChild(elementCheck);
        listElement.appendChild(elementDelete);
        myList.prepend(listElement);
        inputText.value = '';
        myList.addEventListener('click', onListAction);
    }
};

const deleteAll = function () {
    Array.from(myList.children).forEach(el => el.remove());
};
const checkAll = function () {
    Array.from(myList.children).forEach(el => el.firstChild.classList.add('checkedItem'));
    Array.from(document.getElementsByClassName('elemCheck')).forEach(el => el.checked = true);
};

const enterPressed = function (e) {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        createListElem();
    }
};

deleteItems.addEventListener('click', deleteAll);
checkItems.addEventListener('click', checkAll);
getTextBtn.addEventListener('click', createListElem);
inputText.addEventListener('keyup', enterPressed);