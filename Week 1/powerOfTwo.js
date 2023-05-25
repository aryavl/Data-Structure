function isPowerOfTwo(n){
    if(n < 1) return false;
    while(n > 1){
        if(n % 2 !== 0) return false;
        n=n/2;
    }
    return true;
}
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));

// not success
// function rec(n){
//     if(n < 1) return false;
//     while(n > 1) {
//         if(n % 2!==0) return false;
//         rec(n/2)
//     }
//     return true;
// }
// console.log(rec(2));

function powerOfTwo(n) {
    // Base case: if n is 0, return 1
    if (n === 0) {
      return 1;
    }
    // Recursive case: calculate the power of two for n-1 and multiply by 2
    else {
      return powerOfTwo(n - 1) * 2;
    }
  }

  console.log(powerOfTwo(4));

//   function sum(n){
   
//     if(n === 0) return 1;
//     else return sum((n-1) + 1)
//   }
//   console.log(sum(10));

const arr=[1,1,1,1];

function sumArr(arr){
    if(arr.length === 0){
        return 0;
    }
    else{
        return arr[0] + sumArr(arr.slice(1));
    }
}
console.log(sumArr(arr));
