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
  
    stacksqueues: [
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
// ✅ Enhanced DSA-Based Quiz App JavaScript

// DOM Elements
const categoriesContainer = document.getElementById('categories');
const submitBtn = document.getElementById('submit-btn');
const startQuizBtn = document.getElementById('startQuiz');
const userNameInput = document.getElementById('userName');
const userNameDisplay = document.getElementById('userNameDisplay');
const userInfoSection = document.getElementById('userInfo');
const quizContent = document.getElementById('quizContent');
const resultSection = document.getElementById('result');
const progressDisplay = document.getElementById('progress');
const timerDisplay = document.querySelector('.timer span');
const darkModeToggle = document.getElementById('darkModeToggle');

// Quiz State
let userAnswers = {};
let timeLeft = 900; // 15 minutes
let timer;
const QUIZ_STATE_KEY = 'quizAppState';

// Load saved state
document.addEventListener('DOMContentLoaded', () => {
  const savedState = JSON.parse(localStorage.getItem(QUIZ_STATE_KEY));
  if (savedState) {
    userAnswers = savedState.userAnswers || {};
    timeLeft = savedState.timeLeft || 900;
  }
  initializeQuiz();
  updateProgress();
});

// Start quiz
startQuizBtn.addEventListener('click', () => {
  const name = userNameInput.value.trim();
  if (!name) return;
  userNameDisplay.textContent = name;
  userInfoSection.classList.add('hidden');
  quizContent.classList.remove('hidden');
  startTimer();
});

// Save state
function saveState() {
  const state = { userAnswers, timeLeft };
  localStorage.setItem(QUIZ_STATE_KEY, JSON.stringify(state));
}

// Timer
function startTimer() {
  updateTimerDisplay();
  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    saveState();
    if (timeLeft <= 0) {
      clearInterval(timer);
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
  categoriesContainer.innerHTML = '';
  Object.entries(quizData).forEach(([category, questions]) => {
    const section = document.createElement('div');
    section.className = 'category';
    section.innerHTML = `
      <div class="category-header"><h3>${category}</h3></div>
      <div class="category-content"></div>
    `;

    const content = section.querySelector('.category-content');

    questions.forEach((q, i) => {
      const qid = `${category}-${i}`;
      const qDiv = document.createElement('div');
      qDiv.className = 'question';
      qDiv.innerHTML = `
        <div>${i + 1}. ${q.question}</div>
        ${q.options.map((opt, idx) => `
          <label><input type="radio" name="${qid}" value="${idx}" ${userAnswers[qid] == idx ? 'checked' : ''}> ${opt}</label>
        `).join('')}
        <div class="explanation" style="display:none; font-style:italic; color:gray;">Explanation: ${q.explanation}</div>
      `;
      content.appendChild(qDiv);
    });

    section.querySelector('.category-header').addEventListener('click', () => {
      section.classList.toggle('active');
    });

    categoriesContainer.appendChild(section);
  });
}

// Capture answer
categoriesContainer.addEventListener('change', e => {
  const { name, value } = e.target;
  if (name && value !== undefined) {
    userAnswers[name] = parseInt(value);
    updateProgress();
    saveState();
  }
});

// Update progress
function updateProgress() {
  const total = Object.values(quizData).reduce((sum, q) => sum + q.length, 0);
  const answered = Object.keys(userAnswers).length;
  progressDisplay.textContent = `${answered}/${total}`;
}

// Submit quiz
submitBtn.addEventListener('click', submitAnswers);

// Try Again Button (Optional: Add this button to your HTML with id 'tryAgainBtn')
const tryAgainBtn = document.getElementById('tryAgainBtn');
if (tryAgainBtn) {
  tryAgainBtn.addEventListener('click', () => {
    userAnswers = {};
    timeLeft = 900;
    resultSection.classList.add('hidden');
    quizContent.classList.remove('hidden');
    initializeQuiz();
    updateProgress();
    startTimer();
  });
}

// Review Incorrect Button (Optional: Add this button to your HTML with id 'reviewIncorrectBtn')
const reviewIncorrectBtn = document.getElementById('reviewIncorrectBtn');
if (reviewIncorrectBtn) {
  reviewIncorrectBtn.addEventListener('click', () => {
    resultSection.classList.add('hidden');
    quizContent.classList.remove('hidden');
    initializeQuiz();
    Object.entries(quizData).forEach(([category, questions]) => {
      questions.forEach((q, i) => {
        const qid = `${category}-${i}`;
        if (userAnswers[qid] === q.correctAnswer) {
          const questionEl = document.querySelector(`[name='${qid}']`).closest('.question');
          if (questionEl) questionEl.style.display = 'none';
        }
      });
    });
    updateProgress();
  });
}

function submitAnswers() {
  clearInterval(timer);
  let correct = 0, total = 0;
  const categoryBreakdown = {};

  Object.entries(quizData).forEach(([category, questions]) => {
    let catCorrect = 0;
    questions.forEach((q, i) => {
      const qid = `${category}-${i}`;
      total++;
      const qElem = document.querySelector(`input[name='${qid}']:checked`);
      const correctElem = document.querySelector(`[name='${qid}'][value='${q.correctAnswer}']`);
      if (userAnswers[qid] === q.correctAnswer) {
        correct++;
        catCorrect++;
      }
      // Show explanation
      const explanation = correctElem?.closest('.question')?.querySelector('.explanation');
      if (explanation) explanation.style.display = 'block';
    });
    categoryBreakdown[category] = { correct: catCorrect, total: questions.length };
  });

  let breakdownHTML = '<ul>';
  Object.entries(categoryBreakdown).forEach(([cat, { correct, total }]) => {
    breakdownHTML += `<li><strong>${cat}:</strong> ${correct}/${total}</li>`;
  });
  breakdownHTML += '</ul>';

  resultSection.innerHTML = `
    <h2>Your Score: ${correct}/${total}</h2>
    <h3>Category-wise Breakdown:</h3>
    ${breakdownHTML}
  `;

  resultSection.classList.remove('hidden');
  quizContent.classList.add('hidden');
  localStorage.removeItem(QUIZ_STATE_KEY);
}

// Dark Mode Toggle
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
}
