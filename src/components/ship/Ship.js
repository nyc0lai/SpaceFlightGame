
class Ship extends HasCoordinate {
    constructor(missile = [], x=0.5, y=0.83, speedX=0, speedY=0, damage = 0.0) {
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
        this.x += 0.05
    }

    flyLeft() {
        this.x -= 0.05
    }
    flyUp() {
        this.y -= 0.05
    }

    flyDown() {
        this.y += 0.05
    }
    fire() {
        //this.missile[0].visible = true
        let missile = this.missile.pop()
        missile.visible = true
        game.space.missile.push(missile)
    }
}