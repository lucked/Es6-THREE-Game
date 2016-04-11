import {Animator} from 'lib/Animator';

export class GameObject {
    constructor({
        Mesh =  new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial( { color: 0x00ff00 } ) ),
        Url = null,
        Scale = null,
        Position = null
    }) {
        var _this = this;
            
        _this.Mesh = Mesh;
        
        if (typeof Url == 'string') {
        
            let loader = new THREE.JSONLoader();

            loader.load( Url , function (  geometry, materials  ) {
                
                var originalMaterial = materials[ 0 ];
                originalMaterial.skinning = true;

                _this.Mesh = new THREE.SkinnedMesh( geometry, originalMaterial );
                
                _this.animator = new Animator(_this.Mesh);
                
                _this.animator.Animation = 'walk';
                
                gameEnviroment.addGameObject(_this);
            });
            
        }
                
        gameEnviroment.addGameObject(_this);
    }
    
    update() {}
    
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
    
    systemUpdate() {
        this.update();
    }
}