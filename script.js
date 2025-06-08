const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'How many rings on the Olympic flag ?',
    answers: [
      { text: '3', correct: false},
      { text: '4', correct: false },
      { text: '5', correct: true },
      { text: '10', correct: false }
    ]
  },
  {
    question: 'Who invented the television ?',
    answers: [
      { text: 'John Logie Baird', correct: true },
      { text: 'Thomas Edison', correct: false },
      { text: 'Kenjiro Takayanagi', correct: false },
      { text: 'Nikola Tesla', correct: false }
    ]
  },
  {
    question: 'Whose nose grew when he told a lie ?',
    answers: [
      { text: 'Mickey Mouse', correct: false },
      { text: 'Peter Pan', correct: false },
      { text: 'Puss in Boots', correct: false },
      { text: 'Pinocchio', correct: true }
    ]
  },
  {
    question: 'Who has won the most Oscars?',
    answers: [
      { text: 'Walt Disney', correct: true },
      { text: 'Russell Crowe', correct: false },
      { text: 'Denzel Washington', correct: false },
      { text: 'Adrien Brody', correct: false }
    ]
  },
  {
    question: 'Who wrote the Man in the Iron Mask?',
    answers: [
      { text: 'Jean-Paul Sartre', correct: false},
      { text: 'Jane Austen', correct: false },
      { text: 'Victor Hugo', correct: false },
      { text: 'Alexander Dumas', correct: true }
    ]
  },
  {
    question: 'Who wrote Pride and Prejudice?',
    answers: [
      { text: 'George Orwell', correct: false},
      { text: 'Jane Austen', correct: true },
      { text: 'Virginia Woolf', correct: false },
      { text: 'Albert Camus', correct: false }
    ]
  },
  {
    question: 'What is the largest state in the USA?',
    answers: [
      { text: 'Alaska', correct: true },
      { text: 'Texas', correct: false },
      { text: 'California', correct: false },
      { text: 'Arizona', correct: false }
    ]
  },
  {
    question: 'Which country do Sinologists study?',
    answers: [
      { text: 'China', correct: true },
      { text: 'Germany', correct: false },
      { text: 'United states', correct: false },
      { text: 'India', correct: false }
    ]
  },
  {
    question: 'La Giaconda is better known as what?',
    answers: [
      { text: 'The birth of venus', correct: false },
      { text: 'Mona Lisa', correct: true },
      { text: 'Guernica', correct: false },
      { text: 'The starry night', correct: false }
    ]
  },
  {
    question: 'Clyde Tonbaugh discovered what planet in 1930?',
    answers: [
      { text: 'Mars', correct: false },
      { text: 'Jupiter', correct: false },
      { text: 'Pluto', correct: true },
      { text: 'Venus', correct: false }
    ]
  },
  {
    question: 'What martial arts name means gentle way?',
    answers: [
      { text: 'Karate', correct: false },
      { text: ' Muay Thai', correct: false },
      { text: 'Judo', correct: true },
      { text: 'Aikido', correct: false }
    ]
  },
  {
    question: 'In Greek mythology who killed the Gorgon?',
    answers: [
      { text: 'Perseus', correct: true },
      { text: ' Apollo', correct: false },
      { text: 'Ares', correct: false },
      { text: 'Hermes', correct: false }
    ]
  },
  {
    question: 'In Norse mythology what is the name of the ultimate battle?',
    answers: [
      { text: 'Battle of Brávellir', correct: false },
      { text: ' Ragnarok', correct: true },
      { text: 'Fimbulwinter', correct: false },
      { text: 'Æsir–Vanir War', correct: false }
    ]
  },
  {
    question: 'What is the capitol of Morocco?',
    answers: [
      { text: 'Marrakesh', correct: false },
      { text: ' Fès-Meknès', correct: false },
      { text: ' Casablanca', correct: false },
      { text: 'Rabat', correct: true }
    ]
  },
  {
    question: 'Which countries men use the most deodorant?',
    answers: [
      { text: 'Japan', correct: true },
      { text: ' France', correct: false },
      { text: 'Sweden', correct: false },
      { text: 'United Kingdom', correct: false }
    ]
  },
]
