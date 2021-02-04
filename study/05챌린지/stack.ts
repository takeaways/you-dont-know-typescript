//단일 연결 리스트

interface Stack{
    readonly size:number;
    push(value:string):void;
    pop():string
}

type StackNode = {
    readonly value:string;
    readonly next?:StackNode;
}

class StackImpl implements Stack{
    private _size:number = 0;
     head?:StackNode;
    get size(){
        return this._size;
    }

    push(value:string){
        const node:StackNode = {
            value,
            next: this.head
        }
        this.head = node;
        this._size++;
    }

    pop():string{
        // null == undefined
        if(this.head == null){
            throw new Error("Stack is empty!");
        }
        const node = this.head;
        this.head = node.next;
        this._size--
        return node.value
    }
    
}

const stack = new StackImpl();
stack.push("hi1")
stack.push("hi2")
stack.push("hi3")
stack.push("hi4");
console.log(stack.head)
// while(stack.size !==0){
//     console.log(stack.pop())
// }