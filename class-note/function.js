const sumInJs = (a, b) => {
  return a + b;
};

/**
 * 에러가 안남,
 * 30, 40, 50이 무시되고 10+20이 리턴됨.
 */
sumInJs(10, 20, 30, 40, 50);
