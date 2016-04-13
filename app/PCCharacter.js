//import * as THREE from '/node_modules/three/three';

import {Character} from 'Character';
import {Controlls} from 'lib/Controlls';

export class PCCharacter extends Character {
    constructor() {
        super(200);
        
        this.ctrl = new Controlls();
        
        this.name = 'Simon';
        
        console.log('etst');
        
        let _this = this;
        
        this.fns.push(() => {
            if(_this.Mesh != null) {
                gameEnviroment.camera.easeTo(_this.Mesh.position);
                gameEnviroment.camera.rotateTo(_this.Mesh.quaternion);
            }

            document.getElementById('ui').innerHTML = _this.health + '/' + _this.currentHealth;
        })
        
        this.ctrl.onChange = function(){
            
            let ctrl = this;
            
            _this.rotation = [0, ctrl.arrows.x * _this.speed * 0.0003, 0];

            _this.setMovement(new THREE.Vector3(0, 0, ctrl.arrows.y));
        };
    }
}