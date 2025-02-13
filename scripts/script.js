
// try{
//     console.log(num2)
//     let num2 = 2
// }
// catch(err){
//     console.log(err)
// }

// throwing errors

let number = Number(prompt("Enter a number"))

if(isNaN(number)){
    throw new Error("yeah you caught the error")    
}
console.log(number)

if(number>0){
    console.log(number, " is positive")
}else if(number<0){
    console.log(number, " is negative")
}else if(number==0){
    console.log(number, " is zero")
}else{
    console.log("whatever")
}

// Hoisting
// Temporal dead zone
// try catch