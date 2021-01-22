{
    //Javascript 💩
    function jsAdd(num1, num2){
        //code...
        //code...
        //code...
        return num1 + num2
    }

    //Typescript ✨
    function tsAdd(num1:number, num2:number):number{
        return num1 + num2
    }
    //--------------------------------------------//

    //💩
    function jsFetchNum(id){
        return Promise.resolve(100)
    }
    
    function tsFetchNum(id:string):Promise<number>{
        return Promise.resolve(100)
    }

}

{
    // Javascript => Typescript
    //Optional Parameter `?` 전달 해도 되고 안해도 되는 타입
    function printName(firstName:string, lastName?:string){
        console.log(firstName);
        console.log(lastName);
    }

    printName('gi','j');

    //Default parameter
    function printMessage(message:string = "Hello"){
        console.log(message)
    }
    printMessage() //Hello





}