import * as THREE from '/node_modules/three/three';

export class GameObject {
    constructor([sizex,sizey,sizez]) {
        
        this.color = 0x00ff00;
        
        this.geometry = new THREE.BoxGeometry(sizex, sizey, sizez);
        this.material = new THREE.MeshBasicMaterial( { color: this.color } );
        this.cube = new THREE.Mesh( this.geometry, this.material );
    }
}