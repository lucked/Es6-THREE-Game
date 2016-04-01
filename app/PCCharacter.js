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
            let rotation = this.ctrl.arrows.x * this.speed * 0.0003,
                movement = this.ctrl.arrows.y * this.speed * 0.04;
            this.move([0, 0, movement]);
            this.rotate([0, rotation, 0]);
        }
        
        document.getElementById('ui').innerHTML = this.health + '/' + this.currentHealth;
        
        if(this.Mesh != null) {
            gameEnviroment.camera.easeTo(this.Mesh.position);
            gameEnviroment.camera.rotateTo(this.Mesh.quaternion);
        }
    }
}