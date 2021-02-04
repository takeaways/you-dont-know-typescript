{
    function checkNotNull(arg: number | null):number{
        if(arg == null){
            throw new Error('not valid number!')
        }
        return arg;
    }

    const result = checkNotNull(123);

    //✨
    function checkNull<T>(arg:T | null):T{
        if(arg == null){
            throw new Error('not valid');
        }
        return arg
    }

    const num = checkNull(123);
    const bool:boolean = checkNull(true)



}