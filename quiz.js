const questions = [
  {
    question:
      'Cila ishte ndeshja e parë ndërkombëtare e kombëtares së Kosovës?',
    options: [
      'Kosova - Finlanda',
      'Kosova - Shqipëria',
      'Kosova - Maqedonia e Veriut',
      'Kosova - Greqia',
    ],
    answer: 'Kosova - Finlanda',
  },
  {
    question: 'Në cilin vit u pranua Kosova në UEFA?',
    options: ['2014', '2015', '2016', '2017'],
    answer: '2016',
  },
  {
    question: 'Cila është ngjyra kryesore e fanellës së kombëtares së Kosovës?',
    options: ['E kuqe', 'E verdhë', 'E blertë', 'E bardhë'],
    answer: 'E bardhë',
  },
  {
    question: 'Kush është trajneri aktual i kombëtares së Kosovës (2023)?',
    options: [
      'Bernard Challandes',
      'Kakashi',
      'Igor Angelovski',
      'Erik Hamrén',
    ],
    answer: 'Bernard Challandes',
  },
  {
    question:
      'Cili është emri i stadionit ku kombëtarja e Kosovës luan ndeshjet shtëpiake?',
    options: [
      'Stadiumi Fadil Vokrri',
      'Stadiumi Loro Boriçi',
      'Stadiumi Qemal Stafa',
      'Stadiumi Air Albania',
    ],
    answer: 'Stadiumi Fadil Vokrri',
  },
  {
    question:
      'Sa lojtarë ka lista e kombëtares së Kosovës për një ndeshje zyrtare?',
    options: ['23', '26', '25', '22'],
    answer: '23',
  },
  {
    question:
      'Cili është golashënuesi më i mirë në histori të kombëtares së Kosovës?',
    options: ['Liridon Leci', 'Milot Rashica', 'Vedat Muriqi', 'Valon Behrami'],
    answer: 'Milot Rashica',
  },
  {
    question:
      'Cili është rivaliteti më i fortë për Kosovën në ndeshjet ndërkombëtare?',
    options: ['Serbia', 'Mali i Zi', 'Shqipëria', 'Maqedonia e Veriut'],
    answer: 'Serbia',
  },
  {
    question: 'Cila ka qenë ndeshja e parë zyrtare e kombëtares së Kosovës?',
    options: [
      'Kosova - Finlanda',
      'Kosova - Shqipëria',
      'Kosova - Greqia',
      'Kosova - Maqedonia',
    ],
    answer: 'Kosova - Shqipëria',
  },
  {
    question: 'Cila është ngjyra e fanellës së kombëtares së Kosovës?',
    options: ['E kuqe', 'E bardhë', 'E verdhë', 'E blu'],
    answer: 'E bardhë',
  },
  {
    question: 'Cili trajner e drejton kombëtaren e Kosovës në vitin 2023?',
    options: [
      'Bernard Challandes',
      'Igor Angelovski',
      'Kakashi',
      'Erik Hamrén',
    ],
    answer: 'Bernard Challandes',
  },
  {
    question: 'Cila është arritja më e madhe e Kosovës në Ligën e Kombeve?',
    options: [
      'Fitimi i grupit',
      'Kualifikimi në Euro',
      'Fitorja në ndeshje miqësore',
      'Nuk ka arritje',
    ],
    answer: 'Fitimi i grupit',
  },
  {
    question:
      'Sa gola ka shënuar Kosova në ndeshjet e saj zyrtare deri në vitin 2023?',
    options: ['60', '50', '45', '30'],
    answer: '50',
  },
  {
    question:
      'Cili është emri i presidentit të Federatës së Futbollit të Kosovës?',
    options: ['Agim Ademi', 'Fadil Vokrri', 'Lutfi Haziri', 'Sakip Merdan'],
    answer: 'Agim Ademi',
  },
  {
    question: 'Cili është simboli i kombëtares së Kosovës?',
    options: [
      'Flamuri i Kosovës',
      'Stema e UEFA-s',
      'Flamuri i Shqipërisë',
      'Stema e FIFA-s',
    ],
    answer: 'Flamuri i Kosovës',
  },
  {
    question: 'Sa ndeshje ka luajtur Kosova në kualifikimet për Euro 2020?',
    options: ['10', '8', '12', '6'],
    answer: '10',
  },
  {
    question:
      'Cila është skuadra më e fortë që ka përballur Kosova deri më tani?',
    options: ['Francë', 'Angli', 'Spanjë', 'Itali'],
    answer: 'Angli',
  },
  {
    question: 'Cili lojtar ka shënuar golin e parë për kombëtaren e Kosovës?',
    options: ['Liridon Leci', 'Arian Bego', 'Fidan Aliti', 'Kreshnik Hajrizi'],
    answer: 'Liridon Leci',
  },
  {
    question:
      'Cili është vendi ku është zhvilluar ndeshja e parë zyrtare e Kosovës?',
    options: ['Tiranë', 'Prishtinë', 'Shkup', 'Gjakovë'],
    answer: 'Prishtinë',
  },
  {
    question:
      'Cila është statistika e Kosovës në ndeshjet miqësore deri në vitin 2023?',
    options: [
      '6 fitore, 3 barazime, 1 humbje',
      '5 fitore, 2 barazime, 3 humbje',
      '4 fitore, 4 barazime, 1 humbje',
      '7 fitore, 1 barazim, 2 humbje',
    ],
    answer: '6 fitore, 3 barazime, 1 humbje',
  },
  {
    question:
      'Cili lojtar është i njohur për goditjet e tij të forta nga distanca?',
    options: [
      'Valon Behrami',
      'Milot Rashica',
      'Vedat Muriqi',
      'Lirim Kastrati',
    ],
    answer: 'Valon Behrami',
  },
  {
    question:
      'Cili është stadiumi ku është zhvilluar finalja e Kupës së Kosovës?',
    options: [
      'Stadiumi Fadil Vokrri',
      'Stadiumi Loro Boriçi',
      'Stadiumi Qemal Stafa',
      'Stadiumi Air Albania',
    ],
    answer: 'Stadiumi Fadil Vokrri',
  },
  {
    question: 'Cili është emri i tifozëve të kombëtares së Kosovës?',
    options: ['Dardanët', 'Shqiponjat', 'Kosovarët', 'Bardh e Zi'],
    answer: 'Dardanët',
  },
  {
    question: 'Cila është ndeshja më e rëndësishme e Kosovës deri më tani?',
    options: [
      'Kosova - Shqipëria',
      'Kosova - Serbia',
      'Kosova - Finlanda',
      'Kosova - Maqedonia e Veriut',
    ],
    answer: 'Kosova - Serbia',
  },
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timeLeft = 15;
let timerId;

function getRandomQuestions() {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10); // Merrni 10 pyetje të rastësishme
}

