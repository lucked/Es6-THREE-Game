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
        this.mixer = new THREE.AnimationMixer( _this.GameObject.Mesh );
        for ( var i = 0; i < _this.GameObject.Mesh.geometry.animations.length; ++ i ) {
            let anim = this.mixer.clipAction( _this.GameObject.Mesh.geometry.animations[ i ] );
        }
        this.updateAnimations();
    }
}