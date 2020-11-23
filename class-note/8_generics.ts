function logText(text) {
  return text;
}
logText(10);
logText("Hi");
logText(true);

function logTextUnion(text: string | number) {
  // Text는 string이나 number가 모두 가지고 있는 함수에만 접근 가능함.
  return text;
}
const maybeString = logTextUnion("abcd");
// maybeString.split(" ");

function logTextGeneric<T>(text: T): T {
  return text;
}

logTextGeneric(10);
const a: string = logTextGeneric<string>("Hi");
logTextGeneric("Hi");
logTextGeneric(true);

interface Dropdown {
  value: string;
  selected: boolean;
}

const obj: Dropdown = {
  value: "abcd",
  selected: false,
};

interface DropdownGeneric<T> {
  value: T;
  selected: boolean;
}

const objGeneric: DropdownGeneric<string> = {
  value: "abc",
  selected: false,
};

function logTextLength<T>(text: T[]): T[] {
  const length: number = text.length;
  return text;
}
logTextLength<string>(["hi", "bye"]);

interface LengthType {
  length: number;
}
function logTextLengthLimited<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLengthLimited("abcdef");
logTextLengthLimited({ length: 10 });

interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>("a");
getShoppingItemOption("name");
