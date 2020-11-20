interface User {
  age:number;
  name:string;
}

const me: User = {
  age:25,
  name:"EarlyHail"
}

const getUser = (user: User) => {
  console.log(user);
}
const userObj = {
  name: "hello",
  age: 15
}
getUser(userObj);

interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = (a: number, b: number): number=> {
  return a + b;
}

interface StringArray {
  [index:number]: string;
}
const arr: StringArray = ["a", "b", "c"];
// arr[0] = 10;
arr[0] = "10";

interface StringRegexDictionary{
  [key: string]: RegExp
}
const regexDic: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css/,
  jsFile: /\.js/ 
}
// regexDic["cssFile"] = 'a'
regexDic["htmlFile"] = /\.html/;

Object.keys(regexDic).forEach((value) => {

})

interface Person {
  name: string;
  age: number;
}

interface Developer extends Person{
  language: string;
}

const earlyHail: Developer = {
  name: "EarlyHail",
  age: 25,
  language: "TypeScript"
}

