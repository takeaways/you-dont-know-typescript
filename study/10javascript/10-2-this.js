/**
 * this가 미친 이유
 * 다른 언어에서는 this는 자기 자신을 나타냄 그러나!!
 * 
 * javascript에선 누가 부르냐에 따라서 달라진다(지니 같아요 부른 사람이 주인이 된다)
 * 동적 변경이 가능하다.
 * 
 * 
 */
console.log(this)
function simpleFunc(){
    console.log(this)
}
simpleFunc();

class Counter{
    count = 0;
    increase = function(){
        console.log(this)
    }
}

const counter = new Counter();
counter.increase()

//func어드 어느 객체도 가르키고 있지 않기 때문에 undefined
const func = counter.increase;
func()

/**
 * const 
 * let 은 window에 등록 되지 않아요
 */