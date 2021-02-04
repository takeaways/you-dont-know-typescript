{
    /**
     *  Type Inference 타입추론!
     * 
     */
    let text = 'hello'; // text는 string type이 되어요!
    function print(message= 'hello world'){
        console.log(message)
    }

    print("world")
    print(text)


    //함수는 명확한게 좋아서 꼭 리턴 값을 작성합시다.
    function add(x:number, y:number):number{
        return x+y
    }
    add(10,20);
}