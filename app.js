



///// Higher Order Function ///// 

//Q no 1 
//Higher ot=rder function aik aeas function hota hai jo aik ya aik se zada segments le

//Q no 2 
//yes 

//Q no 3 
//yes 

// //Q no 4 
// function greet (name) {
//     console.log("Welcome ----> " , name);

// }

// function userName (callBack) {
//     callBack("Bilal")
// }

// userName(greet)


//Q no 5 


//Q no 6 


//Q no  7 filter
//filter is use for filtering in array . filter is used to filring multiple values in array 

//Q no 8  Reduce 
//Reduce is use for multiple value for array convert in one value 

//Q no 9  Filtes and find difference
//find is use for finding 1 value in array 
//filter is use for filtering multiple values in array 

//Q no 10 map and forEach difference 
//map is a method of array  // foreach is also method of array 
//map return values deta hai 
//forEach return nhi deta warna undefiend deta hai 



//////////////////////////////// ARRAY HIGHER ORDER METHODS //////////////////////////

// Q no 1  
let array = [1, 2, 3, 4]
let addArray = array.map(function (arrayNum) {
    return arrayNum * 2
})

console.log(addArray);

//Q no 2 

let namesArr = ["bilal", "asif", "abdullah", "ismail"]
let arryUpdated = namesArr.map(function (n) {
    return n.toUpperCase()
})

console.log(arryUpdated);

//Q no 3 
let prizeArray = [100, 200, 300, 400, 500]
let updatedPrizearray = prizeArray.map(function (a) {
    return a + 10
})
console.log(updatedPrizearray);


//Q no 4 
let arrayOfnames = ["Bilal", "Abdullah", "Asif", "Ismail"]
let additionOFarray = arrayOfnames.map(function (b) {
    console.log("Mr", b);

})



//Q no 5
let numbersOfarray = [2, 4, 16]
let square = numbersOfarray.map(function (s) {
    return s * s
})

console.log(square);

///////////////////////////////////filter ///////////////////////////////////////
//Q no 1 


//Q no 2 
let arrNames = ["bilal", "asif", "abdullah", "ismail", "murtaza"]
let lenghtArr = arrNames.filter((a) => {
    if (a.length > 5) return a
})
console.log(lenghtArr);

//Q no 3 
let arrPrize = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170]
let greaterArr = arrPrize.filter((z) => {
    return z > 100
})

console.log(greaterArr);


//Q no 4 
let students = ["bilal", "abdullah", "Messi", "Spiderman", "Elon Mask"]
let passStudents = students.filter((n) => {
    return n
})

console.log(passStudents);

//Q NO 5 
let prizeOFarray = ["-1", "-2", "-3", "1", "3"]


///////////////////////////////forEach///////////////////////////
//Q No 1 
let arrayElements = [1,2,3,4,56,7,]
let printArr = arrayElements.forEach((a) => {
    console.log("Numberssssssssss --->" , a);
    
})

//Q no 2 
let fruitsArray = ["apple","Banana","Mango","Orange",]
let numberingFruitsarray = fruitsArray.forEach((fruit , index) => {
   console.log(index,fruit);
   
   
})

//Q no 3 
let usersArray =["bilal","Asif","abdullah","Ismail","Hasan"]
let usersPrint = usersArray.forEach((u)=>{
    console.log("Welcome ------>",u);
    
})


//Q no 4 
// let additonNumberofArray = [10,20,30,40]
// let addNumber = additonNumberofArray.forEach((a) => {
//     console.log(a + a);
    
// })


//Q no 5 
let stuArr = ["bilal","asif","abdullah","ismail","sufiyan"]
let stuResult = stuArr.forEach((e)=>{
 console.log(e.toUpperCase());
 
})


//////////////////////////////////////find/////////////////////////
//Q no 1
let findArr = [10,20,30,40]
let findingNumbers = findArr.find((e)=>{
    return e > 25
})

console.log(findingNumbers);


//Q no 2 
let userArr = ["ali","sadiq","Sufiyan","Abdullah"]
let findingUsers = userArr.find((e) =>{
    return e[0]
})

console.log(findingUsers);

//Q no 3 
let expensivePrizearray = ["Car","bike","phone"]
let findingExpensiveitem = expensivePrizearray.find((e)=> {
     return e[0]
})
console.log(findingExpensiveitem);



//Q no 4 
let evenNumberarray = [1,2,3,4,5,6]
let findingEvenarray =evenNumberarray.find((e) =>{
    return e[0]
})



//Q no 5
let studentarray = ["Ali","Bilal","ismail","sufiyan"]
let failStudentfindingArray = studentarray.find((e) => {
    return e[2]
})

console.log(failStudentfindingArray);




























