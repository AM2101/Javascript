// const date = new Date();
// console.log(date)
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toLocaleString())
// console.log(typeof date)


/* Time Stemp */
let myCreatedDate = new Date("01-14-2023")

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate.getFullYear());
newDate.toLocaleString('default',{
    weekday:"long",
})