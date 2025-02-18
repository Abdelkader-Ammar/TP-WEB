function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`; }

let c1=document.getElementById("c1");
let c2=document.getElementById("c2");
let c3=document.getElementById("c3");
let c4=document.getElementById("c4");
let c5=document.getElementById("c5");

c1.addEventListener("click", function(){
    c1.style.backgroundColor=getRandomColor();
});
c2.addEventListener("click", function(){
    c2.style.backgroundColor=getRandomColor();
});
c3.addEventListener("click", function(){
    c3.style.backgroundColor=getRandomColor();
});
c4.addEventListener("click", function(){
    c4.style.backgroundColor=getRandomColor();
});
c5.addEventListener("click", function(){
    c5.style.backgroundColor=getRandomColor();
});

