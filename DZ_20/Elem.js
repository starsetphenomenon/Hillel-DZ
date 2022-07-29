class Elem {
    constructor(elemType, elemClass, elemParent) {
        this.elemType = elemType;
        this.elemClass = elemClass;
        this.elemParent = elemParent;
    }
    renderElem(data) {
        let elem = document.createElement(`${this.elemType}`);
        elem.classList.add(`${this.elemClass}`);
        elem.setAttribute('id', data.id);
        elem.innerHTML = `<div class="top">
            <div contenteditable="true" class="title">${data.title}</div>
            <select id="${data.id}" class="priority">
                <option value="low">Low</option>
                <option value="minor">Minor</option>
                <option value="mayor">Mayor</option>
                <option value="high">High</option>
            </select>
            </div>
            <div class="bottom">
            <div contenteditable="true" class="desc">${data.desc}</div>
            <select id="${data.id}" class="status">
            <option value="open">Open</option>
            <option value="in progress">In progress</option>
            <option value="done">Done</option>
            </select>
            </div>
            <div class="buttons">
            <button class="elemDelete" id="${data.id}">Delete</button>
            </div>`;
        let toAppendElem = document.querySelector(`${this.elemParent}`);
        toAppendElem.appendChild(elem);
    }
    renderElems(data) {
        for (let items of data) {
            this.renderElem(items);
        }
    };
};