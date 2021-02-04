{
    /**
     * Proto-based oop 가능
     * Inheritance를 위한 Prototype
     * a tyled of OOp
     *  - behavior reuse
     */
    const x = {}
    const y = {}
    // console.log(x)
    // console.log(y)
    // console.log(y.__proto__)

    function CoffeeMachine(beans){
        this.beans = beans;
        // this.makeCoffee = shots => {
        //     console.log('making..')
        // }
    }
  

    CoffeeMachine.prototype.makeCoffee = (shots) => {
        console.log('prototype lebel make')
    }

    const machine = new CoffeeMachine(10)
    const machine1 = new CoffeeMachine(10)
    console.log(machine)
    console.log(machine1)

    function LatteMachine(milk){
        this.milk = milk;
    }

    LatteMachine.prototype = Object.create(CoffeeMachine.prototype)
    const latteMachine = new LatteMachine(123);
    console.log(latteMachine)

}