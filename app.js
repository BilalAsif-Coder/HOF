console.log("Js Running ");

  // higer oerder function

function greet(name) {
    console.log("helllo " + name);
    
}

function processorUSer (callBack) {
    callBack("BIlal")
}


processorUSer(greet)


function additionHandler (a,b) {
    console.log(a + b);
    
}

function additionValues (callBack) {
    callBack(2,4)
}

additionValues(additionHandler)


function hof (n) {
    console.log("CallBAck FUnction is ---> " + n);
    n("Bilal")
}




hof(function  (name) {
    console.log("HElooo   " + name);
    
}) 


///////////// map ////////////////



let numbers= [1,2,3,4,5,6,7,8,9,10]

let usingMap = numbers.map(function(num) {
     return num * 2
})


console.log(usingMap);



/////////// for each /////////////


let names = ["bilal" , "ismail" , "abdullah"]
names.forEach(function(name){
    console.log("Welcome ---->  " , name);
    
})


let BrandName = ["J." , "Outfitters" , "Saya" , "HItler",   
]
let Bnames = BrandName.forEach(function (name) {
    console.log("Welcome to ", name);
    
})

/////   filter  ///////

let filterNumbers = [20,30,40,50,60,70,80,90,100]

let filterResult = filterNumbers.filter(function(num) {
    return num > 20
})


console.log(filterResult);




