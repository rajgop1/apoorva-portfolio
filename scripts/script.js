var color = document.getElementById("colors")
var style = document.getElementById("styles")
var size = document.getElementById("fontsize")
var result = document.getElementById("result").textContent
function motion(){
result.style.color = "color";
result.style.fontfamily = "style";
result.style.fontsize = "size";

}
var okay = document.getElementById("btn").addEventListener("click" , motion)

