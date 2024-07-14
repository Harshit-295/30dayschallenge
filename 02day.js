// /// activity 1

const a=30;
const b=20;
let c=a+b;
console.log(c);

c=a-b;
console.log(c);

c=a*b;
console.log(c);

c=a/b;
console.log(c);

c=a%b;
console.log(c);


// //aactivity 2

let d=2;
let k=10;
k+=d;
console.log(k)


k=10;
d=2;
k-=d;
console.log(k)


// // activity 3

function compare(num1,num2){
    if (num1>num2){
        console.log(`num1 is greater ${num1}`)
    }
    else if(num2>num1){
        console.log(`num2 is greater ${num2}`)
    }
    else {
        console.log(`num1 num2 ar equal`)
    }

}

compare(12,23);
compare(23,14);
compare(23,23);


function comparepart2(num1 ,num2){
    if (num1>=num2){
        console.log(` num1 is equal or greater`)
    }
    else if( num2>=num1){
        console.log(`num 2 is greater or equal`)
    }

}

comparepart2(23,44);


function comparepart3(num1, num2){
    if(num1===num2){
        console.log(`num1 and num2 are striclty equal`)
    }
    else if(num1==num2){
        console.log(`num1 and num2 are equal`)
    }

}

comparepart3(23,"23")


// // activity 4

let num6=7;
let num7=9;
console.log(`${num6>num7 && num6==num7}`);
console.log(`${num7>num6 || num6==num7}`);
console.log(`${num6!=num7}`);

// activity 5

let num=-100;
let result=(num>=0)?`${num} is positive`:`${num} is negative`;
console.log(result);