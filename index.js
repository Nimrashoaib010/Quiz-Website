// const quizData = [
//     {
//         question: "Which language runs in a web browser?",
//         a: "Java",
//         b: "C",
//         c: "Python",
//         d: "Javascript",
//         correct: "d",
//     },

//     {
//         question: "What does CSS stand for?",
//         a: "Central Style Sheet",
//         b: "Cascading Style Sheey",
//         c: "Cascading Simple Sheet",
//         d: "Cars SUVS Sailboats",
//         correct: "b",
//     },

//     {
//         question: "What does HTML stands for?",
//         a: "Hypertext Markup Language",
//         b: "Hypertext Markdown Language",
//         c: "Hyperloop Machine Language",
//         d: "Halicopters Terminals Motorboats Lamborginis",
//         correct: "a",
//     },

//     {
//         question: "What year was Javascript launched?",
//         a: "1996",
//         b: "1995",
//         c: "1994",
//         d: "none of the above",
//         correct: "b",
//     },

//     {
//         question: "Which keyword is used to declare a variable in JavaScript?",
//         a: "var",
//         b: "let",
//         c: "const",
//         d: "var, let, const",
//         correct: "d",
//     },

//     {
//         question: "Which method is used to add a new element at the end of an array in JavaScript?",
//         a: "Push()",
//         b: "Pop()",
//         c: "Shift()",
//         d: "Unshift()",
//         correct: "a",
//     },

//     {
//         question: "Which method is used to join two or more arrays in JavaScript?",
//         a: "join()",
//         b: "Concat()",
//         c: "Merge()",
//         d: "shift()",
//         correct: "b",
//     },

//     {
//         question: "Which keyword is used to declare a constant in JavaScript?",
//         a: "var",
//         b: "let",
//         c: "const",
//         d: "none of the above",
//         correct: "c",
//     },

//     {
//         question: "Which HTML element is used to define the title of a document?",
//         a: "<title>",
//         b: "<header>",
//         c: "<head>",
//         d: "meta>",
//         correct: "a"
//     },

//     {
//         question: "What is the correct syntax for adding a background color in CSS?",
//         a: "background-color: #FFFFFF",
//         b: "bg-color: #FFFFFF",
//         c: "background: #FFFFFF",
//         d: "color-background: #FFFFFF",
//         correct: "a"
//     },
// ]


// const Quiz = document.getElementById('quiz')
// const answerEls = document.querySelectorAll('.answer')
// const QuestionEl = document.getElementById('question')
// const a_text = document.getElementById('a_text')
// const b_text = document.getElementById('b_text')
// const c_text = document.getElementById('c_text')
// const d_text = document.getElementById('d_text')

// const submitBtn = document.getElementById('Submit')

// let currentQuiz = 0
// let score = 0

// loadQuiz()

// function loadQuiz() {

//     deselectAnswer()

//     const currentQuizData = quizData[currentQuiz]

//     QuestionEl.innerText = currentQuizData.question
//     a_text.innerText = currentQuizData.a
//     b_text.innerText = currentQuizData.b
//     c_text.innerText = currentQuizData.c
//     d_text.innerText = currentQuizData.d
// }

// function deselectAnswer(){
//     let answerEls
//     answerEls.forEach(answerEls => {
//         if(answerEls.checked){
//             answer = answerEl.id
//         }
//     })
//     return answer
// }
// submitBtn.addEventListener('click', () => {
//     const answer = getSelected()

//     if (answer){
//         if (answer === quizData[currentQuiz].correct){
//             score++
//         }

//         currentQuiz++

//         if(currentQuiz < quizData.length){
//             loadQuiz()
//         } else {
//             quizData.innerHTML = `
//                 <h2>You answered ${score}/${quizData.length} questions correctly</h2>
//                 <button onclick = "location.reload()">Reload</button>
//                 `
//         }
//     }
// })

const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheet",
        b: "Cascading Style Sheet",
        c: "Cascading Simple Sheet",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborghinis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        a: "var",
        b: "let",
        c: "const",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Which method is used to add a new element at the end of an array in JavaScript?",
        a: "push()",
        b: "pop()",
        c: "shift()",
        d: "unshift()",
        correct: "a",
    },
    {
        question: "Which method is used to join two or more arrays in JavaScript?",
        a: "join()",
        b: "concat()",
        c: "merge()",
        d: "shift()",
        correct: "b",
    },
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        a: "var",
        b: "let",
        c: "const",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "Which HTML element is used to define the title of a document?",
        a: "<title>",
        b: "<header>",
        c: "<head>",
        d: "<meta>",
        correct: "a"
    },
    {
        question: "What is the correct syntax for adding a background color in CSS?",
        a: "background-color: #FFFFFF",
        b: "bg-color: #FFFFFF",
        c: "background: #FFFFFF",
        d: "color-background: #FFFFFF",
        correct: "a"
    },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
