// Quiz Data - 50 questions (10 per category)
const quizData = {
    arrays: [
      {
        question: "What is the time complexity of inserting an element at the end of an array (without dynamic resizing)?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        correctAnswer: 0,
        explanation: "Inserting at the end of a static array takes constant time if space is available.",
        hint: "Think about index-based access in arrays."
      },
      {
        question: "Which method is used to reverse an array in-place in JavaScript?",
        options: [".reverse()", ".revert()", ".flip()", ".undo()"],
        correctAnswer: 0,
        explanation: "The .reverse() method modifies the array in-place and reverses its elements.",
        hint: "It’s a built-in array prototype method."
      },
      {
        question: "What does Kadane’s Algorithm solve?",
        options: [
          "Finding the maximum product subarray",
          "Finding the shortest path in a graph",
          "Finding the longest increasing subsequence",
          "Finding the maximum sum subarray"
        ],
        correctAnswer: 3,
        explanation: "Kadane’s algorithm is used to find the maximum sum contiguous subarray.",
        hint: "It’s a greedy algorithm for subarray problems."
      },
      {
        question: "What is the output of [1,2,3].slice(0,2)?",
        options: ["[1,2]", "[2,3]", "[1,2,3]", "[0,1]"],
        correctAnswer: 0,
        explanation: "The slice method returns a shallow copy of a portion of an array from start to end (not inclusive).",
        hint: "End index is not included."
      },
      {
        question: "Which of the following is not a valid array method?",
        options: ["push()", "pop()", "peek()", "shift()"],
        correctAnswer: 2,
        explanation: "peek() is generally used with stacks, not arrays.",
        hint: "Think native JS methods."
      }
    ],
  
    strings: [
      {
        question: "What is the time complexity of checking if a string is a palindrome?",
        options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
        correctAnswer: 1,
        explanation: "We compare characters from both ends which takes linear time.",
        hint: "You have to check every character."
      },
      {
        question: "Which method is used to find the length of a string in JavaScript?",
        options: ["length()", "getLength()", "size", "length"],
        correctAnswer: 3,
        explanation: "length is a property, not a method, used to find string length.",
        hint: "No brackets needed."
      },
      {
        question: "Which algorithm is commonly used for pattern matching?",
        options: ["KMP", "DFS", "BFS", "Dijkstra"],
        correctAnswer: 0,
        explanation: "Knuth-Morris-Pratt (KMP) is used for efficient string pattern matching.",
        hint: "Starts with 'K'."
      },
      {
        question: "What does `.charAt(2)` return for 'OpenAI'?",
        options: ["p", "e", "eAI", "n"],
        correctAnswer: 1,
        explanation: "charAt returns the character at the given index. 'OpenAI'[2] is 'e'.",
        hint: "Indexing starts from 0."
      },
      {
        question: "Which function converts 'hello' to 'HELLO'?",
        options: [".toUpperCase()", ".capitalize()", ".upper()", ".makeUpper()"],
        correctAnswer: 0,
        explanation: "JavaScript’s .toUpperCase() converts all characters to uppercase.",
        hint: "Standard JS method."
      }
    ],
  
    linkedlists: [
      {
        question: "Which pointer type is used in a singly linked list node?",
        options: ["prev", "random", "next", "left"],
        correctAnswer: 2,
        explanation: "Each node in a singly linked list stores data and a 'next' pointer.",
        hint: "Only forward direction."
      },
      {
        question: "What’s the time complexity of inserting a node at the beginning of a singly linked list?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        correctAnswer: 0,
        explanation: "You just change the head pointer in constant time.",
        hint: "It doesn't require traversal."
      },
      {
        question: "What is the head of a linked list?",
        options: [
          "The last node",
          "The node containing maximum value",
          "The first node",
          "The null node"
        ],
        correctAnswer: 2,
        explanation: "Head points to the start of a linked list.",
        hint: "It’s where traversal begins."
      },
      {
        question: "Which of the following is best suited for implementing an LRU cache?",
        options: ["Stack", "Queue", "HashMap + LinkedList", "Heap"],
        correctAnswer: 2,
        explanation: "Doubly Linked List with HashMap gives O(1) insert/delete for LRU cache.",
        hint: "Two data structures combined."
      },
      {
        question: "What’s the time complexity to find the middle of a linked list?",
        options: ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
        correctAnswer: 1,
        explanation: "Traverse with slow and fast pointer to reach mid in linear time.",
        hint: "Two pointers moving at different speeds."
      }
    ],
  
    stacks_queues: [
      {
        question: "What is the time complexity of push() in a stack?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
        correctAnswer: 2,
        explanation: "Push adds element to the top of stack in constant time.",
        hint: "It’s just a pointer move."
      },
      {
        question: "Which data structure uses FIFO order?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        correctAnswer: 1,
        explanation: "Queue follows First-In First-Out.",
        hint: "Think line of people."
      },
      {
        question: "Which operation removes the top item from a stack?",
        options: ["pop()", "push()", "shift()", "unstack()"],
        correctAnswer: 0,
        explanation: "pop() removes the top-most element.",
        hint: "Opposite of push()."
      },
      {
        question: "Which structure is used for function call management?",
        options: ["Queue", "Stack", "Heap", "Array"],
        correctAnswer: 1,
        explanation: "Function calls follow LIFO, managed using stack.",
        hint: "Think call stack."
      },
      {
        question: "Which method removes the first item from an array in JS?",
        options: ["pop()", "shift()", "unshift()", "slice()"],
        correctAnswer: 1,
        explanation: "shift() removes the first element in an array.",
        hint: "Shifts elements to the left."
      }
    ],
  
    trees: [
      {
        question: "What is the time complexity of in-order traversal in a binary tree?",
        options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
        correctAnswer: 0,
        explanation: "All nodes are visited once → O(n).",
        hint: "Each node is touched once."
      },
      {
        question: "Which tree has all nodes with 0 or 2 children?",
        options: ["Binary Search Tree", "AVL Tree", "Full Binary Tree", "Heap"],
        correctAnswer: 2,
        explanation: "A full binary tree is one where every node has either 0 or 2 children.",
        hint: "No node has only 1 child."
      },
      {
        question: "In a BST, where do smaller values go?",
        options: ["Left", "Right", "Anywhere", "Doesn't matter"],
        correctAnswer: 0,
        explanation: "In BST, left < root < right.",
        hint: "Follow the BST rule."
      },
      {
        question: "Which traversal method is used in DFS?",
        options: ["Level Order", "Breadth First", "In-order", "All of the above"],
        correctAnswer: 2,
        explanation: "DFS includes in-order, pre-order, and post-order traversals.",
        hint: "Goes deep first."
      },
      {
        question: "Which of the following is not a self-balancing tree?",
        options: ["AVL", "Red-Black", "Binary Heap", "B-Tree"],
        correctAnswer: 2,
        explanation: "Heap is not a BST and not used for search trees.",
        hint: "Think about search efficiency."
      }
    ],
  
    graphs: [
      {
        question: "What is the time complexity of BFS in a graph?",
        options: ["O(V + E)", "O(V^2)", "O(E log V)", "O(V log V)"],
        correctAnswer: 0,
        explanation: "Each node and edge is visited once in BFS → O(V+E).",
        hint: "BFS visits every edge and node."
      },
      {
        question: "Which data structure is used for DFS?",
        options: ["Queue", "Stack", "Heap", "Tree"],
        correctAnswer: 1,
        explanation: "DFS uses a stack (explicit or recursion).",
        hint: "Think backtracking."
      },
      {
        question: "Which algorithm finds the shortest path in a weighted graph?",
        options: ["Prim's", "DFS", "Dijkstra's", "Kruskal's"],
        correctAnswer: 2,
        explanation: "Dijkstra’s is a greedy algorithm for shortest path.",
        hint: "Not MST, it’s for distance."
      },
      {
        question: "In adjacency matrix, what is the space complexity?",
        options: ["O(1)", "O(n)", "O(n^2)", "O(n log n)"],
        correctAnswer: 2,
        explanation: "Adjacency matrix needs space proportional to n^2.",
        hint: "Think of a full matrix."
      },
      {
        question: "Which of the following is true for a directed graph?",
        options: [
          "Edges are bidirectional",
          "Cycles can't exist",
          "Each edge has direction",
          "DFS won't work"
        ],
        correctAnswer: 2,
        explanation: "Directed graphs have edges with direction from one node to another.",
        hint: "Think arrows."
      }
    ]
  };
