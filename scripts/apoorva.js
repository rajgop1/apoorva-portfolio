



async function getimg () {
    let url = "https://dummyjson.com/products";
    let response = await fetch(url);
        console.log(response)
    let data = await response.json();
        console.log(data)
    let pic = data.products[1].thumbnail; 
        console.log(pic)



    const image = document.createElement("img");
    const imgcontainer = document.createElement("div");
    imgcontainer.append(image);
    document.body.append(imgcontainer); 

    
    image.src = pic  
}
getimg()