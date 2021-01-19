const questionSet = [
    {
        qid: 0,
        question: 'Everything in React is a _____________',
        answers: ['Module', 'Component', 'Package', 'Class'],
        correctAnswer: 'Component',
    },
    {
        qid: 2,
        question: 'How many elements does a react component return?',
        answers: [
            '2 Elements',
            '1 Element',
            'Multiple Elements',
            'None of These',
        ],
        correctAnswer: 'Multiple Elements',
    },
    {
        qid: 3,
        question: 'What is Babel?',
        answers: [
            'A transpiler',
            'An interpreter',
            'A Compiler',
            'Both Compiler and Transpilar',
        ],
        correctAnswer: 'Both Compiler and Transpilar',
    },
    {
        qid: 4,
        question: 'What does the "webpack" command do?',
        answers: [
            'Transpiles all the Javascript down into one file',
            'Runs react local development server',
            'A module bundler',
            'None of above',
        ],
        correctAnswer: 'A module bundler',
    },
    {
        qid: 5,
        question:
            'What port is the default where the webpack-dev-server will run?',
        answers: ['3000', '8080', '3606', '8000'],
        correctAnswer: '8080',
    },
    {
        qid: 6,
        question: 'What is ReactJS?',
        answers: [
            'Server side Framework',
            'User-interface framework',
            'A Library for building interaction interfaces',
            'None of These',
        ],
        correctAnswer: 'A Library for building interaction interfaces',
    },
    {
        qid: 7,
        question:
            'In React what is used to pass data to a component from outside?',
        answers: ['setState', 'render with arguments', 'props', 'PropTypes'],
        correctAnswer: 'props',
    },
    {
        qid: 8,
        question:
            'How can you access the state of a component from inside of a member function?',
        answers: [
            'this.getState()',
            'this.values',
            'this.prototype.stateValue',
            'this.state',
        ],
        correctAnswer: 'this.values',
    },
    {
        qid: 9,
        question: 'Props are __________ into other components',
        answers: ['Methods', 'Injected', 'Both 1 & 2', 'All of the above'],
        correctAnswer: 'Methods',
    },
    {
        qid: 10,
        question: 'What is a react.js in MVC?',
        answers: ['Middleware', 'Controller', 'Model', 'Router'],
        correctAnswer: 'Controller',
    },
    {
        qid: 11,
        question: 'ReactJS uses _____ to increase performance',
        answers: ['Original DOM', 'Virtual DOM', 'Both 1 & 2', 'None of above'],
        correctAnswer: 'Virtual DOM',
    },
    {
        qid: 12,
        question:
            'Keys are given to a list of elements in react. These keys should be -',
        answers: [
            'Do not requires to be unique',
            'Unique in the DOM',
            'Unique among the siblings only',
            'All of the above',
        ],
        correctAnswer: 'Unique among the siblings only',
    },
    {
        qid: 13,
        question: 'What is the name of React.js Developer?',
        answers: ['Jordan mike', 'Jordan Lee', 'Jordan Walke', 'Tim Lee'],
        correctAnswer: 'Jordan Walke',
    },
    {
        qid: 14,
        question: 'Who maintain React.js?',
        answers: ['Apple', 'Facebook', 'Twitter', 'Google'],
        correctAnswer: 'Facebook',
    },
    {
        qid: 15,
        question:
            '__________ helps react for keeping their data unidirectional.',
        answers: ['JSX', 'Flux', 'Dom', 'Props'],
        correctAnswer: 'Props',
    },
]

export default (n = 10) =>
    Promise.resolve(questionSet.sort(() => 0.5 - Math.random()).slice(0, n))
