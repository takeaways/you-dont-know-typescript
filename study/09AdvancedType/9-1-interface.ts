type PositionType ={
    x:number;
    y:number;
}

interface PositionInterface{
    x:number;
    y:number;
}


const o1:PositionType = {
    x:1,
    y:1
}
const o2:PositionInterface = {
    x:1,
    y:1,
    z:1
}

//class 
class Pos1 implements PositionType{
    x:number
    y:number
}
class Pos2 implements PositionInterface{
    x:number;
    y:number;
    z:number;
}

// Extends
interface ZPositionInterface extends PositionInterface{
    z:number;
}
type ZPostionType = PositionType & {z:number};

// only interface can be merged.
interface PositionInterface{
    z:number;
}



//Type aliases can use computed properties
type Person = {
    name:string;
    age:number;
}

type Name = Person['name']

type NumberType = number;
type Direction = 'left' | 'right'


/**
 * interace
 * 규격사항이다 -> 규격을 통한 기능이 구현된다면 인터페이스 사용!
 * 
 * type
 * 데이터를 담을때 데이터의 모습을 담당
 * 
 * 
 */