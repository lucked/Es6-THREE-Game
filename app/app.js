import {GameEnviroment} from 'lib/GameEnviroment';
import {RunTime} from 'lib/GameEnviroment';
import {Character} from 'Character';
import {PCCharacter} from 'PCCharacter';
import {Floor} from 'Floor';

export class Game {
    constructor() {
        
        this.pc = new PCCharacter();
        this.floor = new Floor();
    }
}