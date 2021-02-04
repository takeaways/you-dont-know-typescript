{
    /**
     * Type Assertions 💩
     * as를 이용한 casting 
     * ! 무조건 값이 있어
     */

    function jsStrFunction():any{
        return 'hello'
    }

    const result = jsStrFunction();
    console.log((<string>result).length) 
    console.log((result as string).length) //이렇게 되면 작성 시점에서는 error가 나지는 않아요 그러나 number를 리턴받으면??.. 💩

    const list:any = 1;
    // (list as number[]).push(100)

    function findNumbers():number[] | undefined{
        return undefined
    }

    const numbers = findNumbers();
    numbers?.push(2);


}