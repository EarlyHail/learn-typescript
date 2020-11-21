const logMessage = (value: string) => {
  console.log(value);
}
logMessage('hello');
// logMessage(10);
// 에러


const logMultiMessage = (value: string | number) => {
  if(typeof value === 'number'){
    value.toLocaleString()
    // do something when value's type is number
  }
  if(typeof value == 'string'){
    value.toString()
  }
}
logMultiMessage('hello')
logMultiMessage(10);

let earlyhail: string | number | boolean;

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

const askSomeone = (someone: Developer | Person) => {
  someone.name
  // someone.skill
  // someone.age
  // if(typeof someone === "Developer"){}
}
askSomeone({name: 'developer', skill: '웹 개발'})
askSomeone({name: 'developer', age: 5})

const askSomeoneIntersection = (someone: Developer & Person) => {
  someone.name
  someone.skill
  someone.age
}
// askSomeoneIntersection({name: 'developer', skill: '웹 개발'})
// askSomeoneIntersection({name: 'developer', age: 5})
askSomeoneIntersection({name: 'developer', skill: '웹 개발', age: 5})