function startTimer() {
  timeLeft = 15; // Reset timer
  document.getElementById(
    'timer-display'
  ).textContent = `Koha e mbetur: ${timeLeft}s`;

  timerId = setInterval(() => {
    timeLeft--;
    document.getElementById(
      'timer-display'
    ).textContent = `Koha e mbetur: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerId);
      selectOption({ target: { textContent: '' } }); // Mark as incorrect
    }
  }, 1000);
}

function loadQuestion() {
  clearInterval(timerId);
  startTimer();

  const questionContainer = document.getElementById('question-container');
  const optionsContainer = document.getElementById('options-container');

  const currentQuestion = currentQuestions[currentQuestionIndex];
  questionContainer.textContent = currentQuestion.question;

  optionsContainer.innerHTML = '';
  currentQuestion.options.forEach((option) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('option-btn');
    button.addEventListener('click', selectOption);
    optionsContainer.appendChild(button);
  });

  document.getElementById('question-count').textContent = `Pyetja ${
    currentQuestionIndex + 1
  } nga ${currentQuestions.length}`;
}

function selectOption(e) {
  const selectedOption = e.target.textContent;
  const currentQuestion = currentQuestions[currentQuestionIndex];

  userAnswers[currentQuestionIndex] = selectedOption;

  if (selectedOption === currentQuestion.answer) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  clearInterval(timerId);
  const resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = `<h2>Keni përfunduar Kuizin!</h2>
                               <p>Ju keni marrë ${score} nga ${currentQuestions.length} pikë.</p>`;

  resultContainer.style.display = 'block';
  document.getElementById('restart-btn').style.display = 'block';
}

document.getElementById('restart-btn').addEventListener('click', function () {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  currentQuestions = getRandomQuestions();
  loadQuestion();
  document.getElementById('result-container').style.display = 'none';
  this.style.display = 'none';
});

// Initialize the quiz
currentQuestions = getRandomQuestions();
loadQuestion();
let helpUsed = false; // Një variabël për të kontrolluar nëse ndihma është përdorur

document.getElementById('help-btn').addEventListener('click', function () {
  if (!helpUsed) {
    removeTwoWrongOptions();
    helpUsed = true; // Aktivizo ndihmën
  }
});

function removeTwoWrongOptions() {
  const currentQuestion = currentQuestions[currentQuestionIndex];
  const optionsContainer = document.getElementById('options-container');

  // Krijo një listë të përgjigjeve të gabuara
  const wrongOptions = currentQuestion.options.filter(
    (option) => option !== currentQuestion.answer
  );

  // Shkëput dy përgjigje të rastit nga përgjigjet e gabuara
  const optionsToRemove = wrongOptions
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  // Heq opsionet nga DOM
  Array.from(optionsContainer.children).forEach((button) => {
    if (optionsToRemove.includes(button.textContent)) {
      button.style.display = 'none'; // Fshij butonin
    }
  });
}

// Modifikoni loadQuestion për të shfaqur butonin e ndihmës
function loadQuestion() {
  clearInterval(timerId);
  startTimer();

  const questionContainer = document.getElementById('question-container');
  const optionsContainer = document.getElementById('options-container');

  const currentQuestion = currentQuestions[currentQuestionIndex];
  questionContainer.textContent = currentQuestion.question;

  optionsContainer.innerHTML = '';
  currentQuestion.options.forEach((option) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('option-btn');
    button.addEventListener('click', selectOption);
    optionsContainer.appendChild(button);
  });

  document.getElementById('question-count').textContent = `Pyetja ${
    currentQuestionIndex + 1
  } nga ${currentQuestions.length}`;

  // Shfaq butonin e ndihmës
  document.getElementById('help-btn').style.display =
    helpUsed || currentQuestion.options.length <= 2 ? 'none' : 'block';
}
