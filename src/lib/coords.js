class HasCoordinate {
    constructor(x, y, speedX, speedY) {
        this.x = x
        this.y = y
        this.speedX = speedX
        this.speedY = speedY
    }
}

const randCoord = () => Math.random().toFixed(2);