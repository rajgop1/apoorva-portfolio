


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



const recentPostsBody = document.createElement("div")
container.append(recentPostsBody)

const typographyP = document.createElement("p")
typographyP.textContent=post[0].title
recentPostsBody.append(typographyP)



const midone = document.createElement("section")
const p1 = document.createElement("p")
const p2= document.createElement("p")
const p3 = document.createElement("p")
p1.textContent = post[0].date
p2.textContent = post[0].sign
p3.textContent = post[0].category
midone.append(p1, p2 ,p3)

recentPostsBody.append(midone)

const typographyP2 = document.createElement("p")
typographyP2.textContent = post[0].description

recentPostsBody.append(typographyP2)











const recentPostsBody2 = document.createElement("div")
container.append(recentPostsBody2)


const typographyP3 = document.createElement("p")
typographyP3.textContent=post[1].title
recentPostsBody2.append(typographyP3)

const midone1 = document.createElement("section")
const p1p = document.createElement("p")
const p2p= document.createElement("p")
const p3p = document.createElement("p")
p1p.textContent = post[1].date
p2p.textContent = post[1].sign
p3p.textContent = post[1].category

midone1.append(p1p,p2p,p3p)
recentPostsBody2.append(midone1)


const typographyP4 = document.createElement("p")
typographyP4.textContent = post[1].description


recentPostsBody2.append(typographyP4)





container.style.cssText = 'display: flex;  flex-direction:row; background-color: rgb(99, 201, 229); justify-content:center; gap:20px'
midone.style.cssText='display: flex;  flex-direction:row; gap:20px; '
midone1.style.cssText='display: flex;  flex-direction:row;  gap:20px;'
recentPostsBody.style.cssText='background-color:white; width:429px; margin: 20px 0px; padding: 10px 10px;'
recentPostsBody2.style.cssText='background-color:white; width:429px; margin: 20px 0px; padding: 10px 10px;'
