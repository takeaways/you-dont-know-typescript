{
    /**
     * 모든것을 다 합하는 성격을 가져요! 
     * Intersection Types: &
     * 
     */

     type Student = {
         name:string;
         score:number;
     }
     type Worker = {
         employeeId:number;
         work:()=>void
     }

     function internWork(person:Student & Worker){
         console.log(person.name)
         console.log(person.score)
         console.log(person.employeeId)
         person.work()
     }

     internWork({
         name:'gi',
         score:10,
         employeeId:10004,
         work:()=>{
             console.log(`I'm working`)
         }
     })


}