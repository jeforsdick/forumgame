const screens = document.querySelectorAll(".screen");

const gameState = {
  role: null,
  currentRound: 0,
  choices: []
};

const rounds = [
  {
    label: "Round 1",
    title: "What is the best next coaching move for Ms. Rivera right now?",
    text: "Choose the option that best fits your assigned group lens.",
    options: [
      {
        id: "A",
        text: "Share a general behavior support resource and invite her to a broader staff support session.",
        tag: "Could help, but not targeted enough",
        feedback:
          "A general resource may be a helpful starting point, but it does not directly address the moment where implementation is breaking down. Ms. Rivera already wants to help. She needs support that is specific, manageable, and tied to the transition routine."
      },
      {
        id: "B",
        text: "Provide targeted prompting and feedback focused on the transition routine where implementation is breaking down.",
        tag: "Best fit for current need",
        feedback:
          "This option matches the current barrier well. Ms. Rivera is willing and engaged, but she needs support that helps her use the plan more fluently during the exact routine where implementation is slipping."
      },
      {
        id: "C",
        text: "Move immediately to individualized side-by-side classroom coaching across the full school day.",
        tag: "Could help, but may over-support",
        feedback:
          "Embedded coaching might be useful later, but moving to the most intensive option right away may not match what the teacher needs at this point. The current issue seems routine-specific, not yet broad enough to require full individualized support across the day."
      },
      {
        id: "D",
        text: "Give the plan more time and check back in two weeks after she has had a chance to try it on her own.",
        tag: "Misses the current implementation barrier",
        feedback:
          "Waiting may unintentionally leave Ms. Rivera without the support she needs during the highest-risk routine. The plan is already in place, and the challenge is not willingness. The challenge is using it effectively in the moment."
      }
    ]
  },
  {
    label: "Round 2",
    title: "What should happen next?",
    text: "Two weeks later, Ms. Rivera says the support has helped, but implementation still drops during busy transitions when several students need her attention at once.",
    options: [
      {
        id: "A",
        text: "Keep the current support exactly the same and wait for consistency to build over time.",
        tag: "Workable, but may not be enough now",
        feedback:
          "Staying the course could help if progress continues, but the data suggest that busy transitions are still a barrier. This may be a point where maintaining the same level of support leaves the teacher stuck just short of fluent implementation."
      },
      {
        id: "B",
        text: "Intensify to more embedded coaching during the transition routine so support happens in context.",
        tag: "Best fit for current need",
        feedback:
          "This is the strongest match because the barrier is still happening in the moment during a specific routine. Embedded coaching can help bridge the gap between understanding the plan and using it accurately when the classroom becomes more demanding."
      },
      {
        id: "C",
        text: "Fade support because Ms. Rivera reports feeling more confident.",
        tag: "Too early to fade",
        feedback:
          "Teacher confidence matters, but confidence alone is not enough reason to reduce support. Implementation is still inconsistent in the exact routine that matters most, so fading now may remove support before the practice is stable."
      },
      {
        id: "D",
        text: "Add more written materials and reduce direct coaching time.",
        tag: "Addresses the wrong problem",
        feedback:
          "Additional written materials may seem helpful, but the issue is not access to information. The issue is real-time use during a complex classroom moment. Reducing direct coaching would likely weaken support right when precision is needed."
      }
    ]
  },
  {
    label: "Round 3",
    title: "What support could best build implementation fluency now?",
    text: "Ms. Rivera now understands the plan during meetings, but when coaching is not immediately present, she sometimes slips back into older responses. The team wants a support that keeps the plan active between coaching contacts without creating a major time burden.",
    options: [
      {
        id: "A",
        text: "Add a brief scenario-based rehearsal tool with immediate feedback between coaching contacts.",
        tag: "Best fit for current need",
        feedback:
          "This option supports fluency without adding a heavy burden. Ms. Rivera seems to understand the plan conceptually, but still benefits from low-burden rehearsal that keeps the right responses active between coaching contacts."
      },
      {
        id: "B",
        text: "Hold a longer monthly professional development session on individualized behavior supports.",
        tag: "Could help, but too broad for the current need",
        feedback:
          "A larger training session may reinforce background knowledge, but it is less likely to strengthen the moment-to-moment fluency Ms. Rivera still needs. The challenge now is not general understanding. It is maintaining accurate use in daily practice."
      },
      {
        id: "C",
        text: "Encourage Ms. Rivera to review the written plan more often on her own.",
        tag: "Workable, but weak as a stand-alone support",
        feedback:
          "Reviewing the plan may help as a reminder, but by itself it is unlikely to build the kind of practice-based fluency the teacher needs. The support is too passive for a barrier that shows up in active classroom moments."
      },
      {
        id: "D",
        text: "End support now because she has already received coaching and knows the plan.",
        tag: "Fades support before fluency is stable",
        feedback:
          "This response assumes that knowing the plan means the teacher no longer needs support. In reality, implementation may still benefit from lighter-touch rehearsal and prompts before coaching is fully faded."
      }
    ]
  }
];

