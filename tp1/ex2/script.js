let color = document.getElementById('color');
let sizez = document.getElementById('size');
let font = document.getElementById('fontSelector');
let text = document.getElementById('displayText');
function changecolor() {
    text.style.color = color.value;
}
function changesize() {
    text.style.fontSize = sizez.value *5 + "px";
}
function changefont() {
    let fontFamily;
    switch (font.value) {
        case "1":
            fontFamily = "Arial";
            break;
        case "2":
            fontFamily = "Times New Roman";
            break;
        case "3":
            fontFamily = "Futura";
            break;
        case "4":
            fontFamily = "Courier";
            break;
        case "5":
            fontFamily = "Sans-serif";
            break;
        default:
            fontFamily = "Open Sans";
    }
    text.style.fontFamily = fontFamily;
}
color.addEventListener('input', changecolor); 
sizez.addEventListener('input', changesize); 
font.addEventListener('change', changefont); 
