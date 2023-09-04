const display = document.getElementById('main'); 
const color = ["blue", "Red", "black", "orange", "yellow"];
const body = document.querySelector('body'); 
const data = document.getElementById("colors")

data.innerHTML += `<li> <button onClick="blue()" class="blue">${color.slice(0, 1)}</button> </li>`;
data.innerHTML += `<li> <button onClick="red()" class="red">${color.slice(1, 2)}</button> </li>`;
data.innerHTML += `<li> <button onClick="black()" class="black">${color.slice(2, 3)}</button> </li>`;
data.innerHTML += `<li> <button onClick="orange()" class="orange">${color.slice(3, 4)}</button> </li>`;
data.innerHTML += `<li> <button onClick="yellow()" class="yellow">${color.slice(4, 5)}</button> </li>`;


function blue(){
    switch (body) {
        case body.style.backgroundColor == "white":

            break;
        case body.style.backgroundColor = "blue":
            break;
    }
}
function red(){
    switch (body) {
        case body.style.backgroundColor == "blue":

            break;
        case body.style.backgroundColor = "red":
            break;
    }
}
function black(){
    switch (body) {
        case body.style.backgroundColor == "red":

            break;
        case body.style.backgroundColor = "black":
            break;
    }
}
function orange(){
    switch (body) {
        case body.style.backgroundColor == "black":

            break;
        case body.style.backgroundColor = "orange":
            break;
    }
}
function yellow(){
    switch (body) {
        case body.style.backgroundColor == "orange":

            break;
        case body.style.backgroundColor = "yellow":
            break;
    }
}