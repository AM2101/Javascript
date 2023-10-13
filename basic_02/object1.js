// Singleton

// object literals


const mySym = Symbol("key1")

const jsUser = {
    name : "arsh",
    age : 21,
    [mySym]: 'mykey1',
    email: 'arsh@gmail.com',
    isLoggedIn: false,
    lastLoginDays:["monday","sunday"]
}

// console.log(jsUser.email);
// console.log(jsUser['email']);
// console.log(jsUser[mySym]);

jsUser.email = "arsh@gpt.js";
// Object.freeze(jsUser)
jsUser.email = "arsh@micro.js";
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hi jsUser");
}
jsUser.greeting2 = function(){
    console.log(`hi jsUser, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
