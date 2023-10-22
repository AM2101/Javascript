// const coding = ["js", "ruby", "java", "python", "cpp"]


// coding.forEach( (item)=>{
//     console.log(item);
// } )


const myNum = [1,2,3,4,5,6,7,8,9,10]

// const values = myNum.filter ( (num)=>( num > 4 ) )

// or 

// const values = myNum.filter ( (num)=> {
//     return num > 4
// }  )

const newNums = []

myNum.forEach((num) => {
    if (num > 4)
    newNums.push(num);
})


console.log(newNums);