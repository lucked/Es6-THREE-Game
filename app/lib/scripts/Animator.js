import {Script} from 'lib/Script';
import {AnimationSheet} from 'lib/scripts/AnimationSheet';

export class Animator extends Script {
    constructor () {
        super('animator');
        
        this.sheet = new AnimationSheet();
    }
    
    updateAnimations() {
        let _this = this;
        this.sheet.Animations.forEach(function(animation) {
            _this.mixer.clipAction(animation.name)
                .setEffectiveWeight(animation.value).play();
        });
    }
    
    update() {
        this.updateAnimations();
        this.mixer.update(gameEnviroment.DeltaTime);
    }
    
    start() {
        let _this = this;
        this.mixer = new THREE.AnimationMixer( _this.gameObject().Mesh );
        for ( var i = 0; i < _this.gameObject().Mesh.geometry.animations.length; ++ i ) {
            let anim = this.mixer.clipAction( _this.gameObject().Mesh.geometry.animations[ i ] );
        }
        this.updateAnimations();
    }
    
    set Animation(animation) {
        this.mixer.clipAction(animation).setEffectiveWeight( 1 / 3 ).play();
    }
    
    setAnimation(animation, direction = 1) {
        let anim = this.mixer.clipAction(animation);
        if(!anim.isRunning()) {
            anim.timeScale = direction;
            anim.fadeIn(1);
            anim.play();
        }
    }
    
    stopAnimation(animation) {
        let anim = this.mixer.clipAction(animation);
        if(anim.isRunning()) {
            anim.fadeOut(1);
            anim.stop();
        }
    }
}