// DOM Elements
const categoriesContainer = document.getElementById('categories');
const submitBtn = document.getElementById('submit-btn');
const topicsTabs = document.getElementById('topicsTabs');
const startBtn = document.getElementById('startQuiz');
const userInfo = document.getElementById('userInfo');
const quizContent = document.getElementById('quizContent');
const resultSection = document.getElementById('result');
const timerDisplay = document.querySelector('.timer span');
const progressDisplay = document.getElementById('progress');
const darkModeToggle = document.getElementById('darkModeToggle');
const userNameInput = document.getElementById('userName');
const userNameDisplay = document.getElementById('userNameDisplay');
const reviewBtn = document.getElementById('review-btn');
const reviewContainer = document.getElementById('reviewContainer');
const answerReview = document.getElementById('answerReview');
const backToResultsBtn = document.querySelector('.back-to-results');
const tryAgainBtn = document.getElementById('tryAgainBtn');
const reviewIncorrectBtn = document.getElementById('reviewIncorrectBtn');
const categoryScores = document.getElementById('categoryScores');
const percentageDisplay = document.getElementById('percentage');
const feedbackDisplay = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');
const loadingSpinner = document.getElementById('loadingSpinner');

// Quiz State
let userAnswers = {};
let currentUser = '';
let timeLeft = 15 * 60; // 15 minutes
let timer;
const QUIZ_STATE_KEY = 'quizAppState';

