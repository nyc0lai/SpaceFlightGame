class Rock extends HasCoordinate{
    constructor(x, y, speedX, speedY) {
        super(x || randCoord(), y || randCoord(), speedX, speedY)
    }
}