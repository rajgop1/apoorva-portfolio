var color = document.getElementById("colors")
var style = document.getElementById("styles")
var size = document.getElementById("fontsize")
var result = document.getElementById("result")
function motion(){
result.style.color = color.value;
result.style.fontFamily = style.value;
result.style.fontSize = size.value;

}
var okay = document.getElementById("bton").addEventListener("click" , motion)

