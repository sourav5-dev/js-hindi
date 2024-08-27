// var c = 300

let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
}



//console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = " Sourabh"
    function two(){
        const website = "pointlab"
        console.log(username);
        // console.log(website);
    }
    // console.log(website);
     two()
}
// one()

if (true) {
    const username = "Sourabh"
    if (username === "Sourabh") {
        const website = " Pointlab"
       // console.log(username + website);
    }
    // console.log(website);
    // console.log(username);
}
// console.log(username);

// +++++++++ IMP ++++++++++++++
console.log(addone(5));

function addone(num) {
    return num + 1
}


const addtwo = function(num){  // we call it expression somewhere
    return num + 2
}
console.log(addtwo(5));