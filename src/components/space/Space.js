class Space {
    constructor(ship = null, rock = [], missile = []) {
        this.ship = ship;
        this.rock = rock;
        this.missile = missile

    }
    render(ctx) {
        this.missile.forEach(item => {
            drawImage(ctx, item.x, item.y, item.url)
        })
        //this.missile[0]  && drawImage(ctx, this.missile[0].x, this.missile[0].y, this.missile[0].url)
        this.ship && this.ship.render(ctx)
        this.rock.forEach(rock => rock.render(ctx))
    }
}