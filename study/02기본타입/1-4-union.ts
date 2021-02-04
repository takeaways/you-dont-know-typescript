{
    /**
     * Union Type: OR
     * 
     */

     type Direction = 'left' | 'right' | 'up' | 'down'; //가능 한 것중 딱! 하나

    function move(direction:Direction){
        console.log(direction);
    }

    move('left');
    move('right');
    move('up');
    move('down');

    type TileSize = 8 | 16 | 32;
    const tile1:TileSize = 8;
    const tile2:TileSize = 16;
    const tile3:TileSize = 32;
    // const tile4:TileSize = 59 사용할 수 없습니다.

    //function: login -> success, fail

    type SuccessState  = {
        response:{
            body:string;
        }
    }
    type FailStateState = {
        reason:string;
    }

    type LoginState = SuccessState | FailStateState

    async function login1(): Promise<LoginState>{
        return {
            response:{
                body:'hello'
            }
        }
    }
    
    // printLoginState(state)
    // success -> 🔱 body
    // fali -> ❓

    //💩
    function printState1(state:LoginState){
        if('response' in state){
            console.log('🔱', state.response.body)
        }else {
            console.log(state.reason)
        }
    }

    

}