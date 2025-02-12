


// Task: show  this post as card inside id="recent-posts-body"

const post = [{
    title: "Creating pixel perfect icons in Figma",
    date: "12 Feb 2020",
    sign: "|",
    category: "Figma, Icon Design",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

},
{   title: "Making a design system from scratch",
    date: "12 Feb 2020",
    sign: "|",
    category: "Design Pattern",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
}
]

const container = document.getElementById("container")
num = 0
while (num <= post.length){

    let recentPostsBody = document.createElement("div")
container.append(recentPostsBody)

let typographyP = document.createElement("p")
typographyP.textContent=post[num].title
recentPostsBody.append(typographyP)
recentPostsBody.classList.add("recent")


let midone = document.createElement("section")
let p1 = document.createElement("p")
let p2= document.createElement("p")
let p3 = document.createElement("p")
p1.textContent = post[num].date
p2.textContent = post[num].sign
p3.textContent = post[num].category
midone.append(p1, p2 ,p3)
midone.classList.add("middle")

recentPostsBody.append(midone)

let typographyP2 = document.createElement("p")
typographyP2.textContent = post[num].description

recentPostsBody.append(typographyP2)
 num = num + 1
}


















recentPostsBody.style.cssText='background-color:white; width:429px; margin: 20px 0px; padding: 10px 10px;'

