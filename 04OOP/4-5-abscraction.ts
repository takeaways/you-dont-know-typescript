{

    /**
     * 1. private을 이용하여 정말 사용할 함수만 노출 하는 추상화
     * 2. interface를 활용한 추상화
     * 
     */
    type CoffeeCup = {
        shots:number;
        hasMilke:boolean;
    }


    interface CoffeeMaker{
        makeCoffee(shots:number):CoffeeCup;
    }


    class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAM_PER_SHOT = 7; 
        private coffeeBeans:number; 

        private constructor(coffeeBeans:number){
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans:number):CoffeeMachine{
            return new CoffeeMachine(coffeeBeans)
        }

        private grindBeas(shots:number){
            console.log(`grind beans ${shots}`)
               const totalGram = shots * CoffeeMachine.BEANS_GRAM_PER_SHOT
            if(this.coffeeBeans < totalGram){
                throw new Error('Not enough coffee beans!!');
            }
            this.coffeeBeans -= totalGram;
        }
        private preheat():void{
            console.log('heating ..... ')
        }
        private extract(shots:number):CoffeeCup{
            console.log(`Pulling ${shots}`);
            return {
                shots,
                hasMilke:false
            }
        }

        makeCoffee(shots:number):CoffeeCup{
            this.grindBeas(shots);
            this.preheat();
            return this.extract(shots);
        }

        fillCoffeeBeanse(beans:number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans = beans
        }
    }

    const machine:CoffeeMachine =  CoffeeMachine.makeMachine(15)
    machine.makeCoffee(2)
    machine.fillCoffeeBeanse(100)
    machine.makeCoffee(10)

    const machine2:CoffeeMaker =  CoffeeMachine.makeMachine(15)
    machine2.makeCoffee(2)
    // machine2.fillCoffeeBeanse(100)
    machine2.makeCoffee(10)


}

