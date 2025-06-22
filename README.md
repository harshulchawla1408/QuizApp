# Advanced Interactive Quiz Application

A responsive, feature-rich quiz application built with vanilla JavaScript, HTML, and CSS. Test your knowledge across multiple topics of DSA with this elegant and user-friendly quiz app.

## Features

- **Multiple Categories**: 6 categories with 5 questions each 
- **Interactive UI**: Clean, modern interface with smooth animations
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Timer**: 15-minute countdown with auto-submit
- **Progress Tracking**: Real-time progress indicator
- **Hints**: Get help when you're stuck on a question
- **Detailed Results**: Comprehensive score breakdown by category
- **Answer Review**: Review all questions with explanations
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **No Dependencies**: Built with vanilla JavaScript (no frameworks required)
- **Audio Feedback**: Sound effects for correct/incorrect answers

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/quiz-app.git
   cd quiz-app
   ```

   Or simply download the ZIP file and extract it

2. **Open the application**
   - Navigate to the project directory
   - Double-click on `index.html` to open it in your default browser
   - Alternatively, use a local server:
     ```bash
     # Using Python (if installed)
     python -m http.server 8000
     # Then open http://localhost:8000 in your browser
     ```

## 🎮 How to Use

1. **Start the Quiz**
   - Enter your name in the input field
   - Click "Start Quiz" to begin

2. **Answering Questions**
   - Questions are organized by category in collapsible sections
   - Click on a category to expand/collapse it
   - Select one answer per question
   - Use the "Show Hint" button if you need help

3. **Submitting the Quiz**
   - Click "Submit Quiz" when you're done
   - Review your score and category breakdown

4. **Try Again**
   - Click "Try Again" to restart the quiz with new questions

## 🛠️ How to Add More Questions

1. Open `script.js` in a text editor
2. Find the `quizData` object
3. Add new questions to the appropriate category array using this format:

   ```javascript
   {
       question: "Your question here?",
       options: ["Option 1", "Option 2", "Option 3", "Option 4"],
       correctAnswer: 0, // Index of the correct option (0-3)
       explanation: "Detailed explanation of the correct answer.",
       hint: "Helpful hint for the question"
   }
   ```

## 📱 Responsive Design

The quiz is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🎨 Customization

### Changing Colors and Styles
Edit the CSS variables in `style.css` to customize the look:

```css
:root {
    --primary-color: #4e73df;
    --success-color: #1cc88a;
    --danger-color: #e74c3c;
    --text-color: #2c3e50;
    --bg-color: #f8f9fc;
    --card-bg: #ffffff;
}
```

### Adding Sound Effects
Replace the audio files in the HTML or update the source URLs:

```html
<audio id="correct-sound" preload="auto">
    <source src="path/to/your/correct-sound.mp3" type="audio/mpeg">
</audio>
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for the Poppins font
- [Mixkit](https://mixkit.co/) for sound effects

## 📬 Contact

Have questions or suggestions? Feel free to open an issue or submit a pull request!

---

Happy Quizzing! 🎉
