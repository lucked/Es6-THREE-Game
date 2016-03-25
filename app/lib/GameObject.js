import * as THREE from '/node_modules/three/three';

export class GameObject {
    constructor({
        geometry = new THREE.BoxGeometry(0,0,0),
        material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
    }) {
        
        this.Mesh = new THREE.Mesh( geometry, material );
        
    }
    
    set([x,y,z]) {
        this.Mesh.position.x = x;
        this.Mesh.position.y = y;
        this.Mesh.position.z = z;
    }
    
    move([x,y,z]) {
        let _this = this;
        _this.set([
            _this.Mesh.position.x + x,
            _this.Mesh.position.y + y,
            _this.Mesh.position.z + z
        ]);
    }
}