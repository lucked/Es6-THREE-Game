import {Script} from 'lib/Script';
import {Controlls} from 'lib/Controlls';

export class PlayerCharacter extends Script {
    start() {
        this.ctrl = new Controlls();
        
        let _this = this;
        
        this.ctrl.onChange = function(){
            
            let ctrl = this;
            
            _this.gameObject().rotation = [0, ctrl.arrows.x * _this.gameObject().speed * 0.0003, 0];

            _this.gameObject().setMovement(new THREE.Vector3(0, 0, ctrl.arrows.y));
        };
    }
    
    update() {
        
        let _thisGO = this.gameObject;
        
        if(_thisGO().Mesh != null) {
            gameEnviroment.camera.easeTo(_thisGO().Mesh.position);
            gameEnviroment.camera.rotateTo(_thisGO().Mesh.quaternion);
        }

        document.getElementById('ui').innerHTML = _thisGO().health + '/' + _thisGO().currentHealth;
    }
}