function factorial(n){
    let fact=1;
    for(let i=2;i<=n;i++){
        fact *=i;
    }
    return fact
}
console.log(factorial(0));
console.log(factorial(4));
console.log(factorial(1));
console.log(factorial(5));

function fact(x){
    console.log("count");
    if(x===0) return 1;
    else return x * factorial(x-1)
}

console.log(fact(4));