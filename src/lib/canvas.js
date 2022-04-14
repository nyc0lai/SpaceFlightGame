const drawImage = (ctx , x, y, url) => {
    let image = new Image();
    image.src = url;
    image.onload = () => {
        ctx.drawImage(image,x * ctx.canvas.width, y * ctx.canvas.height)
    }
}