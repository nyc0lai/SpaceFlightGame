
class Ship extends HasCoordinate {
    constructor(missile = [], x=0.5, y=0.83, speedX=0.05, speedY=0.05, damage = 0.0) {
        super(x,y,speedX,speedY)   
        this.missile = missile    
        this.damage = damage
        this.url = 'img/ship.png'
        this.w = 128
        this.h = 128
    }

    render(ctx) {
        this.visible && drawImage(ctx, this.x, this.y, this.url)
        this.missile.forEach(missile => missile.render(ctx))
    }

    flyRight() {
        if(this.x <= 0.8){
        this.x += this.speedX}
    }
    flyLeft() {
        if(this.x >= 0)
        this.x -= this.speedX
    }
    flyUp() {
        if(this.y >= 0.25)
        this.y -= this.speedY
    }
    flyDown() {
        if(this.y <= 0.8)
        this.y += this.speedY
    }
    fire() {
            let missile = this.missile.pop()
            missile.fire(this.x, this.y)
            return missile
    }

    step() {

    }
}