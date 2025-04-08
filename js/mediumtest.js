document.getElementById("generate").addEventListener("click", function() {
    document.getElementById("quiz_screen").classList.remove("hidden");
    document.getElementById("mark").classList.add("hidden");
    document.getElementById("generate").classList.add("hidden");


});

document.getElementById("ok").addEventListener("click", function() {
    location.reload();


});

const questions_data = [
    { question: "Какой элемент составляет основную часть звёзд?", options: ["Железо", "Водород", "Углерод"], correct: 1 },
    { question: "Что остаётся после взрыва массивной звезды?", options: ["Красный карлик", "Туманность", "Нейтронная звезда или черная дыра"], correct: 2 },
    { question: "Как называется самая холодная категория звёзд?", options: ["Красные карлики", "Голубые гиганты", "Белые карлики"], correct: 0 },
    { question: "Какое время жизни у самых массивных звезд?", options: ["Миллионы лет", "Миллиарды лет", "Бесконечно долго"], correct: 0 },
    { question: "Какие звезды находятся в центре большинства галактик?", options: ["Нейтронные звёзды", "Голубые гиганты", "Сверхмассивные чёрные дыры"], correct: 2 },
    { question: "Что такое спектральный класс звезды?", options: ["Разделение по возрасту звезды", "Классификация по температуре и цвету", "Этап жизни звезды"], correct: 1 },
    { question: "Как называется процесс, в котором звезда вырабатывает энергию?", options: ["Ядерный синтез", "Гравитация", "Магнитное поле"], correct: 0 },
    { question: "Какая из этих звезд является двойной системой?", options: ["Вега", "Сириус", "Бетельгейзе"], correct: 1 },
    { question: "Во что превращается маломассивная звезда после жизни?", options: ["Черная дыра", "Красный гигант", "Белый карлик"], correct: 2 },
    { question: "Какой радиус у Солнца?", options: ["~700тыс км", "~700км", "~700млн км"], correct: 0 }
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