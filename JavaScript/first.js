console.log("hello world") 

let i=1 
let y="hello" 
console.log(i+" "+y) 


let product=15*8
console.log(product) 
// if-else
num1=1;

if(num1==10){
    console.log("number is 10");}
else if(num1>10){
    console.log("number is greater tahn 10");}
else {    console.log("nothi will happen OR number is lessthan 10");}

// switch
// let marks=10
// switch(marks){
//     case 100:console.log("you are pass")
//     break
//     case 50:
//         console.log("you are pass") 
//         break
//     case 40:
//         console.log("you are absolutly pass")
//         break
//     case 30:console.log("you are fail")
//     break
//     default : console.log("your grade not showing")
// }



//repetation/iteration---lopops for while
console.log("*****This is FOR loop*****")
for(let i=0;i<=10;i++){
console.log(i)
}
console.log("*****This is While loop*****")
while(i<=10){
    console.log(i)
    i++
}

console.log("*****This is do-While loop*****")
let j=0;
do{
    console.log(j)
    j++
}while(j<=10);


console.log("*****This is Functions*****")

function printHelloWord(){
    console.log("this hello world from function")
}
printHelloWord();