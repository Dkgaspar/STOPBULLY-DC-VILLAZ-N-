const questions = [
  {
    title: "¿Que es el bullying?",
    image: "1.jpg",
    options: ["Una forma de violencia repetitiva en el ámbito escolar", "Un tipo de juego entre amigos", "Una discusión ocasional entre compañeros."],
    answer: "Una forma de violencia repetitiva en el ámbito escolar"
  },
  {
    title: "¿Cuál de las siguientes acciones constituye bullying?",
    image: "2.jpg",
    options: ["Burlarse repetidamente de alguien por su apariencia física", "Hacer una broma ocasional", "Ayudar a un amigo con problemas"],
    answer: "Burlarse repetidamente de alguien por su apariencia física"
  },
  {
    title: "¿Cómo puede afectar el bullying a la salud mental de una persona?",
    image: "3.jpg",
    options: ["Puede causar ansiedad, depresión y baja autoestima", "No tiene ningún impacto en la salud mental", "Puede mejorar la salud mental al fortalecer la resiliencia"],
    answer: "Puede causar ansiedad, depresión y baja autoestima"
  },
  {
    title: "¿Qué papel juegan los testigos en situaciones de bullying?",
    image: "4.jpg",
    options: ["Pueden detener el acoso al intervenir o buscar ayuda", "No tienen responsabilidad en detener el bullying", "Deben unirse al acosador para evitar ser víctimas"],
    answer: "Pueden detener el acoso al intervenir o buscar ayuda"
  },
  {
    title: "¿Cómo pueden los padres ayudar a prevenir el bullying?",
    image: "5.jpg",
    options: ["Hablar con sus hijos sobre el bullying y enseñarles a ser respetuosos", "Ignorar el problema y esperar que desaparezca", "No pueden hacer nada para prevenir el bullying"],
    answer: "Hablar con sus hijos sobre el bullying y enseñarles a ser respetuosos"
  },
  {
    title: "¿Qué pueden hacer las escuelas para abordar el problema del bullying?",
    image: "6.jpg",
    options: ["Implementar políticas y programas de prevención del bullying", "Ignorar el problema y esperar que desaparezca", "Culpar a las víctimas por ser acosadas"],
    answer: "Implementar políticas y programas de prevención del bullying"
  },
  {
    title: "¿Cuál es la diferencia entre el conflicto y el bullying?",
    image: "7.jpg",
    options: ["El conflicto implica un desacuerdo mutuo, mientras que el bullying implica un desequilibrio de poder", "No hay diferencia, son lo mismo", "El bullying solo ocurre en la escuela, mientras que el conflicto puede ocurrir en cualquier lugar"],
    answer: "El conflicto implica un desacuerdo mutuo, mientras que el bullying implica un desequilibrio de poder"
  },
  {
    title: "¿Cómo pueden los niños responder al bullying?",
    image: "8.jpg",
    options: ["Pidiendo ayuda a un adulto de confianza", "Respondiendo con violencia física", "Ignorando al acosador y esperando que se detenga"],
    answer: "Pidiendo ayuda a un adulto de confianza"
  },
  {
    title: "¿Cómo pueden los amigos apoyar a alguien que está siendo acosado?",
    image: "9.jpg",
    options: ["Apoyar a la víctima y buscar ayuda de un adulto", "Unirse al acosador y participar en el acoso", "Ignorar lo que están viendo y seguir adelante"],
    answer: "Apoyar a la víctima y buscar ayuda de un adulto"
  }
];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const messageElement = document.getElementById('message');
const checkButton = document.getElementById('check-btn');
const errorSound = document.getElementById('error-sound');
const menuButton = document.createElement('button');
menuButton.textContent = 'Menu';
menuButton.id = 'menu-btn';
menuButton.onclick = () => {
  window.location.href = 'menú.html';
};

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = `
    <h2>${currentQuestion.title}</h2>
    <img src="${currentQuestion.image}" alt="Question Image">
  `;
  optionsElement.innerHTML = '';
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    button.style.backgroundColor = getButtonColor(index);
    optionsElement.appendChild(button);
  });
}

function getButtonColor(index) {
  const colors = ["#ff5733", "#33ff8b", "#338aff"];
  return colors[index % colors.length];
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    correctAnswers++;
    messageElement.textContent = '¡Correcto!';
  } else {
    incorrectAnswers++;
    messageElement.textContent = 'Incorrecto. La respuesta correcta es: ' + currentQuestion.answer;
    errorSound.play();
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    const totalQuestions = correctAnswers + incorrectAnswers;
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    messageElement.textContent = `Puntuación final: ${score}%`;
    checkButton.disabled = true;
    optionsElement.innerHTML = '';
    optionsElement.appendChild(menuButton);
    questionElement.innerHTML = ''; 
  }
}
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = `
    <h2>${currentQuestion.title}</h2>
    <img src="${currentQuestion.image}" alt="Question Image">
  `;
  optionsElement.innerHTML = '';
  const shuffledOptions = shuffleArray(currentQuestion.options);
  
  shuffledOptions.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    button.style.backgroundColor = getButtonColor(index);
    optionsElement.appendChild(button);
    
  });
  checkButton.textContent = 'Comprobando respuesta';
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
loadQuestion();