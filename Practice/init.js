let container = document.getElementById("container");
let btn = document.createElement('button');
btn.id = 'buttonId';
btn.innerHTML = 'click here';
container.append(btn);

let navBar = document.createElement("nav");
navBar.id = "navBar";
navBar.innerHTML = 'hello';
container.append(navBar);


let c = document.getElementById('myCanvas');
const ctx = c.getContext("2d")
ctx.beginPath();
ctx.arc(200,65,50,0,2*Math.PI);
ctx.stroke();
ctx.lineWidth = 5;
ctx.fillStyle = 'orange';
ctx.fill();
ctx.strokeStyle = 'white';
ctx.stroke();

function handleOnBtn(){
    
    let x = Math.trunc(100 * Math.random());
    let y = Math.trunc(100 * Math.random());
    let z = Math.trunc(100 * Math.random());
    document.body.style.backgroundColor = `rgb(${x},${y},${z})`;
    console.log(x,y,z);
}
btn.addEventListener("click",handleOnBtn);


