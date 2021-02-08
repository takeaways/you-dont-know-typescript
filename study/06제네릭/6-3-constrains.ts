//제네릭에 조건주기.

interface Employee{
    pay():void;
}

class FullTimeEmployee implements Employee{
  pay(){
    console.log('full time!');
  }
  workFullTime(){

  }
}

class PartTimeEmployee implements Employee{
  pay(){
    console.log('parth time');
  }
  workPartTime(){

  }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
// function pay(employee: Employee):Employee{
//     employee.pay();
//     return employee;
// }

function pay<T extends Employee>(employee:T):T{
  employee.pay();
  return employee;
}


const gi = new FullTimeEmployee();
const bob = new PartTimeEmployee();

gi.workFullTime();
bob.workPartTime();

const giAfterPay = pay(gi);
const bobAfterPay = pay(gi);

const obj = {
  name:'gi',
  age:20
};



function getValue<T, K extends keyof T>(obj:T, key: K): T[K]{
  if(!obj[key]){
    throw new Error('Not Found Value');
  }
  return obj[key];
}


console.log(getValue(obj,'name')); //gi