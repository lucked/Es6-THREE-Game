/*
    access bound gameobject through this.gameObject()
*/

export class Script {
    constructor(tag = 'base') {
        this.tag = tag;
        this.gameObject = () => null;
    }
    
    get GameObject() {
        return this.gameObject();
    }
    
    update() {}
    start() {}
}