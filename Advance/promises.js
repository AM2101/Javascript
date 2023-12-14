//promise one
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 1");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})
// **********************


//promise two
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("promise 2 consumed");
})
// **********************************

//promise three
const promiseThree = new Promise(function(resolve,reject){
    setTimeout( function(){
        resolve({username: 'mittal', email: 'chai@example.com'})
    } ,1000)
})

promiseThree.then(function(e){
    console.log(e)
})
// ***************************************

//promise four

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username: "arsh", password:'123'})
        }else{
            reject('Error: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("This is finally block")
})
// *****************************


//promise five

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username: "javascript", password:'123'})
        }else{
            reject('Error: js went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);

    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// ******************************

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers();

// **************************

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("final code done");
})