// activity 1

const myarr=[1,2,3,4,5];
console.log(myarr);

let a=myarr[0];
let b=myarr[myarr.length-1];
console.log(a,b);


// activity 2

//push
let methods=[1,2,3,4,5]
methods.push(9);
console.log(methods)

//pop
methods.pop(9)
console.log(methods)

//shift
methods.shift(methods[0])
console.log(methods)

//unshift
methods.unshift(9)
console.log(methods);


// activity 3

//map
let arr2=myarr.map(x=>x**2);
console.log(arr2);

// filter
let arr3=myarr.filter(x=>x%2==0);
console.log(arr3)

// reduce
const arr4=myarr.reduce((acc,cuml)=>{
   return acc+cuml;
})
console.log(arr4);

// array Iteration 


for(const num in myarr){
   console.log(myarr[num]);
}

myarr.forEach(num => {
   console.log(num)   
});

/// multi dimensional array


const array=[[1,2,3],[4,5,6],[7,8,9]]
console.log(array);

console.log(array[2][1]);



