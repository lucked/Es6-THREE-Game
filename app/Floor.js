import {GameObject} from 'lib/GameObject';

export class Floor extends GameObject {
    constructor() {
        
        super({Mesh: new THREE.Mesh(
            new THREE.BoxGeometry(1000,1,1000), 
            new THREE.MeshLambertMaterial({ 
                    color: 0x00ff00,
                })
        )});
        
        this.Mesh.position.y = -1;
        
        this.Mesh.castShadow = false;
        this.Mesh.receiveShadow = true;
    }
}