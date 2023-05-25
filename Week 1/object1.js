const obj1={
    a:"hello",
    b:23,
    c:false
}
console.log(Object.entries(obj1));
// SET
const set= new Set([1,2,3,4]);
set.add(8)
console.log(set.has(4));
set.delete(8)
for(const item of set){
    console.log(item);
}

// map()
var map1 = new Map([
    [1 , 10], [2 , 20] ,
    [3, 30],[4, 40]
    ]);
     
map1.set('c',3)
map1.has('c')
map1.delete(4)
map1.clear()
console.log(map1.size);
for(const [key,value] of map1){
console.log(`${key} :  ${value}`);
}
