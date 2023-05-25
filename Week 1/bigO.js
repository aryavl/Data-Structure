// const name=["arya"];
// const everyone = ['dachu','arya','vishnu','lekshmi','veena','kukku'];
// const large= new Array(100).fill("arya");

// function findArya(array){
//     let t0= performance.now()
//     console.log(array);
//     for(let i=0; i<array.length; i++){
//         console.log("runinng");
//         if(array[i] === 'arya'){
            
//             console.log("Found Arya!");
//             break;
//         }
//     }
//     let t1=performance.now()
//     console.log("it took "+(t1-t0)+ " milliseconds" );
// }
// findArya(name) 
// findArya(everyone)
// findArya(large) // O(n) --> linear time

// const boxes = [1,2,3,4,5,6]

// function logFirstTwoBoxes(boxes){
//     console.log(boxes[0]); // O(1)
//     console.log(boxes[1]); // O(1)
// }

// logFirstTwoBoxes(boxes)  //O(2) ~ O(1) --> Constant time

 
// Rule 2 Remove constants

// function printFirstItemThenFirstHalfThenSayHi100Times(items){
//     console.log(items[0]); //o(1)

//     let middleIndex=Math.floor(items.length / 2);
//     let index = 0;

//     while(index < middleIndex){  //O(n/2)
//         console.log(items[index]);
//         index++;
//     }

//     for(let i=0;i<100;i++){
//         console.log('hi'); //O(1)
//     }
// } 

// Big -O --> O(1+n/2+1)~ O(n)

const boxes=[1,2,3,4,5];

function logAll(arr){
    for(let i =0;i<arr.length;i++){//O(n)
        for(let j=0;j<arr.length;j++){//O(n)
            console.log(arr[i]," ",arr[j]);
        }
    }
}
logAll(boxes)
// O(n * n) ~ O(n^2)