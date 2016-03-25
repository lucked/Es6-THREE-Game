import {GameObject} from 'lib/GameObject';

export class Floor extends GameObject {
    constructor() {
        super([1000, 0, 1000]);
    }
}