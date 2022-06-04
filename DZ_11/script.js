const inputText = document.getElementById('myText');
const getTextBtn = document.getElementById('myBtn');

getTextBtn.onclick = () => {
    console.log(`My input text: ${inputText.value}`);
    inputText.classList.add('hidden');
    getTextBtn.classList.add('hidden');
    alert(`Hello, ${inputText.value}`);
};