//import * as THREE from '/node_modules/three/three';

import {Character} from 'Character';
import {Controlls} from 'lib/Controlls';

export class PCCharacter extends Character {
    constructor() {
        super(200);
        
        this.ctrl = new Controlls();
        
        this.name = 'Simon';
    }
    update() {
        if (this.ctrl != undefined) {
            this.move([0, 0, this.ctrl.arrows.y]);
            this.rotate([0, this.ctrl.arrows.x * 0.01, 0]);
        }
        
        document.getElementById('ui').innerHTML = this.health + '/' + this.currentHealth;
        
        if(this.Mesh != null) {
            gameEnviroment.camera.easeTo(this.Mesh.position);
        }
    }
}