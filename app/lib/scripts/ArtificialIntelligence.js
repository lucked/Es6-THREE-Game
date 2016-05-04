import {Script} from 'lib/Script';

export class ArtificialIntelligence extends Script {
    AITick() {
        this.GameObject.setMovement(
            new THREE.Vector3(0,0, Math.round(Math.random() * 2 - 1) ) 
        );
    }
    
    start() {
        let _this = this;
        let movetimeout = () => {
            if(typeof this.GameObject != null) {
                _this.AITick();
            }
            setTimeout(movetimeout, 1000);
        }
        
        movetimeout();
    }
}