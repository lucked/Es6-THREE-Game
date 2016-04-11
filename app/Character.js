import {GameObject} from 'lib/GameObject';

export class Character extends GameObject {
    constructor(health) {
        super({Url: '/resources/ignore.marine/marine_anims.js', Scale: [ 1, 1, 1 ]});
        
        this.health = health;
        this.currentHealth = health;
        this.updateSpeed = 1;
        
        this.speed = 50;
    }
    
    animMove(axis, distance) {
        this.move(axis, distance);
    }
}