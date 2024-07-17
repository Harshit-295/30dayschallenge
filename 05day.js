/// activity 1

const typeOfNumber=function(num1){
    if (num1%2==0){
        console.log(`${num1} is even no`)
    }
    else{
        console.log(`${num1} is odd no`)
    }

}
typeOfNumber(11);


const square=function(num1){
    let n=num1*num1
    console.log(n);
}
square(5);


/// activity 2


const max=function(num1,num2){
    if(num1>num2){
        console.log(`${num1} is greater than ${num2}`)
    }
    else{
        console.log(`${num2} is greater than ${num1}`)
    }

}

max(3,4)


const concat=function(str1,str2){
  let str3=str1+str2;
  console.log(str3);
}

concat("har","hit")


/// arrow function 


const sum=(num1,num2)=>{
   let num3=num2+num1;
   console.log(num3);
}
sum(3,4);


const finder=(st1,st2)=>{
    return (st2.includes(st1))

}
  
console.log(finder("l","harshit"))


const product=(num1,n=3)=>{
    let num3=num1*n;
    console.log(num3)
}
product(3);



const greet=(name,age=21)=>{
    return (`Hang good morning,good etm, Hangi mere ${name} level sabke nikalenge per nikalenge ussi ke jo khada rahega`) 
}

let res=greet("Harshit");
console.log(res);


// higherr order function

const parent=(repeat,child)=>{
    for(let i=1;i<=repeat;i++){
        child();
    }
}
const childfuntion=()=>{
    console.log("i am the children")
}
parent(3,childfuntion)


const higher=(fun1,fun2,num1)=>{
    fun1(num1);
    fun2(n);
}
let share=(num1)=>{
    n=num1*num1
    return n;
}
let result=(num2)=>{
    console.log(num2)
}

higher(share,result,3)