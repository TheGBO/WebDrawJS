//configurações//

var largura = 840;
var altura = 460;
const canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function newcanvas(l, a){   
    largura = l;
    altura = a;
    canvas.width = largura;
    canvas.height = altura;
    context.fillStyle = "white";
    context.fillRect(0,0, largura, altura);
}
function reset(){
    canvas.width = largura;
    canvas.height = altura;
    context.fillStyle = "white";
    context.fillRect(0,0, largura, altura);
}
newcanvas(840, 460);


//desenho//
let cor_desenho = 'black';
let grossura_pincel = '3px';
let desenhando = false;


canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);

canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);

canvas.addEventListener("touchup", stop, false);
canvas.addEventListener("mouseup", stop, false);

canvas.addEventListener("mouseout", stop2, false);

function start(event){
    desenhando = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    event.preventDefault();

}

function draw(event){
    if(desenhando){
        context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        context.strokeStyle = cor_desenho;
        context.lineWidth = grossura_pincel;
        context.lineCap = "round";
        context.lineJoin = "round"
        context.stroke();
    }
    event.preventDefault();
}

function stop(event){
    if(desenhando){
        context.stroke();
        context.closePath();
        desenhando = false;
    }
    event.preventDefault();
}

function stop2(event){
    if(desenhando){
        context.stroke();
        context.closePath();
        desenhando = false;
    }
    event.preventDefault();
}
//cores

function mudacor(element){
    cor_desenho = element.style.background;
}



//pinceis

