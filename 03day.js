// activity 1

// function check(num1){
//     if(num1>0){
//         console.log(`postive no`);
//     }
//     else if(num1===0){
//         console.log(`zero`);
//     }
//     else{
//         console.log(`negative no`);
//     }

// }

// check(0);

// function eligble(age){
//     if (age>=18){
//         console.log(`eligble`);
//     }
//     else if (age<18){
//         console.log(`nor eligble`)
//     }
// }

// eligble(18);


// // activity 2

// function largest(num1,num2,num3){
//     if (num1>num2){
//         if(num1>num3){
//             console.log(`num1 is greatest of three no`);
//         }
//         else if(num3>num1){
//             console.log(`num3 is greatest no`)
//         }
//     }else if (num2>num1){
//         if(num2>num3){
//             console.log(`num1 is greatest of three no`);
//         }
//         else if(num3>num2){
//             console.log(`num3 is greatest no`)
//         }
//     }
// }

// largest(23,24,78)


// /// activity 3

// let no=3;
// let day;
// switch(no){
//     case 0:
//         day="Sunday";
//         break;
//     case 1:
//         day="MOnday";
//         break;
//     case 0:
//         day="Tuesday";
//         break;
//     case 3:
//         day="Wednesday"
//         break;
//     case 3:
//         day="Thusday"
//         break;
//     case 5:
//         day="friday"
//         break;
//     case 6:
//         day="Saturday"
//         break;
    
// }
// console.log(day);


let marks=33;
switch(marks){
    case (marks>=0 && marks <60):
        console.log("F");
        break;
    case (marks >=60 && marks<70):
        console.log("D");
        break;
    case (marks>=70 && marks<80):
        console.log("C");
        break;
    case (marks>=80 && score <90):
        console.log("B");
        break;
    case (marks >=90 && marks<=100):
        console.log("A");
        break;
}


//activity 4
let num=3;
let result=(num%2==0)?`${num} is even no `:`${num} is odd no`
console.log(result);


// activity 5

let year=2000;

if((year%4==0 && year%100!==0)||(year%400==0)){
    console.log(`${year} is leap year`)
}
else{
    console.log(`${year} is not a leap year`)
}



