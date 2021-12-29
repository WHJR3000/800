var lpox, lpoy, cpox, cpoy;
var mouse_event="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="magenta";
Wol=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
colour=document.getElementById("colour").value;
Wol=document.getElementById("width").value;
mouse_event="mouseDown";


}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
mouse_event="mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
mouse_event="mouseLeave";

}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
cpox=e.clientX-canvas.offsetLeft;
cpoy=e.clientY-canvas.offsetTop;
if(mouse_event=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=Wol;
ctx.moveTo(lpox, lpoy);
ctx.lineTo(cpox, cpoy);
ctx.stroke();
}
lopx=cpox;
lpoy=cpoy;
}
function clear(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}



















































































