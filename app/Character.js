//import * as THREE from '/node_modules/three/three';

import {GameObject} from 'lib/GameObject';

export class Character extends GameObject {
    constructor(health) {
        super({Url: '/resources/model.json', Scale: [ 100, 200, 100 ]});
        
        this.health = health;
        this.currentHealth = health;
        this.updateSpeed = 1;
        
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