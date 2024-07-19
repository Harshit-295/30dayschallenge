// activity 1

const book={
    title:"build don't talk",
    authorname:"Raj Shamani",
    year:2019,

}
console.log(book);

console.log(book.title)
console.log(book.authorname)
console.log(book.year)


// // Activity 2


book.details=()=>{
    return (`The book name is ${book.title} and written by ${book.authorname}`)
}
console.log(book.details());

book.updateyear=(year)=>{
    book.year=year;
}


book.updateyear(2000);
console.log(book);

// activity 3

const library={
    name:"HB",
    book:[book,{...book}],
}
console.log(library)


// this to take the array out of the object by using for each 
console.log(library.name)
library.book.forEach((book) => {
    console.log(book.title);
});


// activity 4

book.thisuse=function(){
    return `${this.authorname} is this how we use the this `
}

console.log(book.thisuse());


// // activity 5

for(keys in book){
    console.log(`${keys} and the value is ${book[keys]}`)
}

console.log(Object.keys(book))
console.log(Object.values(book))