// Format category name for display
function formatCategoryName(category) {
  return category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1').replace(/_/g, ' & ');
}

// Initialize the application
function initApp() {
  // Set up event listeners
  if (startBtn) startBtn.addEventListener('click', startQuiz);
  if (submitBtn) submitBtn.addEventListener('click', submitAnswers);
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }
  if (reviewBtn) reviewBtn.addEventListener('click', () => showReview(false));
  if (reviewIncorrectBtn) reviewIncorrectBtn.addEventListener('click', () => showReview(true));
  if (backToResultsBtn) backToResultsBtn.addEventListener('click', hideReview);
  if (tryAgainBtn) tryAgainBtn.addEventListener('click', restartQuiz);

  // Initialize dark mode
  if (localStorage.getItem('theme') === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
  }

  // Load saved state
  loadState();

  // Initialize the quiz
  initializeQuiz();
}

// Load saved state
function loadState() {
  // Only restore state if the same user returns in the same session
  // Otherwise, always start fresh
  userAnswers = {};
  currentUser = '';
  timeLeft = 15 * 60;
  // Do not auto-start quiz or restore answers
}

// Start the app when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// New: Loading spinner and toast notification helpers
function showSpinner() { if (loadingSpinner) loadingSpinner.classList.remove('hidden'); }
function hideSpinner() { if (loadingSpinner) loadingSpinner.classList.add('hidden'); }

function showToast(msg, type = 'info') {
  let toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'alert');
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => { toast.classList.add('show'); }, 10);
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 500); }, 2500);
}

// Audio feedback
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const completeSound = document.getElementById('complete-sound');

// Start quiz
function startQuiz() {
  const name = userNameInput.value.trim();
  if (!name) return;

  // Always reset state for a new person
  userAnswers = {};
  timeLeft = 15 * 60;
  currentUser = name;
  if (userNameDisplay) userNameDisplay.textContent = name;
  if (userInfo) userInfo.classList.add('hidden');
  if (quizContent) quizContent.classList.remove('hidden');
  if (resultSection) resultSection.classList.add('hidden');
  if (answerReview) answerReview.classList.add('hidden');

  // Initialize the first tab as active if none is active
  if (!document.querySelector('.topic-tab.active')) {
    const firstTab = document.querySelector('.topic-tab');
    if (firstTab) firstTab.click();
  }

  initializeQuiz();
  updateProgress();
  startTimer();
  saveState();
  showToast('Quiz started! Good luck!', 'success');
}

