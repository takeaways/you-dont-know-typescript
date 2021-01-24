{

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

        constructor(coffeeBeans:number){
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

        fillCoffeeBeans(beans:number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans = beans
        }

        clean(){
            console.log( 'cleaning the machine....')
        }
    }

    class CafeLatteMachine extends CoffeeMachine{
        constructor(coffeeBeans:number,public readonly serialNumber:string){
            super(coffeeBeans)
        }
        private seamMilk():void{
            console.log("Steming some milk...")
        }
        makeCoffee(shots:number):CoffeeCup{
            const coffee = super.makeCoffee(shots); 
            this.seamMilk();
            return {   
                ...coffee,
                hasMilke:true
            }
        }
    }

    const machine:CoffeeMachine =  CoffeeMachine.makeMachine(24)
    const latteMachine = new CafeLatteMachine(24,'2222')
    const mylatte = latteMachine.makeCoffee(2)
    console.log(mylatte)



    
}

