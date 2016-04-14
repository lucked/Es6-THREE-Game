export class LightList {
    constructor() {
        
        this.lightAnker = new THREE.Object3D();
        
        this.hemisphere = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1);
        
        this.dirlight = new THREE.DirectionalLight( 0xffffbb, 1);
        
        this.dirlight.castShadow = true;
        
        this.lightAnker.add( this.hemisphere );
        this.lightAnker.add( this.dirlight );
    }
}