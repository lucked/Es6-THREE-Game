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
        this.Mesh.translateX( x );
        this.Mesh.translateY( y );
        this.Mesh.translateZ( z );
    }
    
    rotate([x,y,z]) {
        this.Mesh.rotateX(x);
        this.Mesh.rotateY(y);
        this.Mesh.rotateZ(z);
    }
}