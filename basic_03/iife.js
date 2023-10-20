// Immediately Invoked function Expressions (IIFE)

// some times gloabal variable ke pollucations ki vjha se problem ho jati hai to us provblem ko override krne ke liye IIFE use krte hai
// and jo function phle execute krna hota hai uske liye bhi 

(function chai(){
    // named IIFE
    console.log("DB connected");
})();

(  (name)=>{
    // simple IIFE
    console.log(`DB connected 2 ${name}`);
}  )('arsh')

