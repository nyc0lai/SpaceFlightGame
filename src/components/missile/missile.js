
class Missile extends HasCoordinate{
    constructor(x=0.5, y=0.9, speedX=0, speedY=0, power = 1.0,) {
        super(x,y,speedX,speedY)
        this.power = power

    }
}