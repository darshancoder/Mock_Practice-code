let arr = [10,20,30,40,50]

// for(let i=arr.length-1; i>=0; i--){
//     console.log(arr)
// }

// for(let i=arr.length-1; i>0; i--){
//     console.log(arr[i])
// }
// console.log(arr)

for(let i=0; i<10; i++){
    console.log(i)
}
// This Code Done By Vaibhav I need Lots of practice Beacuse even I can'not done I have to beat him very hard me today I have to beat him one day I practice very hard 
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
let arr = [10,20,30,40,50,60,70,80,90,1000]

console.log("Array Before reversal: ");
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

let mid=arr.length/2;
let end=arr.length-1;
let temp;
for(let i=0; i<mid; i++){
    temp=arr[i];
    arr[i]=arr[end];
    arr[end]=temp;
    end--;

}
console.log("Array After reversal: ");
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
   
}
 console.log("Done After the Array")