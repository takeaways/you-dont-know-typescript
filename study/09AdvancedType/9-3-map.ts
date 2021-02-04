{
    type Video = {
        title:string;
        author:string;
    }

    type Optional<T> = {
        [P in keyof T]?:T[P] // for...in과 동일
    }

    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P]
    }

    

    type VideoOptional = Optional<Video>
    

    // type VideoOptional = {
    //     title?:string;
    //     author?:string;
    // }

    // type VideoReadOnly = {
    //     readonly title:string;
    //     readonly author:string;
    // }


    type Animal = {
        name:string;
        age:number;
    }
    const animal: Optional<Animal> = {
        age:1
    }

    const video:ReadOnly<Video> = {
        title:'d',
        author:'e'
    }
    // video.author = 'd'
}


{

    type Video = {
        title:string;
        author:string;
    }

    type Nullabled<T> = {[P in keyof T]: T[P] | null}
    const obj2:Nullabled<Video> = {
        title:null,
        author:'s'
    }


}