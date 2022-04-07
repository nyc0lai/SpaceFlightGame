//adjust canvas size function
const  adjustCanvasSize = canvas => {
    canvas.height =  window.innerHeight;
    canvas.width = window.innerWidth;
}
 //draw Image Function
const drawImage = (ctx,imgSrc, x, y) => {
    let image = new Image();
    image.src = imgSrc;
    image.onload = () => {
        ctx.drawImage(image,x,y)
    }
}
//acces canvas element
let canvas = window['flyGame'];

window.onload = () => {
    adjustCanvasSize(canvas); //canvas size adjust
    let ctx = canvas.getContext("2d"); //prepare canvase area 
    let w = window.innerWidth;
    let h = window.innerHeight;
    drawImage(ctx,'img/ship.png', w/2-64, h-170)//draw static ship
    
    //add keyup event
    document.body.onkeyup = (e) => {
        if(e.code === 'Space') { //verify if key equal to "Space"
            wL = w/2-48; // x position for left rocket
            wR = w/2+23; // x position for right rocket
            hRocketL = h-250;// y position for left rocket
            hRocketR = h-250;// y position for right rocket
            speedL = 20; //left rocket speed
            speedR = 25; //right rocket speed
            
            
            //start left rocket
            let  timeL = setInterval(() => {
                drawImage(ctx,'img/missile.png', wL, hRocketL)
                ctx.clearRect(wL, hRocketL, 25, 132)
                hRocketL -= 5;
                if(hRocketL <= 0) {
                    clearInterval(timeL)
                    console.log('left boom')
                    drawImage(ctx,'img/explosion_min.png', wL-50, 0)
                    setTimeout(() => {
                        console.log('left clear')
                        ctx.clearRect(0, 0, w, 133)
                    }, 100)
                    }
                },speedL)

                //start right rocket
            let  timeR = setInterval(() => {
                drawImage(ctx,'img/missile.png', wR, hRocketR)
                ctx.clearRect(wR, hRocketR, 25, 132)
                hRocketR -= 5;
                if(hRocketR <= 0) {
                    clearInterval(timeR)
                    console.log('right boom')
                    ctx.clearRect(0, 0, w, 130)
                    drawImage(ctx,'img/explosion_min.png', wR-50, 0)
                    setTimeout(() => {
                        console.log('left clear')
                        ctx.clearRect(0, 0, w, 133)
                    }, 100)
                    }
                },speedR)
        }      
    }
}