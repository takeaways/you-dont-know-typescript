{

    /**
     * 
     * 
     * 
     */

    type CoffeeCup = {
        shots:number;
        hasMilke:boolean;
    }

    class CoffeeMachine{
        private static BEANS_GRAM_PER_SHOT = 7; 
        private coffeeBeans:number; 

        private constructor(coffeeBeans:number){
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans:number):CoffeeMachine{
            return new CoffeeMachine(coffeeBeans)
        }

        grindBeas(shots:number){
            console.log(`grind beans ${shots}`)
               const totalGram = shots * CoffeeMachine.BEANS_GRAM_PER_SHOT
            if(this.coffeeBeans < totalGram){
                throw new Error('Not enough coffee beans!!');
            }
            this.coffeeBeans -= totalGram;
        }
        preheat():void{
            console.log('heating ..... ')
        }
        extract(shots:number):CoffeeCup{
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

    const machine =  CoffeeMachine.makeMachine(15)
    machine.makeCoffee(2)
    machine.fillCoffeeBeanse(100)
    machine.makeCoffee(10)



}