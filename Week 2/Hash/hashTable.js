// class HashTable {
//     constructor() {
//       this.size = 7; // prime number for better distribution
//       this.keys = new Array(this.size);
//       this.values = new Array(this.size);
//     }
  
//     hash(key) {
//       let hash = 0;
//       for (let i = 0; i < key.length; i++) {
//         hash = (hash + key.charCodeAt(i) * i) % this.size;
//       }
//       return hash;
//     }
  
//     put(key, value) {
//       let index = this.hash(key);
//       while (this.keys[index] !== undefined) {
//         if (this.keys[index] === key) {
//           this.values[index] = value;
//           return;
//         }
//         index = (index + 1) % this.size; // move to the next index
//       }
//       this.keys[index] = key;
//       this.values[index] = value;
//     }
  
//     get(key) {
//       let index = this.hash(key);
//       while (this.keys[index] !== undefined) {
//         if (this.keys[index] === key) {
//           return this.values[index];
//         }
//         index = (index + 1) % this.size; // move to the next index
//       }
//       return undefined;
//     }
    
//     remove(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let sameKeyItem = bucket.find(items => items[0] === key)
//             if(sameKeyItem){
//                 bucket.splice(bucket.indexOf(sameKeyItem),1)
//             }
//             else{
//                 return null
//             }
//         }
//     }

//     display() {
//         const obj={}
//         for(let i =0;i<this.keys.length; i++){
//             obj[this.keys[i]]=this.values[i]
//         }
//         // console.log(obj);
//         this.values.forEach(item=>console.log(item))
        
//     }


// }
//   const table = new HashTable(7);
//   table.put("name", "Bruce");
//   table.put("age", 25);
//   table.put("name", "Clark");
//   table.put("name", "Diana");
 
//   //table.remove("name");
//   table.display();
// // class HashTable{
// //     constructor(size){
// //         this.table = new Array(size);
// //         this.size = size;
// //     }
// //     hash(key){
// //         let total=0;
// //         for(let i=0;i<key.length;i++){
// //             total += key.charCodeAt(i)
// //         }
// //         return total % this.size;
// //     }
// //     set(key,value){
// //         let index = this.hash(key);
// //         // this.table[index] = value;
// //         let bucket = this.table[index];
// //         if(!bucket){
// //             this.table[index] = [[key,value]]
// //         }else{
// //             let sameKeyItem = bucket.find(item => item[0]=== key)
// //             if(sameKeyItem){
// //                 sameKeyItem[1] = value;
// //             }else{
// //                 bucket.push([key,value])
// //             }
// //         }
// //     }
// //     get(key){
// //         let index= this.hash(key)
// //         // return this.table[index]
// //        let bucket = this.table[index];
// //        if(bucket){
// //         const sameKeyItem = bucket.find(item=> item[0]===key)
// //         if(sameKeyItem){
// //             return sameKeyItem[1];
// //         }
// //        }
// //        return null
// //     }
// //     remove(key){
// //         let index = this.hash(key)
// //         // this.table[index] = undefined;
// //         const bucket=this.table[index];
// //         if(bucket){
// //             const sameKeyItem = bucket.find(item=>item[0] === key)
// //             if(sameKeyItem){
// //                 bucket.splice(bucket.indexOf(sameKeyItem),1)
// //             }
// //         }
// //     }
    
// //     display(){
// //         for(let i=0; i<this.table.length; i++){
// //             if(this.table[i]){
// //                 console.log(i,this.table[i]);
// //             }
// //         }
// //     }
// // }

// // const table = new HashTable(50)
// // table.set("name","Arya");
// // table.set("age",25)
// // table.set("name","veena")
// // table.display()



// // function itemInCommon(arr1, arr2) {

// //     let obj = {}

// //     for (let i = 0; i < arr1.length; i++) {
// //         obj[arr1[i]] = true
// //     }

// //     console.log(obj);
// //     for (let i = 0; i < arr2.length; i++) {
// //         if (obj[arr2[i]]) console.log(obj[arr2[i]]); 
// //     }
// //     // console.log(obj);

// //     return false
// // }

// // const arr1 = [10, 20, 30]
// // const arr2 = [4, 5, 30]

// // console.log(itemInCommon(arr1, arr2));

class HashTable {
    constructor(size ) {
      this.size = size;
      this.keys = new Array(size);
      this.values = new Array(size);
    }
  
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
          hash += key.charCodeAt(i);
        }
        return hash % this.size;
      }
    
  
    // put(key, value) {
    //   let index = this.hash(key);
    //   while (this.keys[index] !== undefined && this.keys[index] !== key) {
    //     index = (index + 1) % this.size;
    //   }
    //   this.keys[index] = key;
    //   this.values[index] = value;
    // }
    put(key, value) {
        let index = this.hash(key);
        while (this.keys[index] !== undefined) {
          if (this.keys[index] === key) {
            // If key already exists, store value in array
            if (Array.isArray(this.values[index])) {
              this.values[index].push(value);
            } else {
              this.values[index] = [this.values[index], value];
            }
            return;
          }
          index = (index + 1) % this.size;
        }
        this.keys[index] = key;
        this.values[index] = value;
      }
      
  
    get(key) {
      let index = this.hash(key);
      while (this.keys[index] !== undefined) {
        if (this.keys[index] === key) {
          return this.values[index];
        }
        index = (index + 1) % this.size;
      }
      return undefined;
    }
  
    delete(key) {
      let index = this.hash(key);
      while (this.keys[index] !== undefined) {
        if (this.keys[index] === key) {
          this.keys[index] = undefined;
          this.values[index] = undefined;
          return true;
        }
        index = (index + 1) % this.size;
      }
      return false;
    }
  
    print() {
      for (let i = 0; i < this.size; i++) {
        if (this.keys[i] !== undefined) {
          console.log(`${this.keys[i]}: ${this.values[i]}`);
        }
      }
    }
  }
  const table = new HashTable(50)
table.put("name","Arya");
table.put("age",25)
table.put("name","Veena")
table.put("age",24)
table.print()