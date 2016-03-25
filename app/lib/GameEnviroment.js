import THREE from '/node_modules/three/three';

export class GameEnviroment {
    constructor() {
        this.scene = new THREE.Scene();
        
        let cameraReach = 10000000;
        
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, cameraReach );
        
        this.fog = new THREE.Fog(0xaaaaaa, 0.1, cameraReach);
        this.scene.fog = this.fog;
        
        let skyboxConf = {
            material: new THREE.MeshBasicMaterial( {color: 0xaaaaff} ),
            geometry: new THREE.SphereGeometry( cameraReach / 2, 32, 32 )
        };
        skyboxConf.material.side = THREE.BackSide;
        this.skybox = new THREE.Mesh( skyboxConf.geometry, skyboxConf.material );
        this.scene.add( this.skybox );
        
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        
        document.getElementById('game').appendChild(this.renderer.domElement);
        
        this.updateFNS = [];
        
        let _this = this,
            renderScene = () => {
                this.renderer.render( this.scene, this.camera );
                for (let fn of _this.updateFNS) {
                    fn();
                }
                _this.updateTimer = setTimeout(renderScene, 1);
            }
        renderScene();
    }
    addGameObject(gameObject) {
        this.scene.add( gameObject.Mesh );
    }
    addUpdate(fn) {
        this.updateFNS.push(fn);
    }
}