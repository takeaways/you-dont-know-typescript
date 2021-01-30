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
const fileName = 'file';
try {
  console.log(readFile(fileNamee));
} catch (error) {
  console.log(`catched !!`);  
}

closeFile(fileNamee)