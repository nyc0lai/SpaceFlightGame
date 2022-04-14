class HasCoordinate {
    constructor(x, y, speedX, speedY, visible = true) {
        this.x = x
        this.y = y
        this.speedX = speedX
        this.speedY = speedY
        this.visible = visible
    }
}

const randCoord = () => Math.random().toFixed(2);