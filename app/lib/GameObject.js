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
                
                gameEnviroment.addGameObject(_this);
            });
            
        }
                
        gameEnviroment.addGameObject(_this);
        
        this.fns = [];
    }
    
    update() {}
    
    set(vector) {
        let difference = new THREE.Vector3( 1, 0, 0 );
        if (this.Mesh != null && this.Mesh != 'undefined') {
            this.Mesh.position.set(vector)
        }
    }
    
    move(axis, distance) {
        if (this.Mesh != null && this.Mesh != 'undefined') {
            this.Mesh.translateOnAxis(axis, distance);
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
        for (let fn of this.fns) {
            fn();
        }
    }
}