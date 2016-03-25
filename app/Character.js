import * as THREE from '/node_modules/three/three';

import {GameObject} from 'lib/GameObject';

class Arm extends GameObject {
    constructor () {
        super({
            geometry: new THREE.BoxGeometry(25, 100, 25), 
            material: new THREE.MeshBasicMaterial({ color: 0x550011 })
        });
    }
}

export class Character extends GameObject {
    constructor(meshParams, health) {
        
        var geom = new THREE.Geometry(); 
        
        var v1 = new THREE.Vector3(0,0,10);
        var v2 = new THREE.Vector3(0,500,10);
        var v3 = new THREE.Vector3(500,500,10);

        geom.vertices.push(v1);
        geom.vertices.push(v2);
        geom.vertices.push(v3);
        geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
        
        geom.computeFaceNormals(); // your geometry needs normals if you want to use MeshNormalMaterial
        
        let {
            geometry = new THREE.BoxGeometry(100,200,100), 
            material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        } = meshParams;
        
        super({geometry: geom, material: material});
        
        this.health = health;
        this.currentHealth = health;
        this.updateSpeed = 1;
        
        this.set([0,100,0]);
        
        this.arm = new Arm();
        this.Mesh.add(this.arm.Mesh);
        this.arm.set([75,0,0]);
        
        this.start();
    }
    update() {}
    start() {
        let _this = this,
            systemUpdate = () => {
                _this.update();
                _this.updateTimer = setTimeout(systemUpdate, _this.updateSpeed);
            }
        systemUpdate();
    }
    stop() {
        window.clearTimeout(this.updateTimer)
    }
}