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

const posts = [
    {
        title: "Making a design system from scratch",
        date: "12 Feb 2020",
        category: "Design, Pattern",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        title: "Creating pixel perfect icons in Figma",
        date: "12 Feb 2020",
        category: "Figma, Icon Design",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
]

console.log(posts)