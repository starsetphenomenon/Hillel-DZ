const hoursElems = document.querySelectorAll('.hours>*');
const minutesElems = document.querySelectorAll('.minutes>*');
const secondsElems = document.querySelectorAll('.seconds>*');

const refreshTimeElem = function (timeType, position) {
    let date = new Date();
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

    if (position === 0) {
        if (timing.toString().length === 1) {
            elem[position].setAttribute('id', 0);
            elem[position].src = `${numbersList[position]}`;
        } else {
            elem[position].setAttribute('id', Array.from(timing.toString())[position]);
            elem[position].src = `${numbersList[Array.from(timing.toString())[position]]}`;
        }
    }
    if (position === 1) {
        if (timing.toString().length === 1) {
            elem[position].setAttribute('id', timing);
            elem[position].src = `${numbersList[timing]}`;
        } else {
            elem[position].setAttribute('id', Array.from(timing.toString())[position]);
            elem[position].src = `${numbersList[Array.from(timing.toString())[position]]}`;
        }
    }
};


const checkCurrentTime = function (elem, time, position) {
    let date = new Date();
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
            refreshTimeElem(`${time}`, position);
        }
    }
    if (position === 1) {
        if (elemID != +timing.toString()[position]) {
            refreshTimeElem(`${time}`, position);
        }
    }
};

const updateMyTime = function () {
    checkCurrentTime(hoursElems[0], 'hours', 0);
    checkCurrentTime(hoursElems[1], 'hours', 1);
    checkCurrentTime(minutesElems[0], 'minutes', 0);
    checkCurrentTime(minutesElems[1], 'minutes', 1);
    checkCurrentTime(secondsElems[0], 'seconds', 0);
    checkCurrentTime(secondsElems[1], 'seconds', 1);
};

let changeTime = setInterval(updateMyTime, 1000);