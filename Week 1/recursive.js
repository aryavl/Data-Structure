// function countDown(n){
//     console.log(n);

//     const newNumber= n-1;
//     // base case
//     if(newNumber >0){
//         countDown(newNumber)
//     }
// }
// countDown(4)

// function sumRange(n){
//     let total=0;
//     for(let i =n;i>0;i--){
//         total +=i;
//     }
//     return total
// }
// console.log(sumRange(5)); 
// NOT WORKING CODE 
// function sumRecursive(n){
//     let total=0;
//     if(n ===0){
//         return 0;
//     }else return total + sumRecursive(n-1)
// }
// function sumRecursive(n, total=0){
//     if(n <=0) return total;

//     return sumRecursive(n-1,total+=n)
// }

// console.log(sumRecursive(5,0));

// const tree={
//     name: "a",
//     children :[
//         {
//             name:"b",
//             children:[]
//         },
//         {
//             name:'c',
//             children:[
//                 {name: 'd',children:[]},
//                 {name: 'e',children:[]},

//         ]
//         }
//     ]
// }

// function printChildren(t){
//     if(t.children.length ===0) {
//         return 
//     }
//     t.children.forEach(child => {
//         console.log(child.name);
//         printChildren(child)
//     });
// }
// printChildren(tree)

// function fib(n){
//     if(n <=1){
//         return n;
//     }else{
//         return fib(n-1) + fib(n-2)
//     }
    
// }
// for(let i =0; i<10; i++){
//     console.log(fib(i));
// }

// function sum(n,total=0) {
//     if(n <=0){
//         return total;
//     }else{
//         return sum(n-1,total +=n)
//     }
//   }
//   console.log(sum(5,0));

// function fact(n){
//     if(n===0){
//         return 1;
//     }else {
//         return n * fact(n-1);
//     }
// }
// console.log(fact(5));
const arr=[1,2,3,4,5]
function sumArray(arr) {
    if (arr.length === 0) {
      return 0; // base case: empty array has sum of 0
    } else {
      return arr[0] + sumArray(arr.slice(1)); // recursive case: add first element and sum of rest of array
    }
  }
  console.log(sumArray(arr));