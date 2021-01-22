{
    // printLoginState(state)
    // success -> 🔱 body
    // fali -> ❓
    type SuccessState  = {
        result:'success'; // !!! 이렇게 공통되는 속성에! 구별이 가능한 타입 값을 넣어 줘요!
        response:{
            body:string;
        }
    }
    type FailStateState = {
        result:'fail'; // !!! 이렇게 공통되는 속성에! 구별이 가능한 타입 값을 넣어 줘요!
        reason:string;
    }
    type LoginState = SuccessState | FailStateState
    async function login(): Promise<LoginState>{
        return {
            result:'success',
            response:{
                body:'hello'
            }
        }
    }

    function printState(state:LoginState){
        if(state.result === 'success'){
            console.log(state.response.body)
        }else{
            console.log(state.result)
        }
    }
}