const sum = (a: number, b: number) => {
  return a + b;
};
function sumFunc(a: number, b: number){
  return a + b;
};
sum(10, 20);

const sumWithRet = (a: number, b: number): number => {
  return a + b;
};
function sumFuncWithRet(a: number, b: number):number {
  return a + b;
};
sumWithRet(10, 20);

//sumWithRet(10, 20, 30);
//에러 발생, param은 2개인데 3개 넣음

// 함수의 Optional Param
const log = (a: string, b?: string) => {
  //do something
};
log("Hello World");
log("Hello TypeScript", "EarlyHail");
