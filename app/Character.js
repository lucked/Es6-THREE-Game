import {GameObject} from 'lib/GameObject';

export class Character extends GameObject {
    constructor(health) {
        super({Url: '/resources/ignore.marine/marine_anims.js', Scale: [ 1, 1, 1 ]});
        
        this.health = health;
        this.currentHealth = health;
        this.updateSpeed = 1;
        
        this.speed = 50;
        
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