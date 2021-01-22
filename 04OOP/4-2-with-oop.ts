{

    type CoffeeCup = {
        shots:number;
        hasMilke:boolean;
    }

    class CoffeeMachine{
        static BEANS_GRAM_PER_SHOT = 7; // class level -> 인스턴스 마다 생성되지 않아요
        coffeeBeans:number; // instance (object) level 

        constructor(coffeeBeans:number){
            this.coffeeBeans = coffeeBeans;
        }

        makeCoffee(shots:number):CoffeeCup{
            const totalGram = shots * CoffeeMachine.BEANS_GRAM_PER_SHOT
            if(this.coffeeBeans < totalGram){
                throw new Error('Not enough coffee beans!!');
            }
            this.coffeeBeans -= totalGram;
            return {
                shots,
                hasMilke:false
            }
        }
    }

    const machine = new CoffeeMachine(100)
    const machine2 = new CoffeeMachine(100)
    const result = machine.makeCoffee(2)
    console.log(result)
    console.log()
    console.log(machine)
    console.log(machine2)
}