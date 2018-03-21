export class Furry {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.direction = "right";
        this.index = function(x, y) {
            return x + (y * 10);
        }
    }
}
