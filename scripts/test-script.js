const data = {
    name: "Apoorva",
    age: 20,
    gender: "Female"
}

// My name is Apoorva, my age is 20 and my gender is female 

const myDetailsPara = document.createElement("p")

myDetailsPara.textContent = `My name is ${data.name}. My age is ${data.age}, My gender is ${data.gender}.`

document.body.append(myDetailsPara)


// Task: show  this post as card inside id="recent-posts-body"

const post = {
    title: "Creating pixel perfect icons in Figma",
    date: "12 Feb 2020",
    category: "Figma, Icon Design",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
}


