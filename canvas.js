let canvas = window['flyGame'];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
window.addEventListener('resize',() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})


let ctx = canvas.getContext("2d");
// console.log(ctx)
// ctx.strokeStyle = 'red';
// ctx.lineWidth = 20
// ctx.lineCap = 'round'
// ctx.moveTo(10,10);
// ctx.lineTo(300,500);
// ctx.stroke();