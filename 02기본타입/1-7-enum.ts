
{
    /**
     * Enum 여러가지 상수를 정의 할 때사용
     *  - 한 번 정의하면 바뀌지 않는 값!
     *  - MAX_NUM //같이 대문자로 사용
     *  - 가능한 사용하지 말라고 하네여.... -> 정확한 타입이 보장 되지 않아요
     *  - Union Type으로도 대체가 가능해요
     */

   

    enum Days{
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }
    console.log(Days)
    let day:Days = Days.Saturday;
    day = 100 // 이렇게 사용해도 컴파일 에러가 나지 않아요!!!.. 아 이런 

    //타입을 보장 받아서 사용하려면 Union타입을! 사용해요
    type DaysOfWeek = "Monday"| "Tuesday"|"Wednesday"|"Thursday"|"Friday"|"Saturday"|"Sunday";
    let dayWeek:DaysOfWeek = "Saturday"
}