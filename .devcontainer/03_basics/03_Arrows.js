const user = {
    username :"Sourabh",
    price: 999,
    welcomeMessage:  function()
    {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}
//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()

// console.log(this);

// function one()
// {
//     let username = "sourabh"
//     console.log(this.username);
// }
// one()


// const one = function()
// {
//     let username = "sourabh"
//     console.log(this.username);
// }

const one = () =>
{
    let username = "sourabh"
    console.log(this);
}
// one()

// const addtwo= (num1, num2) => {      //basic arrow function
//     return num1+num2
// }


// const addtwo= (num1, num2) => num1+num2    // Implicite returened
    
// const addtwo= (num1, num2) => (num1+num2)

const addtwo= (num1, num2) => ({username : "sourabh"})

console.log(addtwo(3,4));

// const myArray = [2,3,4,5,8]
// myArray.array.forEach()