// Save state
function saveState() {
  const state = { userAnswers, timeLeft, quizStarted: true, userName: currentUser };
  localStorage.setItem(QUIZ_STATE_KEY, JSON.stringify(state));
}

// Timer
function startTimer() {
  updateTimerDisplay();
  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    saveState();
    if (timeLeft <= 0) {
      clearInterval(timer);
      showToast('Time is up! Submitting...', 'error');
      submitAnswers();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Initialize quiz
function initializeQuiz() {
  // Create topic tabs and category content
  topicsTabs.innerHTML = '';
  categoriesContainer.innerHTML = '';

  Object.entries(quizData).forEach(([category, questions], index) => {
    // Create tab
    const tab = document.createElement('div');
    tab.className = `topic-tab ${index === 0 ? 'active' : ''}`;
    tab.textContent = formatCategoryName(category);
    tab.dataset.category = category;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('tabindex', index === 0 ? '0' : '-1');
    tab.setAttribute('aria-selected', index === 0 ? 'true' : 'false');

    // Add click event to switch between tabs
    tab.addEventListener('click', () => {
      document.querySelectorAll('.topic-tab').forEach((t, idx) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
        t.setAttribute('tabindex', '-1');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      tab.setAttribute('tabindex', '0');
      document.querySelectorAll('.category').forEach(cat => cat.classList.remove('active'));
      const categoryEl = document.getElementById(category);
      if (categoryEl) {
        setTimeout(() => {
          categoryEl.classList.add('active');
          categoryEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 10);
      }
    });
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const tabs = Array.from(document.querySelectorAll('.topic-tab'));
        let idx = tabs.indexOf(document.activeElement);
        if (e.key === 'ArrowRight') idx = (idx + 1) % tabs.length;
        else idx = (idx - 1 + tabs.length) % tabs.length;
        tabs[idx].focus();
        tabs[idx].click();
      }
    });

    topicsTabs.appendChild(tab);

    // Create category content
    const categoryHtml = `
      <div class="category ${index === 0 ? 'active' : ''}" id="${category}">
        <div class="category-content">
          ${questions.map((q, qIndex) => `
            <div class="question-container">
              <div class="question">
                <span class="question-number">${qIndex + 1}.</span>
                <span class="question-text">${q.question}</span>
                ${q.hint ? `
                <button class="show-hint" type="button" onclick="this.nextElementSibling.style.display='block';this.style.display='none';">
                  <i class="fas fa-lightbulb"></i> Show Hint
                </button>
                <div class="hint" style="display:none;">
                  <i class="fas fa-lightbulb"></i>
                  <span class="hint-text">${q.hint}</span>
                </div>` : ''}
              </div>
              <div class="options">
                ${q.options.map((option, oIndex) => `
                  <label class="option">
                    <input type="radio" 
                           name="${category}_${qIndex}" 
                           value="${oIndex}" 
                           ${userAnswers[`${category}_${qIndex}`] === oIndex ? 'checked' : ''}>
                    <span class="option-text">${option}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    categoriesContainer.insertAdjacentHTML('beforeend', categoryHtml);
  });

  updateProgress();
  updateTimerDisplay();
}

// Capture answer
categoriesContainer.addEventListener('change', e => {
  const { name, value } = e.target;
  if (name && value !== undefined) {
    // Removed: feedback/toast on option selection
    userAnswers[name] = parseInt(value);
    updateProgress();
    saveState();
  }
});

// Visual progress bar (updateProgress)
function updateProgress() {
  const total = Object.values(quizData).reduce((sum, q) => sum + q.length, 0);
  const answered = Object.keys(userAnswers).length;
  progressDisplay.textContent = `${answered}/${total}`;
  // New: update visual progress bar if exists
  const progressBar = document.getElementById('progressBar');
  if (progressBar) {
    let percent = (answered / total) * 100;
    progressBar.style.setProperty('--progress', percent + '%');
  }
}

// Submit quiz
function submitAnswers() {
  clearInterval(timer);

  let correct = 0, total = 0;
  const categoryBreakdown = {};
  const categoryScoreHtml = [];

  Object.entries(quizData).forEach(([category, questions]) => {
    let catCorrect = 0;
    questions.forEach((q, i) => {
      const qid = `${category}_${i}`;
      total++;
      if (userAnswers[qid] === q.correctAnswer) {
        correct++;
        catCorrect++;
      }
    });
    categoryBreakdown[category] = { correct: catCorrect, total: questions.length };
    categoryScoreHtml.push(`
      <div class="category-score">
        <h4>${formatCategoryName(category)}</h4>
        <p>${catCorrect}/${questions.length}</p>
      </div>
    `);
  });

  // Score circle
  if (scoreDisplay) scoreDisplay.textContent = correct;
  if (percentageDisplay) percentageDisplay.textContent = `${Math.round((correct / total) * 100)}%`;
  if (feedbackDisplay) {
    let feedback = "Keep practicing!";
    const percent = (correct / total) * 100;
    if (percent === 100) feedback = "Outstanding!";
    else if (percent >= 80) feedback = "Great job!";
    else if (percent >= 60) feedback = "Good effort!";
    feedbackDisplay.textContent = feedback;
  }
  if (categoryScores) categoryScores.innerHTML = categoryScoreHtml.join('');

  // Animate score circle
  const circle = document.querySelector('.progress-ring-circle');
  if (circle) {
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    const percent = correct / total;
    circle.style.strokeDashoffset = circumference - percent * circumference;
  }

  // Play audio feedback and show toast on submit
  if (completeSound) completeSound.play();
  showToast('Quiz submitted!', 'success');

  // Show result
  if (resultSection) resultSection.classList.remove('hidden');
  if (quizContent) quizContent.classList.add('hidden');
  if (answerReview) answerReview.classList.add('hidden');
  localStorage.removeItem(QUIZ_STATE_KEY);

  // Hide review buttons after submission
  if (reviewBtn) reviewBtn.style.display = 'none';
  if (reviewIncorrectBtn) reviewIncorrectBtn.style.display = 'none';
}

// Review answers (fix: always show review section and scroll to it)
function showReview(incorrectOnly = false) {
  if (!reviewContainer) return;
  reviewContainer.innerHTML = '';
  let reviewCount = 0;
  let totalCount = 0;
  Object.entries(quizData).forEach(([category, questions]) => {
    questions.forEach((q, i) => {
      totalCount++;
      const qid = `${category}_${i}`;
      const userAns = userAnswers[qid];
      const isCorrect = userAns === q.correctAnswer;
      if (incorrectOnly && isCorrect) return;
      reviewCount++;
      reviewContainer.insertAdjacentHTML('beforeend', `
        <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
          <div class="review-question">${q.question}</div>
          <div class="review-answer ${isCorrect ? 'correct' : 'incorrect'}">
            Your answer: ${userAns !== undefined ? q.options[userAns] : '<em>Not answered</em>'}
          </div>
          <div class="review-answer correct">
            Correct answer: ${q.options[q.correctAnswer]}
          </div>
          <div class="review-explanation">${q.explanation || ''}</div>
        </div>
      `);
    });
  });
  // Show review progress if present
  const reviewProgress = document.getElementById('reviewProgress');
  if (reviewProgress) {
    reviewProgress.innerHTML = `<span id="reviewCurrent">${reviewCount}</span>/<span id="reviewTotal">${incorrectOnly ? reviewCount : totalCount}</span>`;
    reviewProgress.style.display = 'block';
  }
  if (answerReview) {
    answerReview.classList.remove('hidden');
    // Optionally scroll to review section for better UX
    setTimeout(() => {
      answerReview.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
  if (resultSection) resultSection.classList.add('hidden');
}

function hideReview() {
  if (answerReview) answerReview.classList.add('hidden');
  if (resultSection) resultSection.classList.remove('hidden');
}

// Restart quiz
function restartQuiz() {
  userAnswers = {};
  timeLeft = 15 * 60;
  if (resultSection) resultSection.classList.add('hidden');
  if (quizContent) quizContent.classList.remove('hidden');
  initializeQuiz();
  updateProgress();
  startTimer();
}

// Dark Mode Toggle
function toggleDarkMode() {
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}

// Clear quiz state when user leaves or reloads the site
window.addEventListener('beforeunload', () => {
  localStorage.removeItem(QUIZ_STATE_KEY);
});