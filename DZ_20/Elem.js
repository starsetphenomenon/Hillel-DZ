class Elem {
    constructor(elemType, attributes = {}, elemParent) {
        this.elemType = elemType;
        this.attributes = attributes;
        this.elemParent = elemParent;
    }
    renderElem(data) {
        let priority = {
            low: 'Low',
            minor: 'Minor',
            mayor: 'Mayor',
            high: 'High'
        };
        let status = {
            open: 'Open',
            'in progress': 'In progress',
            done: 'Done'
        };

        function getOption(options) {
            let result = '';
            for (const key in options) {
                result += `<option value="${key}">${options[key]}</option>`;
            }
            return result;
        }
        let elem = document.createElement(`${this.elemType}`);
        for (const key in this.attributes) {
            elem.setAttribute(`${key}`, `${this.attributes[key]}`);
        }
        elem.innerHTML = `
        <div class="top">
            <div contenteditable="true" class="title">${data.title}</div>
                <select id="${data.id}" class="priority">
                ${getOption(priority)}
                </select>
        </div>
        <div class="bottom">
            <div contenteditable="true" class="desc">${data.desc}</div>
                <select id="${data.id}" class="status">
                ${getOption(status)}
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
    }
}