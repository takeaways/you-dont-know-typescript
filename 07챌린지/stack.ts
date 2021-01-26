//단일 연결 리스트
{
interface Stack<T>{
    readonly size:number;
    push(value:T):void;
    pop():T
}

type StackNode<T>= {
    readonly value:T;
    readonly next?:StackNode<T>;
}

class StackImpl<T> implements Stack<T>{
    private _size:number = 0;
     head?:StackNode<T>;
    get size(){
        return this._size;
    }

    push(value:T){
        const node:StackNode<T> = {
            value,
            next: this.head
        }
        this.head = node;
        this._size++;
    }

    pop():T{
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

const stack = new StackImpl<string>();
stack.push("hi1")
stack.push("hi2")
stack.push("hi3")
stack.push("hi4");
console.log(stack.head)
// while(stack.size !==0){
//     console.log(stack.pop())
// }
}