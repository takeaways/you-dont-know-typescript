{
    type ToDo = {
        title:string;
        description:string;
    }

    type Readonly<T> = {
        readonly [P in keyof T]?: T[P]
    }

    function display(todo:Readonly<ToDo>){
        todo.description
    }

    //utility type -> 웹만한 타입이 다 만들어져 있어요
}