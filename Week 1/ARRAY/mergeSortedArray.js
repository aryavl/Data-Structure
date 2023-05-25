const merge=(nums1,m,nums2,n)=>{
    let LastIndexOfNums1 = m - 1;
    let lastIndexOfNums2 = n - 1;
    let lastIndexOfMergedArray= m + n - 1;

    while(lastIndexOfNums2 >=0){
        let fVal = nums1[LastIndexOfNums1];
        let sVal = nums2[lastIndexOfNums2];

        if(fVal > sVal){
            nums1[lastIndexOfMergedArray]=fVal;
            lastIndexOfMergedArray--;
            LastIndexOfNums1--;
        }else{
            nums1[lastIndexOfMergedArray] = sVal;
            lastIndexOfMergedArray--;
            lastIndexOfNums2--;
        }
    }
    console.log(nums1);
}

merge([1,2,3,0,0,0],3,[2,5,6],3);