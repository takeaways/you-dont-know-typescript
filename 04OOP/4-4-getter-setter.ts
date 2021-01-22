{
       class User{
        private internalAge = 4;
        get fullName():string{
            return `${this.firstName} ${this.lastName}`
        }
        get age():number{
            return this.internalAge
        }
        set age(num:number){
            if(num < 0){
                throw new Error("??? 0")
            }
            this.internalAge = num
        }
        constructor(private firstName:string, private lastName:string){}

        
    }

    const user = new User('Steve', 'Jobs');
    user.age = 6;
    console.log(user.age)
    console.log(user.fullName)

}