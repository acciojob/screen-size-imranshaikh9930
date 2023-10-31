//your JS code here. If required.
const width = document.querySelector("#widthValue");
const height = document.querySelector("#heightValue");

window.addEventListener("resize",()=>{
   width.innerText = window.innerWidth;
   height.innerText = window.innerHeight;
})