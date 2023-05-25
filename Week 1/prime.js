function prime(n){
    if(n <2) return false;
    // if(n === 2) return true;
    for(let i = 2; i<=Math.sqrt(n); i++){
        if(n%i === 0) return false;
    }
    return true;
}
console.log(prime(1));
console.log(prime(5));
console.log(prime(4));