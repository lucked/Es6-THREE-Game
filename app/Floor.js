import * as THREE from '/node_modules/three/three';

import {GameObject} from 'lib/GameObject';

export class Floor extends GameObject {
    constructor() {
        super({geometry: new THREE.BoxGeometry(1000,0,1000)});
        this.Mesh.position.y = -1;
    }
}