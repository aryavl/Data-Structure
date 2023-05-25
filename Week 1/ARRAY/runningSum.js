var runningSum = function(nums) {
    let sum=[];
    sum[0]=nums[0];
    for(let i=1;i<nums.length;i++){
        sum[i]= nums[i]+sum[i-1];
    }
    return sum
};
console.log(runningSum([1,2,3,4]));

function sameArray(arr){
    for(let i=1;i<arr.length;i++){
        arr[i]+=arr[i-1];
    }
    return arr
}
console.log(sameArray([1,1,1,1,1]));