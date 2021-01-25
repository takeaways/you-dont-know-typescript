{
    type CoffeeCup = {
        shots: number;
        hasMilke?: boolean;
        sugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number, sugar?: number): CoffeeCup;
    }


    interface MlikFrother{
        makeMilk(cup: CoffeeCup): CoffeeCup
    }
    interface SugarProvider{
        addSugar(cup: CoffeeCup): CoffeeCup
    }

    //우유 거품기
    class CheapMilkSteamer implements MlikFrother{
        //내부 동작
        private steamMilke(): void {
            console.log("Steaming some milk...")
        }
        //외부에서 사용
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilke();
            return {
                ...cup,
                hasMilke: true,
            }
        }
    }

    //설탕 제조기
    class AutomaticSugarMixer implements SugarProvider{
        private getSuger() { //무언가를 복잡한 로직을 수행 한다.
            console.log("Getting some sugar from candy");
            return true;
        }
        addSugar(cup: CoffeeCup): CoffeeCup { //외부에 노출 되는 메소드
            const sugar = this.getSuger();
            return {
                ...cup,
                sugar
            }
        }
    }
    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT = 7;
        private coffeeBeans: number;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans)
        }

        private grindBeas(shots: number) {
            console.log(`grind beans ${shots}`)
            const totalGram = shots * CoffeeMachine.BEANS_GRAM_PER_SHOT
            if (this.coffeeBeans < totalGram) {
                throw new Error('Not enough coffee beans!!');
            }
            this.coffeeBeans -= totalGram;
        }
        private preheat(): void {
            console.log('heating ..... ')
        }
        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots}`);
            return {
                shots,
                hasMilke: false
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeas(shots);
            this.preheat();
            return this.extract(shots);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans = beans
        }

        clean() {
            console.log('cleaning the machine....')
        }
    }

    class CafeLatteMachine extends CoffeeMachine {
        constructor(
            coffeeBeans: number,
            public readonly serialNumber: string,
            private milkFother: CheapMilkSteamer) {
            super(coffeeBeans)
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.milkFother.makeMilk(coffee)
        }

    }

    class SweetCoffeeMachine extends CoffeeMachine {

        constructor(private beans: number, private sugar: SugarProvider) {
            super(beans)
        }

        makeCoffee(shots: number, sugar?: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee)
        }
    }
    class SweetCoffeLatteMachine extends CoffeeMachine {
        //💩 커플링이 엄청 심해요!! 여기서 decoupling 하자!!
        constructor(private beans: number, private milk: MlikFrother, private sugar: SugarProvider) {
            super(beans);
        }
        makeCoffee(shots: number) {
            const coffee = super.makeCoffee(shots);
            const addSugar = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(addSugar)
        }
    }


    const cheapMilkMaker = new CheapMilkSteamer();
    const candySugar = new AutomaticSugarMixer();
    const sweetMatchine = new SweetCoffeeMachine(12, candySugar)
    const latteMachine = new CafeLatteMachine(12, 'SS', cheapMilkMaker);
    const sweetLatteMachine = new SweetCoffeLatteMachine(12, cheapMilkMaker, candySugar)






    const sweetCoffeLatteMachine = new SweetCoffeLatteMachine(100, new CheapMilkSteamer, new AutomaticSugarMixer);
    const coffee = sweetCoffeLatteMachine.makeCoffee(2);
    console.log("-->", coffee);
}


