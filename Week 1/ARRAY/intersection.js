const nums1 = [4,9,5]
const nums2 = [9,4,9,8,4]


const intersectionArray = nums1.filter(item=>{
    return nums2.includes(item);
})
console.log([...new Set(intersectionArray)]);