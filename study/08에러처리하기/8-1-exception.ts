// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000000000);

// Error(Exception) Handling: try -> catch -> finally

// function readFile(fileName: string): string {
//   if (fileName === 'not exist!💩') {
//     throw new Error(`file not exist! ${fileName}`);
//   }
//   return 'file contents🗒';
// }

// function closeFile(fileName: string) {
//   //
// }
// function run() {
//   const fileName = 'not exist!💩';

//   try {
//     console.log(readFile(fileName));
//   } catch (error) {
//     console.log(`catched!!`);
//     return;
//   } finally {
//     closeFile(fileName);
//     console.log(`closed!`);
//   }
// }
// run();





// Java: Eception
// Javascript: Error 객체가 있어요
// const array = new Array(100000000000000000000000);
// console.log(array)

//Error(Exception) Handling: try -> catch -> finally 3단계로 이루어 집니다.
function readFile(fileName:string): string{
  if(fileName === 'not exist!💩'){
    throw new Error(`file not exist! ${fileName}`)
  }
  return 'file contents!';
}   

function closeFile(fileName: string){
  console.log(fileName+" closed")
}

const fileNamee = 'not exist!💩'


function run(){
  const fileName = 'file';
  try {
    //에러가 발생하는 부분만 try ~ catch를 하는게 좋습니다.
    console.log(readFile(fileNamee));
  } catch (error) {
    console.log(`catched !!`);  
    return;
  }finally{
    //항상 실행이 보장합니다.
    closeFile(fileName)
    console.log(`closed`)
  }

}

run()

