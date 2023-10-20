// if statement

// if (true) {

// }else{

// }

// <, >, <=, >=, ==, !=, ===, !==  


// short hand notation

// const balance = 1000

// if(balance>100) console.log('test');

//truthy

const userEmail = "h@hitesh.ai"

if(userEmail){
    console.log("got user Email");
} else {
    console.log("don't have user email");
}

// falsy values

// false , 0, -0, BigInt On, "", null, undefined, NaN  


// truthy value
// '0', 'false' , " ", {}, [], function(){}

// if(userEmail.length === 0){
//     console.log("array is empty")
// }



// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0){
//     console.log('object is empty');
// }

// logical operators

// Nullish Coalescing operators (??) : null undefined

let val1;

// val1= 5 ?? 10

// val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 15


console.log(val1);


// Terniary Operator

//  condition ? true : false