function palindrome(arr){
    for(let i = 0; i<arr.length/2; i++){
        if(arr[i] !== arr[arr.length -1 - i]){
            return false;
        }
    }
    return true
}
const arr1=[1,2,3,2,1];
console.log(palindrome(arr1));
const arr2=[1,2,3,4,1];
console.log(palindrome(arr2));