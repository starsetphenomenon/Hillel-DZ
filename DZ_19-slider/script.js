const slides = document.getElementById('slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let current = 3;
let speed = 3000;

const generateSlides = function (from) {
    for (let key in from) {
        let item = document.createElement('img');
        item.setAttribute('src', `${numbersList[key]}`);
        if (key != current) {
            item.classList.add('hidden');
        }
        slides.appendChild(item);
    }
};
generateSlides(numbersList);

const slideElements = document.querySelectorAll('#slides>*');

const onPrev = function () {
    clearInterval(changeSlides);
    if (current === 0) {
        current = slideElements.length;
    }
    current--;
    slideElements.forEach(el => el.classList.add('hidden'));
    slideElements[current].classList.remove('hidden');
    changeSlides = setInterval(changeSlide, speed);
};

const onNext = function () {
    clearInterval(changeSlides);
    current++;
    if (current >= slideElements.length) {
        current = 0;
    }
    slideElements.forEach(el => el.classList.add('hidden'));
    slideElements[current].classList.remove('hidden');
    changeSlides = setInterval(changeSlide, speed);
};

prev.addEventListener('click', onPrev);
next.addEventListener('click', onNext);

const changeSlide = function () {
    current++;
    slideElements.forEach(el => el.classList.add('hidden'));
    if (current === slideElements.length) {
        current = 0;
    }
    slideElements[current].classList.remove('hidden');
};

let changeSlides = setInterval(changeSlide, speed);