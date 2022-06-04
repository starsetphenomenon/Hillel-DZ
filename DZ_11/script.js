const inputText = document.getElementById('myText');
const getTextBtn = document.getElementById('myBtn');
const myForm = document.getElementById('myForm');

getTextBtn.onclick = () => {
    console.log(`My input text: ${inputText.value}`);
    inputText.classList.add('hidden');
    getTextBtn.classList.add('hidden');
    myForm.innerHTML = `<h1>${inputText.value}</h1>`;
};