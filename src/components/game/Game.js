
class Game {
    constructor(space = null){
        this.space = space;
                                                                             //canvas initialisation
        let canvas = window['flyGame'];
        this.ctx = canvas.getContext("2d"); 
        this.w = window.innerWidth;
        this.h = window.innerHeight;
        this.FPS = 15;
        
    }

    render() {
        this.ctx.clearRect(0,0,this.w,this.h)
        this.space.render(this.ctx)    
    }

    start() {
            this.rockTimer = setInterval((count = randcountOfRock(1,3)) => { //random rock adding over each three seconds
            let i = 0;
            while (i<count) {
                this.space.rock.unshift(new Rock)
                i++
                }  
            }, 3000)

    document.body.addEventListener('keydown', this.action.bind(this))        // EventListener for keydown
                this.timer = setInterval(() => {
                this.step()
            }, 1000 / this.FPS);

    }

    stop() {
        clearInterval(this.timer)
        clearInterval(this.rockTimer)
    }

    gameOver() {
        this.stop()
        setTimeout(() => {
            textGameOver(this.ctx)                                           //GameOver TEXT
            }, 50);
        }

    step() {
        this.space.step()
        let collisions = this.space.rockToShipCollision()
            if(collisions.length > 0){
                this.gameOver()
            }
        this.space.missileToRockCollision()
        this.render()
    }

    action(e) {
        switch(e.code) {
            case 'ArrowRight': 
                this.space.ship.flyRight()
                break;
            case 'ArrowLeft':
                this.space.ship.flyLeft()
                break;
            case 'ArrowUp': 
                this.space.ship.flyUp()
                break;
            case 'ArrowDown':
                this.space.ship.flyDown()
                break;
            case 'Space':
                let missile = this.space.ship.fire()
                this.space.missile.push(missile)
                break; 
        }
    }

}