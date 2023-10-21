// for of

// [ "" , "" , "" ]
// [{},{},{}]

const arr = [ 1, 2, 3, 4, 5 ]

for(const num of arr){
    // console.log(`${num}`)
}

const greetings = "hello world"

for (const greet of greetings) {
    if (greet == " ")
    continue;
    // console.log(`${greet}`);
}

// Maps 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")

// console.log(map);


const myObject = {
    game1 : 'GTA',
    game2 : 'PubG'
}


//not working
// for (const [key, value] of myObject) {
//     console.log(`${key} :- ${value}`);
// } 

