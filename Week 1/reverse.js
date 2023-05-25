// function reverse(arr){
//     let left= 0;
//     let right= arr.length-1;

//     while(left <right){

//     }
// }

// function fun(n){
//     if(n<=1){
//         return
//     }
//     fun(n-1)
//     console.log(n);
//     fun(n-1)
// }
// fun(5)
const arr=[1,2,3,4,5];

for(let i =0,j=arr.length-1 ; i<j;i++,j--){
    let temp = arr[i];
    arr[i]= arr[j];
    arr[j]=temp;
}
console.log(arr);