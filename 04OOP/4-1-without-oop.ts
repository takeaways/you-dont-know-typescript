{

    type CoffeeCup = {
        shots:number;
        hasMilke:boolean;
    }

    const BEAN_GRAM_PER_SHOT = 7
    let coffeeBeans = 200;

    function makeCoffee(shots:number):CoffeeCup{
        const totalGram = shots * BEAN_GRAM_PER_SHOT
        if(coffeeBeans < totalGram){
            throw new Error('Not enough coffee beans!!');
        }
        coffeeBeans -= totalGram;
        return {
            shots,
            hasMilke:false
        }
    }

    const coffee = makeCoffee(2);
    console.log(coffee)

}