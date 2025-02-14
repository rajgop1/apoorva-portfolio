
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

// Scopes
// Hoisting
// Temporal dead zone
// try catch
// functions: how are they hoisted 
// named function, anonymous function, arrow function 

// ***************** 1️⃣ Hoisting (Variable + Function Hoisting) *****************

// Hoisting ka matlab hai ki JavaScript execution se pehle variables aur functions ko memory me le jata hai.

// ✅ Function Hoisting: Named functions hoist hoti hain, isliye unhe declare karne se pehle bhi call kar sakte hain
console.log(hoistedFunction()); // ✅ Output: "I am a function and I am hoisted!"

function hoistedFunction() {
    return "I am a function and I am hoisted!";
}

// ❌ Anonymous function aur arrow function hoist nahi hote, ye error denge
// console.log(anonFunction()); // ❌ TypeError: anonFunction is not a function
var anonFunction = function () {
    return "I am an anonymous function!";
};

// console.log(arrowFunction()); // ❌ TypeError: arrowFunction is not a function
var arrowFunction = () => "I am an arrow function!";

// ✅ Variable Hoisting (var hoist hota hai par `undefined` ke saath)
// JavaScript pehle variable declare kar deta hai but assign nahi karta
console.log(hoistedVar); // ✅ Output: undefined
var hoistedVar = "I am hoisted!";

// ❌ let aur const hoist to hote hain, par TDZ (Temporal Dead Zone) me rehte hain
// console.log(hoistedLet); // ❌ ReferenceError
let hoistedLet = "I am not accessible before declaration";


// ***************** 2️⃣ Temporal Dead Zone (TDZ) *****************

// let aur const ka ek phase hota hai jab wo declare hote hain par access nahi kar sakte, usko TDZ kehte hain
// console.log(tdzVar); // ❌ ReferenceError: Cannot access 'tdzVar' before initialization
let tdzVar = "I am out of TDZ now"; // ✅ Yeh declare hone ke baad accessible hai


// ***************** 3️⃣ Scopes in JavaScript *****************

// Scope ka matlab hai ki ek variable kahaan tak accessible hai.
// JavaScript me 3 tarah ke scopes hote hain:

// 1. Global Scope → Jo poore program me accessible hota hai.
// 2. Function Scope → Jo sirf ek function ke andar accessible hota hai.
// 3. Block Scope → Jo sirf `{}` ke andar accessible hota hai (let & const ke saath).

// ✅ Global Scope
var globalVar = "I am a global variable"; // Yeh kahin bhi accessible hai

function testScope() {
    // ✅ Function Scope
    let functionVar = "I am inside a function";

    if (true) {
        // ✅ Block Scope
        let blockVar = "I am inside a block";
        console.log(blockVar); // ✅ Ye chalega
    }

    // console.log(blockVar); // ❌ Error: blockVar is block-scoped
    console.log(functionVar); // ✅ Ye chalega
}

testScope();
console.log(globalVar); // ✅ Ye chalega
// console.log(functionVar); // ❌ Error: functionVar function ke bahar nahi milega


// ***************** 4️⃣ try...catch *****************

// try...catch ka use error handling ke liye hota hai.

try {
    let result = 10 / 0; // Divide by zero (possible issue)
    console.log(result); // ✅ Infinity
    console.log(undefinedVar); // ❌ ReferenceError
} catch (error) {
    console.log("Error caught:", error.message); // ✅ Error handle ho gaya
} finally {
    console.log("This will always execute!"); // ✅ Yeh hamesha chalega
}


// ***************** 5️⃣ Custom Error Handling (Throw Error) *****************

// JavaScript me hum khud bhi error throw kar sakte hain "throw" keyword ka use karke

function checkAge(age) {
    if (age < 18) {
        throw new Error("You must be 18 or older!");
    }
    return "You are allowed!";
}

try {
    console.log(checkAge(15)); // ❌ Error throw hoga
} catch (error) {
    console.log("Custom Error Caught:", error.message);
}

console.log(checkAge(20)); // ✅ Ye properly chalega


// ***************** 6️⃣ Named Function, Anonymous Function, Arrow Function *****************

// ✅ Named Function
function namedFunction(name) {
    return "Hello, " + name;
}
console.log(namedFunction("Rajgopal"));

// ✅ Anonymous Function (without name, mostly used in variables)
var anonFunc = function (name) {
    return "Hi, " + name;
};
console.log(anonFunc("Raj"));

// ✅ Arrow Function (Short syntax)
var arrowFunc = (name) => `Hey, ${name}`;
console.log(arrowFunc("Gopal"));
