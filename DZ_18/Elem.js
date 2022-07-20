class Elem {
    constructor(elemType, content, attributes = {}, child) {
        this.elemType = elemType;
        this.attributes = attributes;
        this.child = child;
        this.content = content;
    }
    renderElem(parent, amount) {
        for (let i = 0; i < amount; i++) {
            let myNewElem = document.createElement(`${this.elemType}`);
            myNewElem.innerHTML = `${ this.content}`;
            let keys = Object.keys(this.attributes);
            let values = Object.values(this.attributes);
            for (let i = 0; i < Object.keys(this.attributes).length; i++) {
                myNewElem.setAttribute(`${keys[i]}`, values[i]);
            }
            let toAppendElem = document.querySelector(`${parent}`);
            toAppendElem.appendChild(myNewElem);
        }
    }
};