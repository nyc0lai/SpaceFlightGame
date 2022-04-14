class Rock extends HasCoordinate{
    constructor(x, y, speedX, speedY) {
        super(x || randCoord(), y || randCoord(), speedX, speedY)
        this.url = 'img/rock.png'
    }

    render(ctx) {
        this.visible && drawImage(ctx, this.x, this.y, this.url)
    }
}