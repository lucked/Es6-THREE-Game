export class Controlls {
    constructor() {
        let _this = this;
        _this.keys = [];
        
        _this.arrows = {x:0, y:0};
        
        window.onkeyup = function(e) {
            _this.keys[e.keyCode] = false;
        }
        window.onkeydown = function(e) {
            _this.keys[e.keyCode] = true;
        }
        
        let systemUpdate = () => {
            let x = (_this.keys[37] ? -1 : 0) + (_this.keys[39] ? 1 : 0),
                y = (_this.keys[38] ? -1 : 0) + (_this.keys[40] ? 1 : 0);
            
            let changed = 
                x != _this.arrows.x || 
                y != _this.arrows.y;
            
            _this.arrows.x = x;
            _this.arrows.y = y;
            _this.updateTimer = setTimeout(systemUpdate, 100);
            
            if (changed) {
                _this.onChange();
            }
        }
        systemUpdate();
    }
    
    onChange() { 
        console.info('no onchange for controll is defined!'); 
    }
}