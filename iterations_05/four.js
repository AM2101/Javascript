// foreach

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( (item) => {
    // console.log(`I like ${item}`)
} )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item , index , arr)=>{
//     console.log(item , index, arr)
// })

const myCoding = [
    {
        languageName: "js",
        isFavorite: true
    },
    {
        languageName: "java",
        isFavorite: false
    },
    {
        languageName: "python",
        isFavorite: true
    }
]

myCoding.forEach((item)=>{
    // console.log(item.languageName);
})