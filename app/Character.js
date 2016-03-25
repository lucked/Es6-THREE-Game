import * as THREE from '/node_modules/three/three';

import {GameObject} from 'lib/GameObject';

export class Character extends GameObject {
    constructor(meshParams, health) {
        
        let {
            geometry = new THREE.BoxGeometry(100,200,100), 
            material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        } = meshParams;
        
        super({geometry: geometry, material: material});
        
        this.health = health;
        this.currentHealth = health;
        this.updateSpeed = 1;
        
        this.set([0,100,0]);
        
        this.start();
    }
    
    update() {}
    start() {
        let _this = this,
            systemUpdate = () => {
                _this.update();
                _this.updateTimer = setTimeout(systemUpdate, _this.updateSpeed);
            }
        systemUpdate();
    }
    stop() {
        window.clearTimeout(this.updateTimer)
    }
}