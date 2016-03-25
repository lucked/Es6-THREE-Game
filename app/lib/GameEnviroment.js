import THREE from '/node_modules/three/three';

export class GameEnviroment {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        
        this.renderer = new THREE.WebGLRenderer();
        
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        
        document.getElementById('game').appendChild( this.renderer.domElement );
        
        this._GameObjects = [];
        
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
    get GameObjects() {
        return this._GameObjects;
    }
    addGameObject(gameObject) {
        this.scene.add( gameObject.Mesh );
    }
    addUpdate(fn) {
        this.updateFNS.push(fn);
    }
}