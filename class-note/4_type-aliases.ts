interface PersonInterface {
  name: string;
  age: number;
}

const earlyhailInterface: PersonInterface = {
  name: "earlyhail",
  age: 25,
}

type PersonType = {
  name: string;
  age: number;
}

const earlyhailType: PersonType = {
  name: "earlyhail",
  age: 25,
}

type MyString = string;
const myname: MyString = "earlyhail";
