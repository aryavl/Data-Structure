let histogram = (arr,char)=>{
    // let charRepeat='';
    // for(let i= 0; i <arr.length;i++){
    //     for(let j =0 ;j<arr[i];j++){
    //         charRepeat +=char;
    //     }
    //     console.log(charRepeat);
    //     charRepeat="";
    // }
    arr.map(num=>{console.log(char.repeat(num));})
}
histogram([2,3,5],"#")