


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
let recentPostsBody = [document.createElement("div"),document.createElement("div")]
let typographyP = [document.createElement("p"),document.createElement("p")]
let midone = [document.createElement("section"),document.createElement("section")]
let p1 = [document.createElement("p"),document.createElement("p")]
let p2= [document.createElement("p"),document.createElement("p")]
let p3 = [document.createElement("p"),document.createElement("p")]
let typographyP2 = [document.createElement("p"),document.createElement("p")]
let num = 0

while (num <2){

    
container.append(recentPostsBody[num])


typographyP[num].textContent=post[num].title
recentPostsBody[num].append(typographyP[num])

p1[num].textContent = post[num].date
p2[num].textContent = post[num].sign
p3[num].textContent = post[num].category
midone[num].append(p1[num], p2[num] ,p3[num])

recentPostsBody[num].append(midone[num])


typographyP2[num].textContent = post[num].description

recentPostsBody[num].append(typographyP2[num])
recentPostsBody[num].style.cssText='background-color:white; width:429px; margin: 20px 0px; padding: 10px 10px;'


 num = num + 1 
}

















container.style.cssText = 'display: flex;  flex-direction:row; background-color: rgb(99, 201, 229); justify-content:center; gap:20px; box-sizing: border-box;'
midone.style.cssText='display: flex;  flex-direction:row; gap:20px; box-sizing: border-box; '
