let str = "hello world";
let vowels = ['a','e','i','o','u'];
let result=""
let flag;
for(let i =0;i<str.length;i++){
    const char = str.charAt(i);
    if(!vowels.includes(char)){
        result +=char
    }
}
console.log(result);