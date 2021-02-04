{

    type CoffeeCup = {
        shots:number;
        hasMilke?:boolean;
        sugar?:boolean;
    }

    interface CoffeeMaker{
        makeCoffee(shots:number, sugar?:number):CoffeeCup;
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

    class SweetCoffeeMachine extends CoffeeMachine{
        makeCoffee(shots:number, sugar?:number):CoffeeCup{
            const coffee = super.makeCoffee(shots);
            const su = sugar ? sugar >0 : false;
            return {
                ...coffee,
                sugar:su,
                hasMilke:false,

            }
        }
    }

    const machine:CoffeeMachine =  CoffeeMachine.makeMachine(24)
    const latteMachine = new CafeLatteMachine(24,'2222')
    // console.log(latteMachine.serialNumber)
    const mylatte = latteMachine.makeCoffee(2)
    // console.log(mylatte)

    const sweetMachine = new SweetCoffeeMachine(30);
    const sweetCoffe = sweetMachine.makeCoffee(2,3);
    // console.log(sweetCoffe)


    const machines = [
        new CoffeeMachine(50),
        new CafeLatteMachine(50, '222'),
        new SweetCoffeeMachine(50)
    ]

    machines.forEach(m => {
        if(m instanceof SweetCoffeeMachine){
            console.log(m.makeCoffee(3,2))

        }else{

            console.log(m.makeCoffee(3))
        }
    })
}

