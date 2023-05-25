// write a algorithm that takes an array of numbers as input and calculates the sum of those numbers
// Define the time complexity of that algorithm and determine what the lowest possible time complexity for this prblm.
// Eg: [1,3,10] output = 14

function sum(arr,index) { 
    if(index<0){
        return 0;
    }
    return arr[index] + sum(arr,index-1)
 }
 const arr=[1,3,10];
 let n= arr.length-1;
 console.log(sum(arr,n));
