import axios from 'axios';

export default [
    {
        question: "Question 1",
        imageQuestion:require('../assets/Crab.png'),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Pikachu",
            },
            {
                id:"1",
                options:"B",
                answer:"Shark",
            },
            {
                id:"2",
                options:"C",
                answer:"Dolphin",
            },
            {
                id:"3",
                options:"D",
                answer:"Crab",
            },
        ],
        correctAnswerIndex: 3
    },
    {
        question: "Question 2",
        imageQuestion: require('../assets/Jellyfish.png'),
        options:[
            {
                id:"0",
                options:"A",
                answer: 'Jellyfish',
            },
            {
                id:"1",
                options:"B",
                answer:"Octopus",
            },
            {
                id:"2",
                options:"C",
                answer:"Pig",
            },
            {
                id:"3",
                options:"D",
                answer:"Deer",
            },
        ],
        correctAnswerIndex: 0,

    },
    {
        question: "Question 3",
        imageQuestion: require('../assets/Octopus.png'),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Centipede",
            },
            {
                id:"1",
                options:"B",
                answer:"Octopus",
            },
            {
                id:"2",
                options:"C",
                answer:"JellyFish",
            },
            {
                id:"3",
                options:"D",
                answer:"Elephant",
            },
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Question 4",
        imageQuestion: require('../assets/Pinguin.png'), 
        options:[
            {
                id:"0",
                options:"A",
                answer:"Eagle",
            },
            {
                id:"1",
                options:"B",
                answer:"Chicken",
            },
            {
                id:"2",
                options:"C",
                answer:"Penguin",
            },
            {
                id:"3",
                options:"D",
                answer:"Seal",
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Question 5",
        imageQuestion: require('../assets/whale.png'),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Snake",
            },
            {
                id:"1",
                options:"B",
                answer:"Shark",
            },
            {
                id:"2",
                options:"C",
                answer:"Whale",
            },
            {
                id:"3",
                options:"D",
                answer:"Elephant",
            },
        ],
        correctAnswerIndex: 2
    }
]