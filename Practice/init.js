let container = document.getElementById("container");
/*
let btn = document.createElement('button');
btn.id = 'buttonId';
btn.innerHTML = 'click here';
container.append(btn);
let navBar = document.createElement("nav");
navBar.id = "navBar";
let dropList = document.createElement("ul");
dropList.id = 'secondDroplist';
let homeButton = document.createElement("li")
let home = document.createElement('a');
let homeText = document.createTextNode("Home");
home.appendChild(homeText);
home.href = '#home';
homeButton.appendChild(home);
dropList.appendChild(homeButton);
let contact = document.createElement("li")
contact.innerHTML = 'contact';
dropList.appendChild(contact)
navBar.append(dropList);
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

let dropMenu = document.createElement("div");
dropMenu.id = "dropMenu";
dropMenu.innerHTML = "page";
container.appendChild(dropMenu);
dropMenu.style.visibility = "hidden";

function handleOnHome(){
    if (dropMenu.style.visibility == "hidden"){
        dropMenu.style.visibility = "visible";
    }
    else{
        dropMenu.style.visibility = "hidden";
    }
}
home.addEventListener("mouseover",handleOnHome);

function handleOnDropMenu(){
    dropMenu.style.visibility = "hidden";
}
dropMenu.addEventListener("click",handleOnDropMenu);

*/

let box = document.createElement("div");
box.id = "box";
container.append(box);
let tile1 = document.createElement("div");
tile1.id = "tile1";
box.append(tile1);
let tile2 = document.createElement("div");
tile2.id = "tile2";
box.append(tile2);
let tile3 = document.createElement("div");
tile3.id = "tile3";
box.append(tile3);
let tile4 = document.createElement("div");
tile4.id = "tile4";
box.append(tile4);
let tile5 = document.createElement("div");
tile5.id = "tile5";
box.append(tile5);
let tile6 = document.createElement("div");
tile6.id = "tile6";
box.append(tile6);
let tile7 = document.createElement("div");
tile7.id = "tile7";
box.append(tile7);
let tile8 = document.createElement("div");
tile8.id = "tile8";
box.append(tile8);
let tile9 = document.createElement("div");
tile9.id = "tile9";
box.append(tile9);

