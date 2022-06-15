const inputText = document.getElementById('myText');
const getTextBtn = document.getElementById('myBtn');
const myForm = document.getElementById('myForm');
const myList = document.getElementById('myList');
const deleteItems = document.getElementById('deleteAll');
const checkItems = document.getElementById('checkAll');
const allDeleteBtn = document.getElementsByClassName('elemDelete');
const listElements = myList.childNodes;

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
        elementDelete.addEventListener('click', e => {
            e.target.parentNode.remove();
        });
        elementCheck.addEventListener('change', e => {
            e.target.parentNode.firstChild.classList.toggle('checkedItem');
        });
    }
};

const deleteAll = function () {
    Array.from(myList.children).forEach(el => el.remove());
};
const checkAll = function () {
    Array.from(myList.children).forEach(el => el.firstChild.classList.add('checkedItem'));
    Array.from(document.getElementsByClassName('elemCheck')).forEach(el => el.checked = true);
};

deleteItems.addEventListener('click', deleteAll);
checkItems.addEventListener('click', checkAll);
getTextBtn.addEventListener('click', createListElem);
inputText.addEventListener('keyup', e => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        createListElem();
    }
});