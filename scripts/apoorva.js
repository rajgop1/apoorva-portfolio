let url = "https://dummyjson.com/products";
async function getimg () {
let num = 0

const maindiv = document.createElement("div")
maindiv.classList.add("maindiv")

while (num<=29){


        let imgcontainer = document.createElement("div");
        imgcontainer.classList.add("imgcontainer");
    let image = document.createElement("img");
        image.classList.add("image")
    imgcontainer.append(image);

    



    let about_rating = document.createElement("div");
        about_rating.classList.add("aboutrate");
    let ratespan= document.createElement("span");
        ratespan.classList.add("rate");
    let rating = document.createElement("span");
        rating.classList.add("rating");
    ratespan.textContent = "Rating:  "

    imgcontainer.append(about_rating);
    about_rating.append(ratespan,rating)




    let sect = document.createElement("section");
        sect.classList.add("about-sect");
    let about = document.createElement("span");
    let warranty = document.createElement("span");

    imgcontainer.append(sect);
    sect.append(about,warranty);

    maindiv.append(imgcontainer)
    document.body.append(maindiv);



    let response = await fetch(url);
        
    let data = await response.json();
       
    let pic = data.products[num].thumbnail; 
        
    image.src = pic


    let tag = data.products[num].title;
   
    let warran = data.products[num].warrantyInformation;
  
    about.textContent= tag
    warranty.textContent = warran;

    rating.textContent = data.products[num].rating;

 num = num +1
}

}



getimg()