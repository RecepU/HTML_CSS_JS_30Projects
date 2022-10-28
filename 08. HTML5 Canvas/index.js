const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 0;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
    if(!isDrawing) return;//stop the function when are not mousedown
    console.log(e);
    ctx.strokeStyle = `hsl(${hue},100%,50%)`
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX,lastY);
    //go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX,lastY] = [e.offsetX,e.offsetY]
    hue++;
    if(hue>=360) hue = 0;
    if(ctx.lineWidth>=100||ctx.lineWidth<=1) direction = !direction
    direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener('mousedown',(e) => {
    isDrawing = true;
    [lastX,lastY] = [e.offsetX,e.offsetY];

}) // mousedown==clicking the mouse
canvas.addEventListener('mousemove',draw)
canvas.addEventListener('mouseup',() => isDrawing = false) // unclick
canvas.addEventListener('mouseout',() => isDrawing = false) //out of the scope



