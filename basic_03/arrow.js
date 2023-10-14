const user = {
    username:"arsh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this)
    }
    
}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage();

// console.log(this)

// function one(){
//     console.log(this);
// }

// one()

// const chai = ()=>{
//     let username = "arsh"
//     console.log(this)
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) => ({username:"arsh"})

console.log(addTwo(66, 54))

