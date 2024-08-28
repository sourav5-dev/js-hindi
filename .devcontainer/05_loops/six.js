const coding = ["js","ruby","java","python","cpp"]


// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num)=> num > 4)
// console.log(newNums);

// const newNums = myNums.filter((num)=> {
//    return num > 4
// })


const newNums = []

myNums.forEach((num)=>{
    if (num > 4) {
        newNums.push(num)
    }
})

// console.log(newNums);

const books = [
    {title: 'Book one', genre: 'Fiction', Publish:1981, edition: 2004},
    {title: 'Book two', genre: 'Non-Fiction', Publish:1989, edition: 2007},
    {title: 'Book three', genre: 'History', Publish:1986, edition: 2006},
    {title: 'Book seven', genre: 'History', Publish:1956, edition: 2012},
    {title: 'Book four', genre: 'Science', Publish:1979, edition: 2003},
    {title: 'Book five', genre: 'Geography', Publish:1987, edition: 2001}
]

let userBooks = books.filter((bk) => bk.genre === 'History' )

 userBooks = books.filter((bk)=> {
    return bk.Publish >= 1980 && bk.genre === 'History'
})

console.log(userBooks);
;