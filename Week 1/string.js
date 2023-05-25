let str ="Hello world";
let charReplace= "l";
let replaceChar= "z";

// let newStr="";

// for(let i =0; i<str.length ; i++){
//     if(str[i] === charReplace){
//         newStr += replaceChar;
//     }else{
//         newStr += str[i]
//     }
// }
// console.log(newStr);

for(let i =0;i<str.length;i++){
    if(str[i] === charReplace){
        str= str.slice(0,i) + replaceChar + str.slice(i+1);
    }
}
console.log(str);
function hash(str){
let total = 0;
for(let i=0;i<str.length;i++){
    total += str.charCodeAt(i)
}
return total % 500
}
console.log(hash(str));
const ar=[1,2,3,4,5]
let dlet = 3;
for(let i = 0; i<ar.length; i++){
  if(ar[i] === dlet){
    ar.splice(ar.indexOf(ar[i]),1)
  }
}
console.log(ar);