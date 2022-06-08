const inputText = document.getElementById('myText');
const getTextBtn = document.getElementById('myBtn');
const myForm = document.getElementById('myForm');
const myList = document.getElementById('myList');


getTextBtn.onclick = () => {
    if (inputText.value != '') {
        let listElement = document.createElement('li');
        listElement.innerHTML = inputText.value;
        myList.prepend(listElement);
        inputText.value = '';
    }
};