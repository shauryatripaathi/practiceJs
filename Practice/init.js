let container = document.getElementById("container");
let btn = document.createElement('button');
btn.id = 'buttonId';
btn.innerHTML = 'click here';
container.append(btn);

function handleOnBtn(){
    let x = Math.trunc(100 * Math.random());
    let y = Math.trunc(100 * Math.random());
    let z = Math.trunc(100 * Math.random());
    document.body.style.backgroundColor = `rgb(${x},${y},${z})`;
    console.log(x,y,z);
}
btn.addEventListener("click",handleOnBtn);