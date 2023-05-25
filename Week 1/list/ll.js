// const n1={
//     data:"100"
// }
// const n2={
//     data:"200"
// }
// n1.next=n2
// console.log(n1);

class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=1;
    }
    // Insert first node
    insertFirst(data){
        let temp = this.head;
       this.head=new Node(data);
       this.head.next=temp;
       this.size++
    //    this.head=new Node(data,this.head)
    //    this.size++;
       
    }

    // insert last node
    inserLast(data){
        const node = new Node(data)
        if(!this.head){
            this.head=node;
        }else{
            let current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
            
        }
        this.size++
    }
    // insert at index
    insertAt(data,index){
        // if index is out of range
        if(index <0 && index >this.size){
            return
        }
        if(index ===0){
            this.head = new Node(data,this.head);
            return
        }
        const node = new Node(data)
        let current, previous;
        current=this.head;
        let count =0;
        while(count < index){
            previous = current; //node before index
            count++;
            current=current.next;
        }
        node.next=current;
        previous.next=node;
        this.size++
    }
    // get at index
    getAt(index){
        let current = this.head;
        let count = 0;
        while(current){
            if(count === index){
                console.log("data is ",current.data);
            }
            count++
            current=current.next;
        }
        console.log('out of index');
    }
    // remove at first
    removeFirst(){
        if(this.size === 0){
            return null;
        }
        if(this.size ===1){
            this.head= null;
        }else{
            this.head= this.head.next;
        }
        this.size--;
    }
   
    // clear list 
    clearList(){
        this.head=null;
        this.size=0;
    }
    // print list data
    print(){
        let current = this.head
        while(current){
            console.log(current.data);
            current=current.next
        }
    }
    middle(){
        let slow = this.head;
        let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow.data
  }
    
    search(val){
        let current= this.head;
        while(current.next){
            if(current.data === val){
              return true
            }
            current = current.next;
        }
        return false;
    }
    removeLast(){
        if(this.size ===0){
            return null;
        }
        if(this.size === 1){
            this.header = null;
        }else{
            let current = this.header;
            while(current){
                current= current.next;
            }
            current=null;
            this.size --
        }
    }
     // remove at index
    removeAt(index){
        let current = this.head;
        let previous;
        let count = 0;
        if(index <0 || index > this.size) return
        if(index === 0){
            this.head= this.head.next;
        }else{
        
        while(count < index){
            count++;
            previous = current;
            current= current.next;
        }
        previous.next=current.next;
    }
    this.size--;
}
// remove by vqlue
removeAtValue(val){
    let current = this.head;
    if(current.data === val){
        this.head= current.next;
    }else{
        let prev=current;
        while(prev.next && prev.next.data !==val){
            prev = prev.next;
        }
        if(prev.next){
            let current = prev.next;
            prev.next=current.next;
            this.size--
            return val
        }
        return null;
    }
}
removeLeft(value){
    let current = this.head.next;
    let prev= this.head;
    while(current){
        if(current.value === value){
            prev.next=current.next;
            prev= prev.next;
        }
        current= current.next;
        prev=prev.next;
    }
}
findValue(val){
    if(this.size === 0){
        return -1;
    }
    let count=1;
    if(this.head.data === val){
        return count
    }
    let current= this.head;
    while(current){
        if(current.data===val){
            return count
        }
        current=current.next;
        count++
    }
    return -1
}

reverse(){
    let previous= null;
    let current = this.he0ad;
    while(current){
         let next=current.next;
        current.next = previous;
        previous=current;
        current= next;
    }
    this.head= previous;
}
}

const ll = new LinkedList()
console.log(ll);
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(500);
ll.insertFirst(600);

 console.log("middle",ll.middle());
//  ll.insertAt(10,2)
//  ll.getAt(4) // it start at 1
// ll.removeAtValue(200)
//  console.log("search",ll.search(400));
//  ll.removeFirst()
//  ll.removeLast()
//   ll.removeAt(3)
//   ll.removeAtValue(500)
//   ll.clearList()
// console.log( "index is ",ll.findValue(500));
// console.log("original LL");
// ll.print()
// ll.reverse()
// console.log("reversed LL");
ll.removeLeft(300)
ll.print()
// console.log(ll);