import {GameObject} from 'lib/GameObject';

export class Character extends GameObject {
    constructor(health) {
        super([100, 200, 100]);
        
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
    move([x,y,z]) {
        this.cube.position.x = this.cube.position.x + x;
        this.cube.position.y = this.cube.position.y + y;
        this.cube.position.z = this.cube.position.z + z;
    }
}