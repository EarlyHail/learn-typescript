// @ts-check

const sum = (a, b) => {
  return a + b;
};
sum(10, 20);

/**
 * @param {number} a 첫 번째 숫자
 * @param {number} b 두 번째 숫자
 */
const sum2 = (a, b) => {
  return a + b;
};
// sum2(10, "20"); //에러가 발생하지 않는다.
// ts-check를 하면 에러를 잡아준다 (sum2)
