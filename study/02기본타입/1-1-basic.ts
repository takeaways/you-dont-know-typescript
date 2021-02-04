{
/**
 * Javascript
 * Primitive: number, string, boolean, bigint, symbol, null, undefined
 * Reference: function, array.. 많은 것을 담을 수 있는 타입
 */

const num:number = 10;
const str:string = 'hello'
const bool:boolean = false

//undefined - 값이 있는지 없는지 정해지지 않음 💩
let person: string | undefined; //많이 사용하긴 해요
//null - 값이 비워져 있다! 명확하게 
let person2: string | null;

function find():number | undefined{
    return undefined;
}


// unknown 💩 - 자바스크립트가 리턴하는 타입으 모를때...⚜️[아직 잘 모르겠어 뉘양스]
let notSure: unknown = 0; //어떤게 들어 올지 모르는 타입이 되버린다. 
notSure = 'hello' //띠로리...

// any 💩 - ⚜️[어떤거든 오키!!]
let anything: any = 0;
anything = 'hello...'

// void - 아무것도 리턴하지 않아요!!
function print(){
    console.log('hello');
    //return 마지막에 이렇게 생략 되어 있는거에요
}

// never - 리턴하지 않는 함수 🔱[리턴 하지 않음! / while(true) 무한 루프]
function throwError(message:string):never{
    throw new Error(message)
    // while(true){}
}

//object - 구체적이지 못하군.. 명확한 타입을 사용합시다 💩
let obj: object;
function acceptSomeObject(obj:object){

}
acceptSomeObject({name:'gi'})
acceptSomeObject({age:29})


}