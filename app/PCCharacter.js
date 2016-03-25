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
            let easingAmount = .01;

            var xDistance = this.Mesh.position.x - gameEnviroment.camera.position.x;
            var yDistance = this.Mesh.position.y - (gameEnviroment.camera.position.y - 200);
            var zDistance = this.Mesh.position.z - (gameEnviroment.camera.position.z - 200);

            var distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance + zDistance * zDistance);
            
            if (distance > 1) {
               gameEnviroment.camera.position.x += xDistance * easingAmount; 
               gameEnviroment.camera.position.y += yDistance * easingAmount;
               gameEnviroment.camera.position.z += zDistance * easingAmount;
            }
        }
    }
}