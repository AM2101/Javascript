// reduce and it is used in payment method

 const myNums = [1,2,3]

 const mytotal =  myNums.reduce( ( accoumoltor , currval )=>{
    // console.log(`acc :- ${accoumoltor} and current value: ${currval}`);
    return accoumoltor + currval ;
 } , 3)

//  console.log(mytotal);


const shoppingCart = [
    {
        name : 'apple',
        price : 50,
    },
    {
        name : 'mango',
        price : 100,
    },
    {
        name : 'banana',
        price : 60,
    },
    {
        name : 'grapes',
        price : 40,
    },
]


 console.log( shoppingCart.map( (item)=>{ return item} )  );
 const priceToPay = shoppingCart.reduce( (acc , item )=> ( acc + item.price ),0 )
 console.log('Total Price to pay ', priceToPay );

