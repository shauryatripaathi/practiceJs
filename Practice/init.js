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
let ticTacToeGame = document.createElement("div");
ticTacToeGame.id = "ticTacToeGame";
container.append(ticTacToeGame);

let gameHeading = document.createElement('h1');
gameHeading.innerHTML = "TIC TAC TOE";
gameHeading.id = 'gameHeading';
ticTacToeGame.append(gameHeading);

let box = document.createElement("div");
box.id = "box";
ticTacToeGame.append(box);
let tile1 = document.createElement("div");
tile1.id = "tile1";
box.append(tile1);
tile1.innerText = "1";
let tile2 = document.createElement("div");
tile2.id = "tile2";
tile2.innerText = "2";
box.append(tile2);
let tile3 = document.createElement("div");
tile3.id = "tile3";
tile3.innerText = "3";
box.append(tile3);
let tile4 = document.createElement("div");
tile4.id = "tile4";
tile4.innerText = "4";
box.append(tile4);
let tile5 = document.createElement("div");
tile5.id = "tile5";
tile5.innerText = "5";
box.append(tile5);
let tile6 = document.createElement("div");
tile6.id = "tile6";
tile6.innerText = "6";
box.append(tile6);
let tile7 = document.createElement("div");
tile7.id = "tile7";
tile7.innerText = "7";
box.append(tile7);
let tile8 = document.createElement("div");
tile8.id = "tile8";
tile8.innerText = "8";
box.append(tile8);
let tile9 = document.createElement("div");
tile9.id = "tile9";
tile9.innerText = "9";
box.append(tile9);

let n = 1;
let moveX = 'x';
let moveO = 'o';

function handleOnBox(e){
    if(e.target.innerText == 'x'){
        alert('Choose different tile');
    }
    else if(e.target.innerText == 'o'){
        alert('Choose different tile');
    }
    else if(e.target.id == 'box'){
        alert('out of bounds');
    }
    else if(n%2 == 1){
        e.target.innerText = moveX;
        console.log(e.target.innerText);
        e.target.style.backgroundColor = 'red';
        n = n+1;
    }
    else if(n%2 == 0){
        e.target.innerText = moveO;
        console.log(e.target.innerText);
        e.target.style.backgroundColor = 'green';
        n = n+1;
    }
    check();
}
box.addEventListener("click",handleOnBox);

function check(){
    if(tile1.innerText == tile2.innerText && tile2.innerText == tile3.innerText){
        crossBarFunction('tile123')
        setTimeout(()=>{
            alert("Game won by" + " " + tile1.innerText);
            location.reload();
        },100);
    }
    else if(tile1.innerText == tile4.innerText && tile4.innerText == tile7.innerText){
        crossBarFunction('tile147')
        setTimeout(()=>{
            alert("Game won by" + " " + tile1.innerText);
            location.reload();
        },100);
    }
    else if(tile1.innerText == tile5.innerText && tile5.innerText == tile9.innerText){
        crossBarFunction('tile159')
        setTimeout(()=>{
            alert("Game won by" + " " + tile1.innerText);
            location.reload();
        },100);
    }
    else if(tile2.innerText == tile5.innerText && tile5.innerText == tile8.innerText){
        crossBarFunction('tile258')
        setTimeout(()=>{
            alert("Game won by" + " " + tile2.innerText);
            location.reload();
        },100);
    }
    else if(tile3.innerText == tile5.innerText && tile5.innerText == tile7.innerText){
        crossBarFunction('tile357')
        setTimeout(()=>{
            alert("Game won by" + " " + tile3.innerText);
            location.reload();
        },100);
    }
    else if(tile3.innerText == tile6.innerText && tile6.innerText == tile9.innerText){
        crossBarFunction('tile369')
        setTimeout(()=>{
            alert("Game won by" + " " + tile3.innerText);
            location.reload();
        },100);
    }
    else if(tile4.innerText == tile5.innerText && tile5.innerText == tile6.innerText){
        crossBarFunction('tile456')
        setTimeout(()=>{
            alert("Game won by" + " " + tile4.innerText);
            location.reload();
        },100);
    }
    else if(tile7.innerText == tile8.innerText && tile8.innerText == tile9.innerText){
        crossBarFunction('tile789')
        setTimeout(()=>{
            alert("Game won by" + " " + tile7.innerText);
            location.reload();
        },100);
    }
};

function crossBarFunction(groupWon){
    let crossBar = document.createElement("div");
    crossBar.id = "crossBar";
    box.append(crossBar);
    if(groupWon == 'tile123'){
        crossBar.style.marginTop = '25px';
    }
    else if(groupWon == 'tile456'){
        crossBar.style.marginTop = '75px';
    }
    else if(groupWon == 'tile789'){
        crossBar.style.marginTop = '125px';
    }
    else if(groupWon == 'tile147'){
        crossBar.style.rotate = '90deg'
        crossBar.style.marginTop = '75px';
        crossBar.style.marginRight = '110px';
    }
    else if(groupWon == 'tile258'){
        crossBar.style.rotate = '90deg'
        crossBar.style.marginTop = '75px';
    }
    else if(groupWon == 'tile369'){
        crossBar.style.rotate = '90deg'
        crossBar.style.marginTop = '75px';
        crossBar.style.marginLeft = '110px';
    }
    else if(groupWon == 'tile159'){
        crossBar.style.rotate = '45deg'
        crossBar.style.marginTop = '75px';
    }
    else if(groupWon == 'tile357'){
        crossBar.style.rotate = '135deg'
        crossBar.style.marginTop = '75px';
    }
}