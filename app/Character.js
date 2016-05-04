import {GameObject} from 'lib/GameObject';

import {Animator} from 'lib/scripts/Animator';

export class Character extends GameObject {
    constructor(health) {
        super(
            {Url: '/resources/ignore.models/ani_model.json', Scale: [ 1, 1, 1 ]}
        );
        
        this.health = health;
        this.currentHealth = health;
        this.updateSpeed = 1;
        
        this.speed = 50;
        this.movementAxis = new THREE.Vector3(0,0,0);
        this.rotation = [0, 0, 0];
        
        let _this = this;
        
        let animator = new Animator();
        
        animator.sheet.value('forward', 0);
        animator.sheet.setAnimation('walk', 'forward', val => val / 2);
        
        this.addScript(animator);
        
        this.fns.push(() => {
            _this.move(_this.movementAxis, 0.01 * _this.speed);
        });
        
        this.fns.push(() => {
            _this.rotate(_this.rotation);
        });
    }
    
    setMovement(axis) {
        this.movementAxis = axis;
        let animator = this.getScriptByTag('animator');

        if(animator != false) {
            animator().sheet.value('forward', Math.abs(axis.z));
        }
    }
}