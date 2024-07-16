// activity 1

// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// let a=5;
// for (let i=1;i<=10;i++){
//     console.log(`${a}*${i}=${a*i}`);
// }

//activity 2

// let i=1;
// let sum=0;
// while(i<11){
//     sum=sum+i;
//     i++;
// }
// console.log(sum);

// let j=10;
// while(j>0){
//     console.log(j);
//     j--;
// }


// activity 3


// let k=1;
// do{
//     console.log(k);
//     k++;
// }
// while(k<6);


// let num=5;
// let product=1;
// let l=1;
// do{
//     product=product*l;
//     l++;
// }
// while(l<=num);
// console.log(product)


/// activity 4

for(let i=1;i<5;i++){
    let pattern="";
    for(let j=1;j<=i;j++){
        pattern+="*"
    }
    console.log(pattern)
}


/// activity 5

for(let m=1;m<=10;m++){
    if(m===5){
        continue;
    }
    else{
        console.log(m)
    }
}


for(n=1;n<=10;n++){
    if (n===7){
        break;
    }
    else{
        console.log(n)
    }
}
