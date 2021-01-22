{
    /**
     * typealias란?
     * 
     * 새로운 타입을 내가 정의할 수 있다.
     * 
     */

    type Text = string;
    const name: Text = 'Geonil';
    const address: Text = 'Kr';

    type Num = number;
    type Student = {
        name: string
        age: number
        address: string
    }

    const student1: Student = {
        name:'Gi',
        age:12,
        address:'Kr'
    }
    console.log(student1)

    /**
     * String Literal Types
     */
    type Name = 'name';
    let giName:Name;
    // giName = 'hello'; 사용할 수 없어요
    giName = 'name'


}