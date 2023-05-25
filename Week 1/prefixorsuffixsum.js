function  preSum(arr) { 
    const n= arr.length;
    const answer = new Array(n).fill(0);
    let letfSum =0, rightSum = 0;
    for(let i=0; i<n; i++){
        answer[i] = Math.abs(letfSum - rightSum)
        rightSum +=nums[i];
        letfSum +=nums[i]
    }
    return answer;
 }
 console.log(preSum[10,4,8,3]);