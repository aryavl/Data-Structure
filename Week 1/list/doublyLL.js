class Node{
    constructor(data){
        this.data= data;
        this.prev=null;
        this.next=null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head= null;
        this.tail=null;
        this.size=0;
    }
    prepend(data){
        const node = new Node(data);
        if(!this.head){
            this.head = node;
            this.tail= node;
        }else{
            node.next=this.head;
            this.head.prev=node;
            this.head= node;
        }
    }
    append(data){
        const node = new Node(data);
        if(!this.head){
            this.head=node;
            this.tail=node;
        }else{
            node.prev=this.tail;
            this.tail.next=node;
            this.tail=node;
        }
    }
    removeFirst(){
        if(this.size === 0){
            return -1;
        }
        if(this.size === 1){
            this.head= null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.size --;
        }
    }
    removeLast(){
        if(this.size ===0){
            return -1;
        }
        if(this.size === 1){
            this.head = null;
            this.tail= null;
        }else{
            this.tail=this.tail.prev;
            this.tail.next=null;
        }
        this.size--;
    }
    removeAt(index){
        let current = this.head;
        if(index <0 || index > this.size){
            return
        }
        let count =0;
        while(count < index){
            count++;
            current = current.next;
        }
        if(current === this.head){
            this.head = this.head.next;
        }else if(current === this.tail){
            this.tail= current.prev;
            this.tail.next = null;
        }else{
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        this.size --;
    }
    removeAtValue(value){
        let current = this.head;
        while(current){
            if(current.data===value){
                if(current === this.head){
                    this.head= current.next;
                }else if(current === this.tail){
                    this.tail= current.prev;
                    this.tail.next= null;
                }else{
                    current.prev.next=current.next;
                    current.next.prev=current.prev;
                }
                this.size --;
            }
            current = current.next;
        }
    }
    searchAt(index){
        let current=this.head;
        let count =0;
        while(current){
            if(count === index){
                console.log("data is ",current.data) ;
            }
                count ++;
                current = current.next;
            
        }
        return -1
    }
    searchAtValue(value){
        if(this.size === 0){
            return -1;
        }
        let count =0;
        let current = this.head;
        while(current){
            if(current.data === value){
                return count;
            }
            current = current.next;
            count ++
        }
        return -1;
    }
    reverse(){
        let current = this.head;
        let temp = null;
        while(current){
            temp= current.prev;
            current.prev=current.next;
            current.next = temp;
            current=current.prev;
        }
        temp=this.head;
        this.head = this.tail;
        this.tail=temp;
    }
    print(){
        let current = this.head;
        let output="";
        while(current){
            output+=current.data + " ";
            current = current.next;
        }
        console.log(output);
    }
}

const dd = new DoublyLinkedList();
dd.prepend(5)
dd.prepend(0)
dd.append(10)
dd.append(15)
dd.append(10)
dd.append(25)
dd.print()
// dd.removeFirst()
// dd.removeLast()
// dd.removeAt(1)
dd.removeAtValue(10)
dd.print()
dd.reverse()
dd.print()
dd.searchAt(1);
console.log("index is ",dd.searchAtValue(10));