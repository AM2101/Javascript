const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ['js', 'rb', 'py']

for (const key in programming) {
   console.log(programming[key]);
}