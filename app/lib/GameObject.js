import {GameEnviroment} from 'lib/GameEnviroment';
import {RunTime} from 'lib/GameEnviroment';

export class GameObject {
    constructor({
        Mesh = null,
        Url = null,
        Scale = null,
        Position = null
    }) {
        var _this = this;
        if (typeof Url == 'string') {
        
            let loader = new THREE.JSONLoader();
			var clock = new THREE.Clock();

            loader.load( Url , function (  geometry, materials  ) {
                
                var originalMaterial = materials[ 0 ];
                originalMaterial.skinning = true;

                _this.Mesh = new THREE.SkinnedMesh( geometry, originalMaterial );

                _this.mixer = new THREE.AnimationMixer( _this.Mesh );
                
                for ( var i = 0; i < geometry.animations.length; ++ i ) {
                     _this.mixer.clipAction( geometry.animations[ i ] );
                }
                
                _this.mixer.clipAction('walk').setEffectiveWeight( 1 / 3 ).play();
                
                gameEnviroment.addGameObject(_this);
                
                gameEnviroment.addUpdate(function(){
                    _this.mixer.update(gameEnviroment.DeltaTime);
                });
                
            });
            
        } else {
            
            _this.Mesh = Mesh;
                
            gameEnviroment.addGameObject(_this);
        }
        
    }
    
    set([x,y,z]) {
        if (this.Mesh != null && this.Mesh != 'undefined') {
            this.Mesh.position.x = x;
            this.Mesh.position.y = y;
            this.Mesh.position.z = z;
        }
    }
    
    move([x,y,z]) {
        if (this.Mesh != null && this.Mesh != 'undefined') {
            this.Mesh.translateX( x );
            this.Mesh.translateY( y );
            this.Mesh.translateZ( z );
        }
    }
    
    rotate([x,y,z]) {
        if (this.Mesh != null && this.Mesh != 'undefined') {
            this.Mesh.rotateX(x);
            this.Mesh.rotateY(y);
            this.Mesh.rotateZ(z);
        }
    }
}