import {Character} from 'Character';
import {Controlls} from 'lib/Controlls';

export class PCCharacter extends Character {
    constructor() {
        super(200);
        this.ctrl = new Controlls();
        this.color = 0xff0000;
        this.name = 'Simon';
    }
    update() {
        if (this.ctrl != undefined) {
            this.move( [this.ctrl.arrows.x, 0, this.ctrl.arrows.y ]);
        }
        document.getElementById('ui').innerHTML = this.health + '/' + this.currentHealth;
        
    }
}