import {Animator} from 'lib/Animator';

export class GameObject {
    constructor({
        Mesh =  new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial( { color: 0x00ff00 } ) ),
        Url = null,
        Scale = null,
        Position = null
    }) {
        var _this = this;
            
        _this.Mesh = null;
        _this.ready = false;
        
        this.fns = [];
        this.scripts = [];
        
        if (typeof Url == 'string') {
        
            let loader = new THREE.JSONLoader();

            loader.load( Url , function (  geometry, materials  ) {
                
                var originalMaterial = materials[ 0 ];
                originalMaterial.skinning = true;

                _this.Mesh = new THREE.SkinnedMesh( geometry, originalMaterial );
                
                gameEnviroment.addGameObject(_this);
                
                _this.startScripts();
            });
            
        } else {
            _this.Mesh = Mesh;
            
            gameEnviroment.addGameObject(_this);
            
            _this.startScripts();
        }
    }
    
    set(vector) {
        let difference = new THREE.Vector3( 1, 0, 0 );
        if (this.Mesh != null && this.Mesh != 'undefined') {
            this.Mesh.position.set(vector)
        }
    }
    
    move(axis, distance) {
        if (this.Mesh != null && this.Mesh != 'undefined') {
            this.Mesh.translateOnAxis(axis, distance);
        }
    }
    
    rotate([x,y,z]) {
        if (this.Mesh != null && this.Mesh != 'undefined') {
            this.Mesh.rotateX(x);
            this.Mesh.rotateY(y);
            this.Mesh.rotateZ(z);
        }
    }
    
    addScript(script) {
        let newId = this.scripts.length,
            newScript = script,
            _this = this;
        
        newScript.gameObject = function(){ return _this; };
        
        this.scripts[newId] = newScript;
        if (_this.ready) {
            this.scripts[newId].start();
        }
    }
    
    getScriptByTag(scriptTag) {
        let _this = this,
            retScript = false;
        this.scripts.forEach(function(script, key) {
            if (script.tag == scriptTag) {
                retScript = () => { return _this.scripts[key] };
            }
        });
        return retScript;
    }
    
    startScripts() {
        this.scripts.forEach(function(script) {
            script.start();
        });
        
        this.ready = true;
    }
    
    systemUpdate() {
        for (let fn of this.fns) {
            fn();
        }
        for (let script of this.scripts) {
            script.update();
        }
    }
}