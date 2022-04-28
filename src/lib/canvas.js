const drawImage = (ctx, x, y, url) => { // function draw ojects like rock, missile and ship
    let image = new Image();
    image.src = url;
    image.onload = () => {
        ctx.drawImage(image,x * ctx.canvas.width, y * ctx.canvas.height)
    }
}

const textGameOver = (ctx, x=0, y= 0 ) => { // function "GAME OVER!!!" text render
    ctx.font="60px Verdana";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER!!!", ctx.canvas.width/2, ctx.canvas.height/2);
}

const autoclean = (item)=> {  // Space objects clean like rocks and missile wich leave screen area
    item.forEach(element => {
    !element.visible && item.splice(element.index, 1)
});
}