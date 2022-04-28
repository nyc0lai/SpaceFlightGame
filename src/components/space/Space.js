class Space {
    constructor(ship = null, rock = [], missile = []) {
        this.ship = ship;
        this.rock = rock;
        this.missile = missile;
        this.boundaries = 0.1;
    }
    render(ctx) {
        this.ship && this.ship.render(ctx)
        this.rock.forEach(rock => rock.render(ctx))
        this.missile.forEach(missile => missile.render(ctx))
        }
        

    step() {
        // -== SHIP ==_
        this.ship && this.ship.step()
        // -==ROCK==-
        this.rock.forEach(rock => rock.index = this.rock.indexOf(rock))    //indexing all rock
        this.rock.forEach(rock => {
            if( rock.x < -0.299 ||
                rock.x + this.boundaries > 1.05 ||
                rock.y > 1.1
                ) {
                    rock.visible = false                                   // all rocks wich go out of area set visible=false
                    autoclean(this.rock)                                   // clean all rocks who are visible=false
                }
        })
        this.rock.forEach(rock => rock.step())
        // -==MISSILE==-
        this.missile.forEach(missile => {
            missile.index = this.missile.indexOf(missile)                  // indexing all fired missile 
        })
        this.missile.forEach(missile => {
            if(missile.y < -0.15) {
                missile.visible = false                                    // set visible=false if missile out of area
                autoclean(this.missile)                                    // clean missile if visible=false
            }                                            
            missile.step()
        })
    }

    rockToShipCollision() {                                                // function rock to  ship collision detect
        let collidingRock = this.rock.filter(rock => {
    
            return  rock.x <= this.ship.x+this.boundaries &&
                    rock.x + this.boundaries >= this.ship.x &&
                    rock.y <= this.ship.y+this.boundaries &&
                    rock.y + this.boundaries >= this.ship.y
        })
        return collidingRock
    }

    missileToRockCollision() {                                              // function detect each missile collision with rock
        this.missile.forEach(missile => {
            let colliding = [];
            colliding = this.rock.filter(rock=>{
            return  missile.x <= rock.x + this.boundaries*2 &&
                    missile.x + this.boundaries >= rock.x &&
                    missile.y <= rock.y + this.boundaries &&
                    missile.y + this.boundaries/3 >= rock.y

            })

            if(colliding[0]!= undefined) {                                  // logic for remove collisions rock and missile (explosion)
                this.rock[colliding[0].index].url = 'img/explosion_min.png'
                setTimeout(()=>{
                    this.rock[colliding[0].index].visible = false
                    autoclean(this.rock)
                },100)
                this.missile[missile.index].visible = false
                autoclean(this.missile)
            } 
        })
    }
}