// const tinderUser =  new Object() //singleton object
const tinderUser = { } // nonsingleton object

tinderUser.id = "123abc"
tinderUser.name = 'arsh'
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullname :{
        userFullName: {
            firstname:'arsh',
            lastname:'mittal'
        }
    }
}

// console.log(regularUser.fullname.userFullName);

// const object1 = {
//     1:'a',
//     2:'b',
    
// }
// const object2 = {
//     3:'a',
//     4:'b',
    
// }

// const obj3 = Object.assign({}, object1,object2)


// const obj3 = {...object1, ...object2}
// console.log(obj3);

const user = [
    {
        id:1,
        name:'arsh',
    },
    {
        id:1,
        name:'arsh',
    },
    {
        id:1,
        name:'arsh',
    }
]

user[1].name
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));





