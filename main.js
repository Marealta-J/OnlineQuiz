const questions = [
{
    questions: "The second highest mountain in the world?",
    answers: ["Everest", "Beluga", "K2", "Elbrus"],
    correct: 3,
},
{
    questions: "The closest star to the earth after the sun?",
    answers: ["Proxima Centauri", "Sirius A", "Antares", "Betelgeuse"],
    correct: 1,
},
{
    questions: "What consumes more energy?",
    answers: ["Quadro RTX 8000", "RTX Titan X", "Radeon VEGA9", "RTX 4070"],
    correct: 4,
}
];
const headerContainer = document.querySelector('#qheader');
const listContainer = document.querySelector('#aList');
const submitBtn = document.querySelector('#btn')

let score = 0;
let questionIndex = 0;

clearPage();
showQuestion();

function clearPage(){
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

function showQuestion(){
    const headerTemplate = `<h2 class="title">%title%</h2>`;
    
    const title = headerTemplate.replace('%title%', questions[questionIndex]['questions'])

    headerContainer.innerHTML = title;

    for (item of questions[questionIndex]['answers']){
        console.log(item);
    }

    
}