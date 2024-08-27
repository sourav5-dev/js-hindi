// array

// const myArr = [0,1,2,3,4,5]
const myHeros = ["Marvels","herryPoter"]  

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[2]);
// console.log(myArr2[2]);

// Arr methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(6) // for add the value in arr n front or first
// myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join()
// console.log(myArr);


// console.log(newArr);

// slice, splice
const myArr = [0,1,2,3,4,5]
console.log("A", myArr);
const myn1 = myArr.slice(1, 3) // not include range last
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3) // include last range
console.log("C", myArr);
console.log(myn2);

