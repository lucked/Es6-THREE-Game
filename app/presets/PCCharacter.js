import {Character} from 'Character';
import {PlayerCharacter} from 'lib/scripts/PlayerCharacter';

export class PCCharacter extends Character {
    constructor() {
        super(200);
        
        this.name = 'simon';
        
        this.addScript(new PlayerCharacter());
    }
}