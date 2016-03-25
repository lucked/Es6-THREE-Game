import * as THREE from '/node_modules/three/three';

import {Character} from 'Character';
import {Controlls} from 'lib/Controlls';

export class PCCharacter extends Character {
    constructor() {
        super(
            {material: new THREE.MeshBasicMaterial( { color: 0xffffff } )}
            , 200
        );
        
        this.ctrl = new Controlls();
        
        this.name = 'Simon';
    }
    update() {
        if (this.ctrl != undefined) {
            this.move([this.ctrl.arrows.x, 0, this.ctrl.arrows.y]);
        }
        document.getElementById('ui').innerHTML = this.health + '/' + this.currentHealth;
        
    }
}