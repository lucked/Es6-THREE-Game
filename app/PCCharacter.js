import {Character} from 'Character';
import {PlayerCharacter} from 'lib/PlayerCharacter';

export class PCCharacter extends Character {
    constructor() {
        super(200);
        
        let _this = this;
        
        this.addScript(new PlayerCharacter());
    }
}