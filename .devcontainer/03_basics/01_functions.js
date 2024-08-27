


function sayMyName() {
    console.log("S");
    console.log("o");
    console.log("u");
    console.log("r");
    console.log("a");
    console.log("b");
    console.log("h");
    
}

// sayMyName()

// function addTwoNumbers(number1,number2) {
//     console.log( number1 + number2);
// }

function addTwoNumbers(number1,number2) {
    // let result = number1 + number2
    // return result;

    return number1 + number2
}

// addTwoNumbers(3,"a")

const result = addTwoNumbers(3,5)
// console.log("Result : " , result)

function loginUserMessage (username = "sam") {
    if (!username){
        console.log("Please Enter a Username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sourabh"))
// console.log(loginUserMessage("Sourabh"))

function calculateCartPrice(val1,val2,...num1)
{
    return num1
}
// console.log(calculateCartPrice(200,400,600,2000,3600));


const user = {
    username: "Sourabh",
    price: 199
}

function handelObject (anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handelObject(user)

handelObject({
    username: "sam",
    price: 399 
})

const myNewArray = [200,400, 100, 600]

function returSecondValue(getArray){
    return getArray[1]
}
console.log(returSecondValue(myNewArray));
