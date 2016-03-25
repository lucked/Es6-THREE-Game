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
                _this.arrows.x = (_this.keys[37] ? -1 : 0) + (_this.keys[39] ? 1 : 0);
                _this.arrows.y = (_this.keys[38] ? -1 : 0) + (_this.keys[40] ? 1 : 0);
                _this.updateTimer = setTimeout(systemUpdate, 100);
            }
        systemUpdate();
    }
}