const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull'); 

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
    {
        question: 'Synonym for Hesitate',
        choice1: 'Decide',
        choice2: 'Contemplate',
        choice3: 'Rush',
        choice4: 'Pause',
        answer: 2, // The correct synonym is 'Contemplate'
    },
    {
        question: 'Synonym for Exquisite',
        choice1: 'Beautiful',
        choice2: 'Mediocre',
        choice3: 'Inferior',
        choice4: 'Mundane',
        answer: 1, // The correct synonym is 'Beautiful'
    },
    {
        question: 'Synonym for Precarious',
        choice1: 'Stable',
        choice2: 'Secure',
        choice3: 'Unstable',
        choice4: 'Permanent',
        answer: 3, // The correct synonym is 'Unstable'
    },
    {
        question: 'Synonym for Ubiquitous',
        choice1: 'Scarce',
        choice2: 'Rare',
        choice3: 'Widespread',
        choice4: 'Limited',
        answer: 3, // The correct synonym is 'Widespread'
    },
    {
        question: 'Synonym for Mitigate',
        choice1: 'Worsen',
        choice2: 'Intensify',
        choice3: 'Alleviate',
        choice4: 'Aggravate',
        answer: 3, // The correct synonym is 'Alleviate'
    },
    {
        question: 'Synonym for Eloquent',
        choice1: 'Articulate',
        choice2: 'Inarticulate',
        choice3: 'Mute',
        choice4: 'Stuttering',
        answer: 1, // The correct synonym is 'Articulate'
    },
    {
        question: 'Synonym for Incessant',
        choice1: 'Sporadic',
        choice2: 'Unrelenting',
        choice3: 'Occasional',
        choice4: 'Intermittent',
        answer: 2, // The correct synonym is 'Unrelenting'
    },
    {
        question: 'Synonym for Surreptitious',
        choice1: 'Open',
        choice2: 'Covert',
        choice3: 'Transparent',
        choice4: 'Apparent',
        answer: 2, // The correct synonym is 'Covert'
    },
    {
        question: 'Synonym for Proficient',
        choice1: 'Inept',
        choice2: 'Capable',
        choice3: 'Competent',
        choice4: 'Amateur',
        answer: 2, // The correct synonym is 'Capable'
    },
    {
        question: 'Synonym for Sagacious',
        choice1: 'Foolish',
        choice2: 'Shrewd',
        choice3: 'Gullible',
        choice4: 'Naive',
        answer: 2, // The correct synonym is 'Shrewd'
    },
    {
        question: 'Synonym for Pernicious',
        choice1: 'Harmful',
        choice2: 'Beneficial',
        choice3: 'Neutral',
        choice4: 'Fortunate',
        answer: 1, // The correct synonym is 'Harmful'
    },
    {
        question: 'Synonym for Hesitate',
        choice1: 'Decide',
        choice2: 'Contemplate',
        choice3: 'Rush',
        choice4: 'Pause',
        answer: 4, // The correct synonym is 'Pause'
    },
    {
        question: 'Synonym for Brave',
        choice1: 'Cowardly',
        choice2: 'Fearless',
        choice3: 'Timid',
        choice4: 'Scared',
        answer: 2, // The correct synonym is 'Fearless'
    },
    {
        question: 'Synonym for Delicious',
        choice1: 'Tasty',
        choice2: 'Awful',
        choice3: 'Bland',
        choice4: 'Sour',
        answer: 1, // The correct synonym is 'Tasty'
    },
    {
        question: 'Synonym for Happy',
        choice1: 'Sad',
        choice2: 'Joyful',
        choice3: 'Miserable',
        choice4: 'Unhappy',
        answer: 2, // The correct synonym is 'Joyful'
    },
    {
        question: 'Synonym for Explain',
        choice1: 'Confuse',
        choice2: 'Clear',
        choice3: 'Elaborate',
        choice4: 'Hide',
        answer: 3, // The correct synonym is 'Elaborate'
    },
    {
        question: 'Synonym for Angry',
        choice1: 'Calm',
        choice2: 'Furious',
        choice3: 'Satisfied',
        choice4: 'Happy',
        answer: 2, // The correct synonym is 'Furious'
    },
    {
        question: 'Synonym for Smart',
        choice1: 'Dull',
        choice2: 'Intelligent',
        choice3: 'Stupid',
        choice4: 'Clever',
        answer: 2, // The correct synonym is 'Intelligent'
    },
    {
        question: 'Synonym for Start',
        choice1: 'Begin',
        choice2: 'End',
        choice3: 'Cease',
        choice4: 'Pause',
        answer: 1, // The correct synonym is 'Begin'
    },
    {
        question: 'Synonym for Difficult',
        choice1: 'Easy',
        choice2: 'Hard',
        choice3: 'Simple',
        choice4: 'Challenging',
        answer: 2, // The correct synonym is 'Hard'
    },
    {
        question: 'Synonym for Love',
        choice1: 'Adore',
        choice2: 'Hate',
        choice3: 'Detest',
        choice4: 'Like',
        answer: 1, // The correct synonym is 'Adore'
    },
    {
        question: 'Synonym for Friend',
        choice1: 'Foe',
        choice2: 'Companion',
        choice3: 'Stranger',
        choice4: 'Enemy',
        answer: 2, // The correct synonym is 'Companion'
    },
    {
        question: 'Synonym for Beautiful',
        choice1: 'Ugly',
        choice2: 'Attractive',
        choice3: 'Gorgeous',
        choice4: 'Plain',
        answer: 3, // The correct synonym is 'Gorgeous'
    },
    {
        question: 'Synonym for Correct',
        choice1: 'Incorrect',
        choice2: 'Right',
        choice3: 'Wrong',
        choice4: 'Accurate',
        answer: 4, // The correct synonym is 'Accurate'
    },
    {
        question: 'Synonym for Small',
        choice1: 'Huge',
        choice2: 'Tiny',
        choice3: 'Gigantic',
        choice4: 'Enormous',
        answer: 2, // The correct synonym is 'Tiny'
    },
    {
        question: 'Synonym for Funny',
        choice1: 'Boring',
        choice2: 'Humorous',
        choice3: 'Serious',
        choice4: 'Amusing',
        answer: 2, // The correct synonym is 'Humorous'
    },
    {
        question: 'Synonym for Tired',
        choice1: 'Energetic',
        choice2: 'Exhausted',
        choice3: 'Active',
        choice4: 'Worn out',
        answer: 2, // The correct synonym is 'Exhausted'
    },
    {
        question: 'Synonym for Fast',
        choice1: 'Slow',
        choice2: 'Quick',
        choice3: 'Speedy',
        choice4: 'Rapid',
        answer: 4, // The correct synonym is 'Rapid'
    },
    {
        question: 'Synonym for Interesting',
        choice1: 'Dull',
        choice2: 'Boring',
        choice3: 'Fascinating',
        choice4: 'Tedious',
        answer: 3, // The correct synonym is 'Fascinating'
    },
    {
        question: 'Synonym for Old',
        choice1: 'Ancient',
        choice2: 'New',
        choice3: 'Modern',
        choice4: 'Young',
        answer: 1, // The correct synonym is 'Ancient'
    }
];

const SCORE_POINTS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestion.length === 0 || questionCounter >= MAX_QUESTIONS) { // Use >= instead of >
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/end.html'); // Use window.location.assign() instead of AbortController.location.assign()
    }

    questionCounter++; // Use ++ to increment
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`; // Use = instead of ``
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]; // Use 'choice' instead of 'number'
    });

    availableQuestion.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classtoapply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classtoapply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classtoapply); // Use classList instead of classlist

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classtoapply); // Use classList instead of classlist
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();
