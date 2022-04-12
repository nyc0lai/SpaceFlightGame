
class Ship extends HasCoordinate {
    constructor(missile = [], x=0.5, y=0.9, speedX=0, speedY=0, damage = 0.0) {
        super(x,y,speedX,speedY)   
        this.missile = missile    
        this.damage = damage
        

    }
}