export class Animator {
    constructor (mesh) {
        let _this = this;
        
        this.mesh = mesh;

        this.mixer = new THREE.AnimationMixer( this.mesh );

        for ( var i = 0; i < this.mesh.geometry.animations.length; ++ i ) {
            let anim = this.mixer.clipAction( this.mesh.geometry.animations[ i ] );
            anim.setEffectiveWeight( 1 / 3 );
        }

        gameEnviroment.addUpdate(function(){
            _this.mixer.update(gameEnviroment.DeltaTime);
        });
    }
    
    set Animation(animation) {
        this.mixer.clipAction(animation).setEffectiveWeight( 1 / 3 ).play();
    }
    
    setAnimation(animation, direction = 1) {
        let anim = this.mixer.clipAction(animation);
        anim.setEffectiveWeight( 1 / 3 );
        anim.timeScale = direction;
        anim.play();
    }
    
    stopAnimation(animation) {
        this.mixer.clipAction(animation).setEffectiveWeight(0).stop();
    }
}