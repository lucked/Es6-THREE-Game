import {Camera} from 'lib/Camera';
import {LightList} from 'lib/LightList';

export class GameEnviroment {
    constructor() {
        
        let _this = this;
        
        _this.scene = new THREE.Scene();
        
        _this.camera = new Camera({});
        
        _this.camera.position.z = 500;
        _this.camera.position.y = 150;
        
        _this.scene.add( _this.camera.anker );
        
        _this.light = new LightList();
        _this.light.lightAnker.y = 500;
        _this.light.lightAnker.z = 500;
        _this.scene.add( _this.light.lightAnker );
        
        _this.fog = new THREE.Fog(0xaaaaaa, 0.1, _this.camera.reach);
        _this.scene.fog = _this.fog;
        
        let skyboxConf = {
            material: new THREE.MeshBasicMaterial( {color: 0xaaaaff} ),
            geometry: new THREE.SphereGeometry( _this.camera.reach / 2, 32, 32 )
        };
        
        skyboxConf.material.side = THREE.BackSide;
        _this.skybox = new THREE.Mesh( skyboxConf.geometry, skyboxConf.material );
        _this.scene.add( _this.skybox );
        
        _this.renderer = new THREE.WebGLRenderer();
        _this.renderer.setSize( window.innerWidth, window.innerHeight );
        _this.renderer.shadowMap.enabled = true;
        
        document.getElementById('game').appendChild( _this.renderer.domElement );
        
        this.gameObjects = [];
        
        this.updateFNS = [() => {
            for (let object of _this.gameObjects) {
                object.systemUpdate();
            }
        }];
        
        let renderScene = () => {
                _this.renderer.render( _this.scene, _this.camera );
                for (let fn of _this.updateFNS) {
                    fn();
                }
                _this.updateTimer = setTimeout(renderScene, 1);
            }
        renderScene();
        
        this.clock = new THREE.Clock();
    }
    get DeltaTime() {
        return this.clock.getDelta();
    }
    addGameObject(gameObject) {
        this.scene.add( gameObject.Mesh );
        this.gameObjects.push( gameObject );
    }
    addMesh(Mesh) {
        this.scene.add( Mesh );
    }
    addUpdate(fn) {
        this.updateFNS.push(fn);
    }
}