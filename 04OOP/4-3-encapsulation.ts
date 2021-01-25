/**
 * public (default), private(자신만), protected(자식 까지만) 접근제한자.
 * 
 * 
 */

    type CoffeeCup = {
        shots: number;
        hasMilke: boolean
    }

    class CoffeeMachine {
        private static BEANS_GRAM_PER_SHOT = 7;
        private coffeeBeans: number;

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans)
        }

        makeCoffee(shots: number): CoffeeCup {
            const totalGram = shots * CoffeeMachine.BEANS_GRAM_PER_SHOT
            if (this.coffeeBeans < totalGram) {
                throw new Error('Not enough coffee beans!!');
            }
            this.coffeeBeans -= totalGram;
            return {
                shots,
                hasMilke: false
            }
        }

        fillCoffeeBeanse(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans = beans
        }
    }

    const machine = CoffeeMachine.makeMachine(15)
    machine.makeCoffee(2)
    machine.fillCoffeeBeanse(100)
    machine.makeCoffee(10)



