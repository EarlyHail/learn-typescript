enum Shoes {
  Nike = 'Nike',
  Adidas = 'Addidas'
}

const myShoes = Shoes.Nike;
console.log(myShoes); // Nike

enum Answer {
  Yes = 'Y',
  No = 'N',
}

const askQuestion = (answer: Answer) => {
  if(answer === Answer.Yes){
    console.log('정답입니다');
  }
  if(answer === Answer.No){
    console.log('오답입니다');
  }
}
askQuestion(Answer.Yes);
// askQuestion('Yes');
