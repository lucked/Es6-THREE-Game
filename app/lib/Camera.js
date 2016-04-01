export class Camera extends THREE.PerspectiveCamera {
    
    constructor({ reach = 10000000 }) {
        super( 75, window.innerWidth / window.innerHeight, 0.1, reach );
        
        this.reach = 10000000;
        
        this.anker = new THREE.Object3D();
        this.anker.add(this);
    }
    
    easeTo(vector, easingAmount = 0.01) {
        let v = new THREE.Vector3().copy(vector),
            d = v.sub(this.anker.position),
            distance = Math.sqrt(d.x * d.x + d.y * d.y + d.z * d.z);
        
        v.multiplyScalar(easingAmount);
        
        if (distance > 1) {
           this.anker.position.add(v);
        }
    }
    
    rotateTo(quaternion, easingAmount = 0.01) {
        this.anker.quaternion.slerp(quaternion, easingAmount);
    }
}