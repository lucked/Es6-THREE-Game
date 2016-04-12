import {GameObject} from 'lib/GameObject';

export class Character extends GameObject {
    constructor(health) {
        super(
            {Url: '/resources/ignore.marine/marine_anims.js', Scale: [ 1, 1, 1 ]}
        );
        
        this.health = health;
        this.currentHealth = health;
        this.updateSpeed = 1;
        
        this.speed = 50;
        this.movementAxis = new THREE.Vector3(0,0,0);
        
        let _this = this;
        
        console.log(_this.animator);
//        _this.animator.sheet.value('forward', 0);
//        _this.animator.sheet.setAnimation('walk', 'forward');
        
        this.fns.push(() => {
            if(_this.animator != undefined) {
//                console.log(_this.animator.sheet);
//                _this.animator.setAnimation('idle');
//                if (_this.movementAxis.z > 0) {
//                    _this.animator.setAnimation('walk', -1);
//                } else if (_this.movementAxis.z < 0) {
//                    _this.animator.setAnimation('walk', 1);
//                } else {
//                    _this.animator.stopAnimation('walk');
//                }
            }
        })
    }
    
    animMove(axis) {
        this.move(axis, this.speed / 100);
        this.movementAxis = axis;
    }
}