// singelton

// onject literals

// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "sourabh",
    "full name": "Sourabh kaushik",
    [mySym] : "myKey1",
    age: 29,
    location: "canada",
    email:"sourab@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]    
}


console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser["full name"]);


console.log(JsUser[mySym]);

JsUser.email = "Sourabh@yahoo.com"

console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JsUser");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());