class Rock extends HasCoordinate{
    constructor(x, y = 0, speedX, speedY) {
        super(
        x || randCoord(),
        y,
        speedX || randSpeed(-0.009,0.009),
        speedY = randSpeed(0.001,0.01)
        // speedX || randSpeed(0,0),
        // speedY = randSpeed(0.001,0.002)
        )
        this.url = 'img/rock.png';
        this.index = null
        }

    render(ctx) {
        this.visible && drawImage(ctx, this.x, this.y, this.url)
    }
}