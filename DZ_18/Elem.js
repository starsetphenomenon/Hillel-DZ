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
            for (let i in this.attributes) {
                if (i === 'className') {
                    myNewElem.setAttribute('class', this.attributes[i]);
                }
                myNewElem.setAttribute(i, this.attributes[i]);
            }
            let toAppendElem = document.querySelector(`${parent}`);
            toAppendElem.appendChild(myNewElem);
        }
    }
};