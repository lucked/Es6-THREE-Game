export class AnimationSheet {
    constructor() {
        this.values = {};
        this.animationList = {};
    }
    
    value(valueIndex, value) {
        this.values[valueIndex] = value;
    }
    
    setAnimation(animationName, valueI, dependency) {
        
        this.animationList[animationName] = {
            'valueIndex': valueI,
            'animationName': animationName,
            'dependency': dependency
        };
    }
    
    get Animations () {
        
        let returnValue = [];
        
        for (let animationName in this.animationList) {
            let ani = this.animationList[animationName],
                value = this.values[ani.valueIndex];
            
            if(typeof ani.dependency == 'function') {
                value = ani.dependency(value);
            }
            
            returnValue.push({
                'name': ani.animationName, 
                'value': value,
                'animation': ani
            });
        }
        
        return returnValue;
    }
}