//import * as THREE from '/node_modules/three/three';

import {GameObject} from 'lib/GameObject';

export class Floor extends GameObject {
    constructor() {
        
        super({Mesh: new THREE.Mesh(
            new THREE.BoxGeometry(1000,0,1000), 
            new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
        )});
        
        this.Mesh.position.y = -1;
    }
}