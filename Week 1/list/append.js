class Node{
    constructor(val){
        this.val=val;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size
    }
    prepend(val){
        const node = new Node(val);
        if(this.isEmpty()){
            this.head=node;
        }else{
            this.next=this.head;
            this.head=node;
        }
        this.size++;
    }
    append(val){
        const node = new Node(val);
        if(this.isEmpty){
            this.head =node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev=prev.next
            }
            prev.next = node
        }
        this.size++
    }
    insert(val,index){
        if(index <0 || index >this.size){
            return
        }if(index === 0){
            this.prepend(val)
        }else{
            const node = new Node(val);
            let prev= this.head
            for(let i=0; i<index-1; i++){
                prev= prev.next;
            }
            node.next= prev.next;
            prev.next=node;
            this.size++
        }

    }
    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        }else{
            let curr= this.head
            while(curr){
                console.log(curr.val);
                curr=curr.next
            }
        }
    }
}

const list = new LinkedList()

list.append(10)

list.append(20)
list.append(30)
list.print()
console.log(list.getSize());
list.insert(40,1);
console.log(list.getSize());
