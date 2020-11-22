let firstNumber
let secondNumber
let currentOperator
let currentProblem = document.querySelector(".current-problem");
let answer = document.querySelector(".answer")
let status = document.querySelector(".status")
let correctCount = 0
let incorrectRemaining = 3
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
  status.innerHTML = `You have answered <span class="correct">${correctCount}</span> out of 10 questions correctly. You are allowed <span class="incorrect">${incorrectRemaining}</span> more incorrect answers.`
}

const resetAnswer = () => {
  answer.value = ""
  answer.focus()
}

const resetCounts = () => {
  correctCount = 0;
  incorrectRemaining = 3;
}

const submitAnswer = (e) => {
  e.preventDefault();
  if (isNaN(answer.value)) {
    alert("Please enter a valid number")
    resetAnswer();
    return
  }
  let correctAnswer
  if (currentOperator == "-") 
    correctAnswer = firstNumber - secondNumber
  else if (currentOperator == "+") 
    correctAnswer = firstNumber + secondNumber
  else if (currentOperator == "x") 
    correctAnswer = firstNumber * secondNumber
  
  if (correctAnswer === parseInt(answer.value)) {
    correctCount++
  } else {
    incorrectRemaining--
  }
  if (correctCount == 10) {
    resetCounts();
    alert("Congratulations you won! Well done!")
  } else if (incorrectRemaining == 0) {
    resetCounts()
    alert("Sorry you lost. Better luck next time!")
  }
  createProblem()
  resetAnswer()
}

document.querySelector(".answer-form").addEventListener("submit", submitAnswer)
createProblem()