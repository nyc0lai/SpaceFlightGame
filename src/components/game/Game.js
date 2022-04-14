
class Game {
    constructor(state = 'started', space = null){
        this.state = state;
        this.space = space;
        //canvas initialisation
        let canvas = window['flyGame'];
        this.ctx = canvas.getContext("2d"); 
        this.w = window.innerWidth;
        this.h = window.innerHeight;
        
    }

    render() {
        this.ctx.clearRect(0,0,this.w,this.h)
        this.space.render(this.ctx)    
    }

    start() {
            document.body.addEventListener('keydown', this.action.bind(this))
            this.render()
    }

    action(e) {
        // console.log(e)
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
                this.space.ship.fire()
                break; 
        }
        this.render()
    }

}