// Dates
let myDate =new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString()); // date in string & number
// console.log(myDate.toLocaleString()); // date in numbers
// console.log(typeof myDate);

// let myCreatedDate = new Date (2024, 0, 27) // month start with 0 in javascript


// let myCreatedDate = new Date ("2024-01-27")

let myCreatedDate = new Date ("01-27-2024") // indian style date 


// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());


// console.log(Math.floor(Date.now()/1000)); // get the second of time till 1970

let newDate = new Date()
  console.log(newDate);
console.log(newDate.getDate());


newDate.toLocaleString('default',{
    weekday: "long",
})
