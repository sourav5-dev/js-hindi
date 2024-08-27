// const tiktokuser = new Object()
const tiktokuser = {}

tiktokuser.id = "123ecd"
tiktokuser.name = "sam"
tiktokuser.isLoggedIn = false

// console.log(tiktokuser);


const regularUser = {
    email: "sam@gmail.com",
    fullname: {
        userfullname:{
            firstname:"sourabh",
            lastname:"Kaushik"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a",2: "b"}
const obj2 = {3:"c",4: "d"}

// const obj3 = {obj1, obj2}

// const obj4 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log( obj4);


const users = [
    {
        id: 1,
        email: "s@google.com"
    },
    {
        id: 1,
        email: "s@google.com"
    },
    {
        id: 1,
        email: "s@google.com"
    },
    {
        id: 1,
        email: "s@google.com"
    },
    {
        id: 1,
        email: "s@google.com"
    }
]
users[1].email

// console.log(tiktokuser);

// console.log(Object.keys(tiktokuser));
// console.log(Object.values(tiktokuser));

// console.log(Object.entries(tiktokuser));
// console.log(tiktokuser.hasOwnProperty("isLoggedIn"));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInsructor: "Sourabh"
}

// course.courseInsructor
const {courseInsructor : instructor} = course
console.log(instructor);

const navbar = () => {

}

navbar(company =  "sourabh")