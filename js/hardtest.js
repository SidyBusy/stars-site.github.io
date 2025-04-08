document.getElementById("generate").addEventListener("click", function() {
    document.getElementById("quiz_screen").classList.remove("hidden");
    document.getElementById("mark").classList.add("hidden");
    document.getElementById("generate").classList.add("hidden");


});

document.getElementById("ok").addEventListener("click", function() {
    location.reload();


});

const questions_data = [
    { question: "Как называется явление, при котором звезда гаснет в конце своей жизни?", options: ["Гравитационный коллапс", "Квантовая нестабильность", "Космическая смерть"], correct: 0 },
    { question: "Какой элемент синтезируется в звездах перед их коллапсом?", options: ["Кислород", "Углерод", "Железо"], correct: 2 },
    { question: "Что такое туманность?", options: ["Группа звезд, объединенных гравитацией", "Облако газа и пыли, из которого образуются звезды", "Черная дыра"], correct: 1 },
    { question: "Как называется звезда, которая быстро вращается и испускает импульсы излучения?", options: ["Пульсар", "Квазар", "Магнетар"], correct: 0 },
    { question: "Как называется эффект, из-за которого свет звезд мерцает на ночном небе?", options: ["Атмосферная турбулентность", "Гравитационное искажение", "Красное смещение"], correct: 0 },
    { question: "Как называется граница, за которой свет не может покинуть черную дыру?", options: ["Фотосфера", "Горизонт событий", "Аккреционный диск"], correct: 1 },
    { question: "Какова природа квазара?", options: ["Это молодая звезда, окруженная плотным облаком газа", "Это активное ядро галактики с массивной черной дырой", "Это очень плотное скопление нейтронных звезд"], correct: 1 },
    { question: "Что происходит, когда белый карлик превышает предел Чандрасекара?", options: ["Он превращается в нейтронную звезду или взрывается как сверхновая типа Ia", "Он становится красным гигантом", "Он просто остывает"], correct: 0 },
    { question: "Почему железо является \"конечным\" элементом в ядерном синтезе звезд?", options: ["Его ядро слишком нестабильно", "Его слияние не выделяет энергию, а требует её", "Оно распадается при высокой температуре"], correct: 1 },
    { question: "Почему у нейтронных звезд сильное магнитное поле?", options: ["Из-за быстрого вращения и сжатия заряженных частиц", "Из-за большого количества железа в составе", "Из-за взаимодействия с темной материей"], correct: 0 }
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