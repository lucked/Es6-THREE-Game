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

        this.gameEnviroment.camera.position.z = 500;
    }
}