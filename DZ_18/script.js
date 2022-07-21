let myNewElem = new Elem('div', 'myFirstElem', {
    id: 'elemID',
    className: 'elemClass',
    data: 'someDataAttribute'
});

let myNewElem2 = new Elem('span', '<img src="some IMG URL"></img> <br> <a href="some URL" >TEXT URL</a>', {
    id: 'elemID2',
    className: 'elemClass',
    data: 'someDataAttribute2'
}, myNewElem);

myNewElem.renderElem('.myElements', 1);
myNewElem2.renderElem('body', 3);