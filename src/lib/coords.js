class HasCoordinate {
    constructor(x, y, speedX, speedY, visible = true) {
        this.x = x
        this.y = y
        this.speedX = speedX
        this.speedY = speedY
        this.visible = visible
    }

    step() {
        this.x += this.speedX;
        this.y += this.speedY;
    } 
}

const randCoord = () => Math.random();

const randSpeed = (min, max) => Math.random() * (max - min) + min;

const randcountOfRock = (min, max) => Math.floor(Math.random() * (max-min+1) + min);