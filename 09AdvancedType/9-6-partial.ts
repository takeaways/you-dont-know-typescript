{
    type ToDo = {
        title:string;
        description:string;
        label:string;
        priority: 'high' | 'low'
    }


    //부분 요소의 타입만 허용한다로 사용되는 경우
    function updateTodo(todo:ToDo, fieldsToUpdate:Partial<ToDo>):ToDo{
        return {...todo, ...fieldsToUpdate}
    }   

    const todo: ToDo = {
        title:'toto',
        description:'des',
        label:'sss',
        priority:'high'
    }

    updateTodo(todo, {priority:'low'})
}