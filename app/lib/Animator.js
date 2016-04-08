export class Animator {
    constructor (mesh) {
        let _this = this;
        
        this.mesh = mesh;

        
        this.mixer = new THREE.AnimationMixer( this.mesh );

        for ( var i = 0; i < this.mesh.geometry.animations.length; ++ i ) {
             this.mixer.clipAction( this.mesh.geometry.animations[ i ] );
        }

        gameEnviroment.addUpdate(function(){
            _this.mixer.update(gameEnviroment.DeltaTime);
        });
    }
    
    set Animation(animation) {
        this.mixer.clipAction(animation).setEffectiveWeight( 1 / 3 ).play();
    }
}