document.getElementById("generate").addEventListener("click", function() {
    document.getElementById("quiz_screen").classList.remove("hidden");
    document.getElementById("mark").classList.add("hidden");
    document.getElementById("generate").classList.add("hidden");


});

document.getElementById("ok").addEventListener("click", function() {
    location.reload();


});

const questions_data = [
    { question: "Какая звезда ближе всего к Земле?", options: ["Сириус", "Солнце", "Полярная"], correct: 1 },
    { question: "Какая звезда ближайшая к Солнцу?", options: ["Сириус", "Бетельгейзе", "Проксима Центавра"], correct: 2 },
    { question: "Какая звезда самая яркая во вселенной?", options: ["Вега", "R136a1", "Полярная"], correct: 1 },
    { question: "Какая звезда находится в центре Солнечной системы?", options: ["Альдебаран", "Канопус", "Солнце"], correct: 2 },
    { question: "Как называется группа звёзд, образующих фигуры на небе?", options: ["Созвездие", "Галактика", "Планета"], correct: 0 },
    { question: "Какого цвета самое горячее звёздное тело?", options: ["Краного", "Синего", "Жёлтого"], correct: 1 },
    { question: "Как называется самая известная звезда, которая помогает путешественникам находить север?", options: ["Арктур", "Поллукс", "Полярная"], correct: 2 },
    { question: "Что определяет цвет звезды?", options: ["Её возраст", "Температуру поверхности", "Расстояние от Земли"], correct: 1 },
    { question: "Какая из следующих звёзд наибольшая?", options: ["Арктур", "Альфа Центавра", "Бетельгейзе"], correct: 2 },
    { question: "Какая звезда тяжелее Солнца в 250 раз?", options: ["R136a1", "Альфа Центавра", "Бетельгейзе"], correct: 0 },
]


function getRandomElements(arr, count) {
    return arr.sort(() => Math.random() - 0.5).slice(0, count);
}


const questions = getRandomElements(questions_data, 5);


let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById("result").textContent = `Вы набрали ${score} из ${questions.length}`;
        document.getElementById("result").classList.remove("hidden");
        document.getElementById("question").classList.add("hidden");
        document.getElementById("options").classList.add("hidden");
        document.getElementById("question_number").classList.add("hidden");
        document.getElementById("ok").classList.remove("hidden");
        return;
    }

    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    let s = "вопрос " + (currentQuestion + 1) + " из 5"
    document.getElementById("question_number").textContent = s;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; // Очищаем старые варианты

    q.options.forEach((option, index) => {
        const btn = document.createElement("div");
        btn.textContent = option;
        btn.classList.add("option");
        btn.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(index) {
    if (index === questions[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}


loadQuestion();