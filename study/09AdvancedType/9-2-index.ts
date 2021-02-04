{/**
 * type -> transform -> new type
 */

 /**
  * index type
  * key의 타입을 그대로 재사용할 수 있다.
  */
const obj = {
    name:'gi'
}
console.log(obj.name)
console.log( obj['name'])

type Animal = {
    name:string;
    age:number;
    gender: 'male' | 'female'
}
type Name = Animal['name'];
const text : Name = "hello";

type Gender = Animal['gender'];

type Keys = keyof Animal;

const key: Keys = 'age'


type Person = {
    name:string;
    gender: Animal['gender']
}
const person : Person ={
    name:'gi',
    gender:'female'
}

}

/**
 *Map 
 *
 */