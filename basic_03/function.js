
function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    
}

// sayMyName()

function addTwoNumbers(num1 , num2){
    console.log(num1 + num2);
}

// addTwoNumbers( 5 , 6 );

function loginUserMessage(username = "shane"){
    return `${username} just logged in`
}

// console.log(loginUserMessage("arsh"))


// ... means rest operator 
// it is use to convert all atterabute in an array
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(2, 4, 6))

const user = {
    username : "arsh",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `)
}

handleObject(user)






