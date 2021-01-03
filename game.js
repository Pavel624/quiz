const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const ProgressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCOunter = 0;
let availableQUestions = [];

let questions = [
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '21',
        choice3: '242',
        choice4: '543',
        answer: 2,
    },
    {
        question: 'What is 3 + 2?',
        choice1: '2',
        choice2: '21',
        choice3: '242',
        choice4: '543',
        answer: 2,
    },
    {
        question: 'What is 4 + 2?',
        choice1: '2',
        choice2: '21',
        choice3: '242',
        choice4: '543',
        answer: 2,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 3