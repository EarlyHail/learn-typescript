//TypeScript가 return type을 추론해서 알려줌
const sumNumberWithoutReturnType = (a: number, b: number) => {
  return a + b;
};
const sumNumber = (a: number, b: number): number => {
  return a + b;
};
sumNumber(10, 20);
// sumNumber(10, "20");
