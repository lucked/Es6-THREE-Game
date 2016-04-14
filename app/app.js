import {GameEnviroment} from 'lib/GameEnviroment';
import {RunTime} from 'lib/GameEnviroment';

import {PCCharacter} from 'PCCharacter';
import {NPCCharacter} from 'NPCCharacter';

import {Floor} from 'Floor';

export class Game {
    constructor() {
        this.pc = new PCCharacter();
        this.npc1 = new NPCCharacter();
        this.floor = new Floor();
    }
}