let firstNumber
let secondNumber
let currentOperator
let currentProblem = document.querySelector(".current-problem");
let answer = document.querySelector(".answer")
let operators

const createProblem = () => {
  operators = ["+", "-", "x"]
  firstNumber = Math.round(Math.random()*12);
  secondNumber = Math.round(Math.random()*12);
  currentOperator = operators[Math.round(Math.random()*2)]
  if (currentOperator == "-" && (secondNumber > firstNumber)) {
    while (secondNumber > firstNumber) {
      secondNumber = Math.round(Math.random()*12);
    }
  }
  currentProblem.innerHTML = `${firstNumber} ${currentOperator} ${secondNumber}`
}

const resetAnswer = () => {
  answer.value = ""
  answer.focus()
}

const submitAnswer = (e) => {
  e.preventDefault();
  if (isNaN(answer.value)) {
    alert("Please enter a valid number")
    resetAnswer();
    return
  }
  let correctAnswer
  if (currentOperator == "-") correctAnswer = firstNumber - secondNumber
  else if (currentOperator == "+") correctAnswer = firstNumber + secondNumber
  else if (currentOperator == "x") correctAnswer = firstNumber * secondNumber
  
  if (correctAnswer === parseInt(answer.value))
    alert("Correct answer!")
  else
    alert("Wrong answer")
  resetAnswer()
}

document.querySelector(".answer-form").addEventListener("submit", submitAnswer)
createProblem()