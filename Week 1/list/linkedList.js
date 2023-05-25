class Nodet{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
        this.tail=null;
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size;
    }
}
const list = new LinkedList();
console.log("List is empty ?",list.isEmpty());
console.log("List size ?",list.getSize());