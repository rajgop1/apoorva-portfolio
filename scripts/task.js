// API's

// https://dummyjson.com/products

function getData(){
    // fetch("https://dummyjson.com/products").then(function (response){
    //     return response.json()
    // }).then(function (data){
    //     console.log(data)
    // })
    // console.log("hi")
    // console.log("hello")
}

async function getData(){
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()
    console.log(data)
    console.log("hi")
    console.log("hello")
}

getData()