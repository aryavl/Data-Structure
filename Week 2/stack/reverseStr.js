function reverseString(str) {
    // create a stack using an array
    let stack = [];
    let currentSize=stack.length;
    let res=""
    function push(val){
        stack[currentSize] = val;
        currentSize +=1;
    }
    function pop() {
        currentSize -=1;
        // console.log(stack[currentSize]);
        res+=stack[currentSize]
        stack.length = currentSize;      
      }
  
    // push each character of the string onto the stack
    for (let i = 0; i < str.length; i++) {
      push(str[i]);
    }
  
    // pop each character off the stack and append it to a new string
   
    while (stack.length > 0) {
       pop();
    }
  
    return res;
  }
  
  // example usage
  console.log(reverseString("hello")); // "olleh"

// let data =[];
//  let currentSize = data.length;
// function push(newVal){
//     data[currentSize]=newVal
//     currentSize+=1;
// }
// function pop(){
//      lastRemovedItem = data[currentSize-1];
//     currentSize-=1;
//     data.length = currentSize;
//     console.log(lastRemovedItem);


// }
// // push(10)
// // push(20)
// // push(30)
// // push(40)
// // pop()

// function reverseStr(item){
//     for(let i=0;i<item.length;i++){
//         push(item[i])
//     }
//     for(let i = 0; i<item.length; i++){
//         item[i]=dat.pop()
        
//     }
// }

// let str= "arya"
// str=str.split("")
// reverseStr(str)
// // console.log(str);


// // for(let i=0;i<10;i++){
// //     // data.push(i);
// //     data[currentSize]=i;
// //     currentSize+=1;
// // }
//  console.log("str",data);