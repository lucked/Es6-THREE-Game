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
        
            var loader = new THREE.ObjectLoader();

            loader.load( Url , function ( object ) {
                
                _this.Mesh = object;
                
                if(Scale != null) {
                    object.scale.set(Scale[0],Scale[1],Scale[2]);
                }
                
                if(Position != null) {
            
                    _this.Mesh.position.set(0,0,0);
                }
                
                gameEnviroment.addGameObject(_this);
            });
            
        } else {
            this.Mesh = Mesh;
                
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