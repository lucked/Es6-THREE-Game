import {Character} from 'Character';
import {ArtificialIntelligence} from 'lib/scripts/ArtificialIntelligence';

export class NPCCharacter extends Character {
    constructor() {
        super(300);
        
        this.name = 'AI';
        
        let AI = new ArtificialIntelligence('AI');
        
        this.addScript(AI);
    }
}