import * as GE from 'lib/GameEnviroment';
import {Character} from 'Character';
import {PCCharacter} from 'PCCharacter';
import {Floor} from 'Floor';

export class Game {
    constructor() {
        this.gameEnviroment = new GE.GameEnviroment();
        
        this.pc = new PCCharacter();
        this.floor = new Floor();
        
        this.gameEnviroment.addGameObject(this.pc);
        this.gameEnviroment.addGameObject(this.floor);
        
        this.pc.Mesh.add(this.gameEnviroment.camera);

        this.gameEnviroment.camera.position.z = 200;
        this.gameEnviroment.camera.position.x = 200;
        this.gameEnviroment.camera.position.y = 200;
        
        console.log(this.gameEnviroment.camera);
        
        this.gameEnviroment.camera.lookAt(this.pc.Mesh.position);
    }
}