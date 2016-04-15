import {Script} from 'lib/Script';

export class ArtificialIntelligence extends Script {
    start() {
        console.log('test');
        
        let movetimeout = () => {
            if(typeof this.gameObject == 'function') {
                this.gameObject().setMovement(
                    new THREE.Vector3(0,0, Math.round(Math.random() * 2 - 1) ) 
                );
            }
            setTimeout(movetimeout, 1000);
        }
        
        movetimeout();
    }
}