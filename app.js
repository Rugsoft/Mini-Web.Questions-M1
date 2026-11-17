(() => {
  const menuSection = document.getElementById("menu-section");
  const quizSection = document.getElementById("quiz-section");
  const resultsSection = document.getElementById("results-section");

  const startBtn = document.getElementById("start-btn");
  const cancelBtn = document.getElementById("cancel-btn");
  const retryBtn = document.getElementById("retry-btn");
  const menuBtn = document.getElementById("menu-btn");

  const quizForm = document.getElementById("quiz-form");
  const questionsContainer = document.getElementById("questions-container");
  const quizError = document.getElementById("quiz-error");
  const quizModeBadge = document.getElementById("quiz-mode-badge");
  const answeredCountEl = document.getElementById("answered-count");

  const scoreValueEl = document.getElementById("score-value");
  const scorePercentEl = document.getElementById("score-percent");
  const scoreStatusEl = document.getElementById("score-status");
  const mistakesContainer = document.getElementById("mistakes-container");
  const totalBankEl = document.getElementById("total-bank");

  const EXAM_SIZE = 10;
  const MODE_LABELS = {
    ALL: "Todas las UFs (Mixto)",
    UF1841: "UF1841 — HTML5 y CSS3",
    UF1842: "UF1842 — JavaScript, DOM y Multimedia",
    UF1843: "UF1843 — Usabilidad, Accesibilidad y Arrays"
  };

  let currentMode = "ALL";
  let currentExam = [];

  totalBankEl.textContent = QUESTIONS_BANK.length;

  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function showView(view) {
    menuSection.classList.toggle("hidden", view !== "menu");
    quizSection.classList.toggle("hidden", view !== "quiz");
    resultsSection.classList.toggle("hidden", view !== "results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateAnsweredCount() {
    const answered = currentExam.reduce((total, _, idx) => {
      const checked = quizForm.querySelector(`input[name="q_${idx}"]:checked`);
      return total + (checked ? 1 : 0);
    }, 0);
    answeredCountEl.textContent = answered;
  }

  function startExam(mode) {
    currentMode = mode;
    const pool = mode === "ALL"
      ? QUESTIONS_BANK
      : QUESTIONS_BANK.filter((q) => q.uf === mode);

    currentExam = shuffle(pool).slice(0, EXAM_SIZE);
    quizModeBadge.textContent = MODE_LABELS[mode] || mode;
    quizError.classList.add("hidden");
    quizError.textContent = "";

    questionsContainer.innerHTML = currentExam.map((q, idx) => {
      const optionsHtml = q.options.map((opt, optIdx) => {
        const letter = String.fromCharCode(65 + optIdx);
        return `
          <label class="option-label">
            <input type="radio" name="q_${idx}" value="${optIdx}">
            <span><strong>${letter})</strong> ${opt}</span>
          </label>
        `;
      }).join("");

      return `
        <article class="question-card" data-question-index="${idx}">
          <div class="question-card__meta">
            <span>Pregunta ${idx + 1} de ${currentExam.length}</span>
            <span class="badge badge--blue">${q.uf}</span>
          </div>
          <p class="question-card__title">${q.question}</p>
          <div class="options-list" role="radiogroup" aria-label="Opciones pregunta ${idx + 1}">
            ${optionsHtml}
          </div>
        </article>
      `;
    }).join("");

    updateAnsweredCount();
    showView("quiz");
  }

  function gradeExam() {
    const unanswered = [];
    const userAnswers = currentExam.map((_, idx) => {
      const selected = quizForm.querySelector(`input[name="q_${idx}"]:checked`);
      if (!selected) {
        unanswered.push(idx + 1);
        return null;
      }
      return Number(selected.value);
    });

    if (unanswered.length > 0) {
      quizError.textContent = `Te faltan preguntas por responder: ${unanswered.join(", ")}.`;
      quizError.classList.remove("hidden");
      return;
    }

    quizError.classList.add("hidden");

    let hits = 0;
    const mistakes = [];

    currentExam.forEach((q, idx) => {
      const chosen = userAnswers[idx];
      if (chosen === q.correct) {
        hits++;
      } else {
        mistakes.push({
          number: idx + 1,
          question: q,
          chosenIndex: chosen
        });
      }
    });

    const percent = Math.round((hits / currentExam.length) * 100);
    const passed = hits >= 5;

    scoreValueEl.textContent = `${hits} / ${currentExam.length}`;
    scorePercentEl.textContent = `${percent}% de aciertos`;
    scoreStatusEl.textContent = passed ? "Aprobado" : "Necesita repaso";
    scoreStatusEl.className = `status-pill ${passed ? "status-pill--pass" : "status-pill--fail"}`;

    if (mistakes.length === 0) {
      mistakesContainer.innerHTML = `
        <div class="alert alert--success">
          ¡Pleno! Has acertado las 10 preguntas sin ningún fallo.
        </div>
      `;
    } else {
      const cardsHtml = mistakes.map((m) => {
        const wrongLetter = String.fromCharCode(65 + m.chosenIndex);
        const correctLetter = String.fromCharCode(65 + m.question.correct);
        return `
          <article class="review-card">
            <div class="question-card__meta">
              <span>Pregunta ${m.number} fallada</span>
              <span class="badge badge--blue">${m.question.uf}</span>
            </div>
            <p class="question-card__title">${m.question.question}</p>
            <div class="review-answer review-answer--wrong">
              <strong>Tu respuesta:</strong> ${wrongLetter}) ${m.question.options[m.chosenIndex]}
            </div>
            <div class="review-answer review-answer--correct">
              <strong>Respuesta correcta:</strong> ${correctLetter}) ${m.question.options[m.question.correct]}
            </div>
            <p class="review-explanation"><strong>Explicación:</strong> ${m.question.explanation}</p>
          </article>
        `;
      }).join("");

      mistakesContainer.innerHTML = `
        <h3>Revisión de preguntas falladas (${mistakes.length})</h3>
        ${cardsHtml}
      `;
    }

    showView("results");
  }

  startBtn.addEventListener("click", () => {
    const selectedMode = document.querySelector('input[name="uf"]:checked')?.value || "ALL";
    startExam(selectedMode);
  });

  questionsContainer.addEventListener("change", updateAnsweredCount);

  quizForm.addEventListener("submit", (e) => {
    e.preventDefault();
    gradeExam();
  });

  cancelBtn.addEventListener("click", () => showView("menu"));
  menuBtn.addEventListener("click", () => showView("menu"));
  retryBtn.addEventListener("click", () => startExam(currentMode));
})();
