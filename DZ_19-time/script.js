const hoursElems = document.querySelectorAll('.hours>*');
const minutesElems = document.querySelectorAll('.minutes>*');
const secondsElems = document.querySelectorAll('.seconds>*');

const refreshTimeElem = function (timeType, position, date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let elem = null;
    let timing = null;
    switch (timeType) {
        case 'hours':
            elem = hoursElems;
            timing = hours;
            break;
        case 'minutes':
            elem = minutesElems;
            timing = minutes;
            break;
        case 'seconds':
            elem = secondsElems;
            timing = seconds;
            break;
        default:
            console.log('Wrong input');
            break;
    }

    if (position === 0 || position === 1) {
        const attrValue = position ? timing : 0;
        const srcValue = position ? timing : position;


        if (timing.toString().length === 1) {
            elem[position].setAttribute('id', attrValue);
            elem[position].src = `${numbersList[srcValue]}`;
        } else {
            elem[position].setAttribute('id', Array.from(timing.toString())[position]);
            elem[position].src = `${numbersList[Array.from(timing.toString())[position]]}`;
        }
    }
};


const checkCurrentTime = function (elem, time, position, date) {
    let timing = null;
    switch (time) {
        case 'hours':
            timing = date.getHours();
            break;
        case 'minutes':
            timing = date.getMinutes();
            break;
        case 'seconds':
            timing = date.getSeconds();
            break;
        default:
            console.log('Wrong input');
            break;
    }
    let elemID = elem.getAttribute('id');
    if (position === 0) {
        if (elemID != +timing.toString()[position]) {
            refreshTimeElem(`${time}`, position, date);
        }
    }
    if (position === 1) {
        if (elemID != +timing.toString()[position]) {
            refreshTimeElem(`${time}`, position, date);
        }
    }
};

const updateMyTime = function () {
    let date = new Date();
    checkCurrentTime(hoursElems[0], 'hours', 0, date);
    checkCurrentTime(hoursElems[1], 'hours', 1, date);
    checkCurrentTime(minutesElems[0], 'minutes', 0, date);
    checkCurrentTime(minutesElems[1], 'minutes', 1, date);
    checkCurrentTime(secondsElems[0], 'seconds', 0, date);
    checkCurrentTime(secondsElems[1], 'seconds', 1, date);
};

let changeTime = setInterval(updateMyTime, 1000);



















// ANALOG WATCH CODE STARTS HERE ~~~~~~~~~~~~~~
const secondsArrow = document.getElementById('secondsArrow');
const minutesArrow = document.getElementById('minutesArrow');
const hoursArrow = document.getElementById('hoursArrow');

const refreshArrow = function (arrowName) {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let miliseconds = date.getMilliseconds();
    let hours = date.getHours();
    let angle = null;

    switch (arrowName) {
        case 'seconds':
            angle = (seconds * 360) / 60 + (miliseconds / 1000) * 0.36;    
            secondsArrow.style.transform = `translateX(-50%) rotate(${angle}deg)`;
            secondsArrow.setAttribute('angle', angle);
            break;
        case 'minutes':
            angle = (minutes * 360) / 60;
            minutesArrow.style.transform = `translateX(-50%) rotate(${angle}deg)`;
            minutesArrow.setAttribute('angle', angle);
            break;
        case 'hours':
            angle = (hours * 360) / 12 + (minutes / 60) * 30;
            hoursArrow.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
            hoursArrow.setAttribute('angle', angle);
            break;
        default:
            console.log('Wrong input!');
            break;
    }
};

const checkAngle = function (timeType, date) {
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let angle = null;

    switch (timeType) {
        case 'seconds':
            angle = (seconds * 360) / 60;
            if (+secondsArrow.getAttribute('angle') != angle) {
                refreshArrow('seconds');
            }
            break;
        case 'minutes':
            angle = (minutes * 360) / 60;
            if (+minutesArrow.getAttribute('angle') != angle) {
                refreshArrow('minutes');
            }
            break;
        case 'hours':
            angle = (hours * 360) / 12;
            if (+hoursArrow.getAttribute('angle') != angle) {
                refreshArrow('hours');
            }
            break;
        default:
            console.log('Wrong input!');
            break;
    }
};

const refreshAllArrows = function () {
    let date = new Date();
    checkAngle('seconds', date);
    checkAngle('minutes', date);
    checkAngle('hours', date);
};

let analogInterval = setInterval(refreshAllArrows, 1000);