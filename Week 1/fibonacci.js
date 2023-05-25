function fib(n){
    const fibSeries=[0,1];
    for(let i=2; i<n; i++){
        fibSeries[i] = fibSeries[i-1]+fibSeries[i-2];
    }
    return fibSeries
}
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));

function recursiveFib(n){
    if(n<2){
        return n
    }
    return recursiveFib(n-1) + recursiveFib(n-2);
}
console.log(recursiveFib);