const roleLabels = {
  "best-fit": "Best Fit",
  workable: "Workable",
  mismatch: "Mismatch"
};

const roleRecommendations = {
  "best-fit": ["B", "B", "A"],
  workable: ["A", "A", "C"],
  mismatch: ["D", "D", "D"]
};

const roleSummaries = {
  "best-fit":
    "Your group consistently chose supports that matched the implementer’s current need. Across the scenario, the pathway emphasized fit, timing, and the idea that coaching intensity should change as teacher needs change.",
  workable:
    "Your group chose options that could help, but were not always the strongest match for the barrier at hand. This pathway highlights how schools often offer support that is well intentioned but too broad, too passive, or not well timed.",
  mismatch:
    "Your group chose options that were least aligned with the teacher’s current barrier. This pathway helps surface common ways support can miss the mark, such as waiting too long, fading too early, or targeting the wrong problem."
};

function showScreen(screenId) {
  screens.forEach((screen) => screen.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
}

document.getElementById("start-btn").addEventListener("click", () => {
  showScreen("screen-role");
});

document.querySelectorAll(".role-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".role-btn").forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
    gameState.role = btn.dataset.role;
    document.getElementById("begin-scenario-btn").disabled = false;
  });
});

document.getElementById("begin-scenario-btn").addEventListener("click", () => {
  showScreen("screen-scenario");
});

document.querySelectorAll("[data-go]").forEach((btn) => {
  btn.addEventListener("click", () => {
    showScreen(btn.dataset.go);
  });
});

document.getElementById("to-round-1-btn").addEventListener("click", () => {
  gameState.currentRound = 0;
  renderRound();
  showScreen("screen-round");
});

document.getElementById("round-back-btn").addEventListener("click", () => {
  if (gameState.currentRound === 0) {
    showScreen("screen-scenario");
  } else {
    renderRound();
    showScreen("screen-round");
  }
});

function renderRound() {
  const round = rounds[gameState.currentRound];
  document.getElementById("round-label").textContent = round.label;
  document.getElementById("round-title").textContent = round.title;
  document.getElementById("round-text").textContent = round.text;

  const container = document.getElementById("choices-container");
  container.innerHTML = "";

  round.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "choice-btn";
    button.innerHTML = `
      <span class="choice-letter">${option.id}</span>
      <span class="choice-text">${option.text}</span>
    `;

    button.addEventListener("click", () => {
      gameState.choices.push({
        round: gameState.currentRound + 1,
        choiceId: option.id,
        text: option.text,
        tag: option.tag,
        feedback: option.feedback
      });

      document.getElementById("feedback-label").textContent = round.label + " Feedback";
      document.getElementById("feedback-title").textContent = `Choice ${option.id}`;
      document.getElementById("feedback-chip").textContent = option.tag;
      document.getElementById("feedback-text").textContent = option.feedback;

      showScreen("screen-feedback");
    });

    container.appendChild(button);
  });
}

document.getElementById("continue-btn").addEventListener("click", () => {
  if (gameState.currentRound < rounds.length - 1) {
    gameState.currentRound += 1;
    renderRound();
    showScreen("screen-round");
  } else {
    renderWrapUp();
    showScreen("screen-wrap");
  }
});

function renderWrapUp() {
  document.getElementById("final-role").textContent = roleLabels[gameState.role];

  const expected = roleRecommendations[gameState.role];
  const selected = gameState.choices.map((choice) => choice.choiceId);

  let pathSentence = roleSummaries[gameState.role];

  if (expected && selected.length === expected.length) {
    const matchCount = selected.filter((choice, i) => choice === expected[i]).length;

    if (gameState.role === "best-fit" && matchCount < 3) {
      pathSentence += " Your group explored some alternate pathways too, which should make for a strong debrief discussion.";
    }

    if (gameState.role === "workable" && matchCount < 2) {
      pathSentence += " Some of your choices drifted either stronger or weaker than the middle path, which is useful to talk through.";
    }

    if (gameState.role === "mismatch" && matchCount < 2) {
      pathSentence += " A few of your choices were less off-track than expected, which is interesting to compare during the share-out.";
    }
  }

  document.getElementById("final-summary").textContent = pathSentence;
}

document.getElementById("restart-btn").addEventListener("click", () => {
  gameState.role = null;
  gameState.currentRound = 0;
  gameState.choices = [];
  document.querySelectorAll(".role-btn").forEach((b) => b.classList.remove("selected"));
  document.getElementById("begin-scenario-btn").disabled = true;
  showScreen("screen-landing");
});
