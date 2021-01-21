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