const div = document.querySelector('div'); 
const color = ["blue", "Red", "black", "orange", "yellow"];
const body = document.querySelector('body'); 
// const para = document.querySelector('p');

// const data = document.getElementById("colors")

for (let i = 0; i < color.length; i++) {
    div.innerHTML += `<button onclick='changeColor(${i})'>${color[i]}</button>`
    
}


function changeColor(i){
    console.log(i);
    body.style.backgroundColor = color[i];
//    para.innerHTML += `${color[i]}`
}
